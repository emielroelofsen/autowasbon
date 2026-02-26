/**
 * Local dev server: serves static files and /api/spotify-token for Spotify API.
 * Usage: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node server.js
 * Then open http://localhost:8080/flow-new.html
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let cachedToken = null;
let tokenExpiry = 0;

async function getSpotifyToken() {
	if (!CLIENT_ID || !CLIENT_SECRET) {
		return { error: 'Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET env vars' };
	}
	if (cachedToken && Date.now() < tokenExpiry - 60000) {
		return { access_token: cachedToken, expires_in: Math.floor((tokenExpiry - Date.now()) / 1000) };
	}
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
		},
		body: 'grant_type=client_credentials'
	});
	const data = await res.json();
	if (!res.ok) return { error: data.error_description || data.error || res.statusText };
	cachedToken = data.access_token;
	tokenExpiry = Date.now() + (data.expires_in || 3600) * 1000;
	return { access_token: data.access_token, expires_in: data.expires_in };
}

async function getTrackInfo(trackId) {
	const tokenRes = await getSpotifyToken();
	if (tokenRes.error) return { error: tokenRes.error };
	const res = await fetch('https://api.spotify.com/v1/tracks/' + encodeURIComponent(trackId), {
		headers: { Authorization: 'Bearer ' + tokenRes.access_token }
	});
	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		return { error: err.error?.message || res.statusText };
	}
	const track = await res.json();
	const artist = track.artists?.[0]?.name || '';
	const name = track.name || '';
	return { artist, name };
}

const mime = {
	'.html': 'text/html',
	'.js': 'application/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.woff2': 'font/woff2'
};

function parseQuery(url) {
	const i = url.indexOf('?');
	if (i === -1) return {};
	const q = {};
	url.slice(i + 1).split('&').forEach(pair => {
		const [k, v] = pair.split('=').map(s => decodeURIComponent(s || ''));
		if (k) q[k] = v;
	});
	return q;
}

const server = http.createServer(async (req, res) => {
	const url = req.url === '/' ? '/flow-new.html' : req.url.split('?')[0];
	if (url === '/api/spotify-token') {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'application/json');
		const body = await getSpotifyToken();
		if (body.error) {
			res.statusCode = 400;
			return res.end(JSON.stringify(body));
		}
		return res.end(JSON.stringify(body));
	}
	if (url === '/api/spotify-track') {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'application/json');
		const q = parseQuery(req.url);
		const id = q.id;
		if (!id) {
			res.statusCode = 400;
			return res.end(JSON.stringify({ error: 'Missing id' }));
		}
		const body = await getTrackInfo(id);
		if (body.error) {
			res.statusCode = 400;
			return res.end(JSON.stringify(body));
		}
		return res.end(JSON.stringify(body));
	}
	const file = path.join(__dirname, url);
	fs.readFile(file, (err, data) => {
		if (err) {
			res.statusCode = 404;
			return res.end('Not found');
		}
		const ext = path.extname(file);
		res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
		res.end(data);
	});
});

server.listen(PORT, () => {
	console.log(`Server http://localhost:${PORT}`);
	console.log('Open http://localhost:' + PORT + '/flow-new.html');
	if (!CLIENT_ID || !CLIENT_SECRET) {
		console.warn('Warn: SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET not set – Spotify playback will fail.');
	}
});
