/**
 * Vercel serverless: returns a Spotify API access token (client credentials).
 * Set env vars: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET
 */

async function getSpotifyToken() {
	const id = process.env.SPOTIFY_CLIENT_ID;
	const secret = process.env.SPOTIFY_CLIENT_SECRET;
	if (!id || !secret) {
		return { error: 'Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET' };
	}
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + Buffer.from(id + ':' + secret).toString('base64')
		},
		body: 'grant_type=client_credentials'
	});
	const data = await res.json();
	if (!res.ok) {
		return { error: data.error_description || data.error || res.statusText };
	}
	return { access_token: data.access_token, expires_in: data.expires_in };
}

export default function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	getSpotifyToken().then((body) => {
		if (body.error) {
			return res.status(400).json(body);
		}
		res.status(200).json(body);
	}).catch((err) => {
		res.status(500).json({ error: String(err.message) });
	});
}
