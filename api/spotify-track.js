/**
 * Vercel serverless: returns { artist, name } for a Spotify track. Query: ?id=trackId
 * Credentials are read from environment via _credentials.js (not in source).
 */

import { getSpotifyCredentials } from './_credentials.js';

async function getToken() {
	const { id, secret } = getSpotifyCredentials();
	if (!id || !secret) return null;
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + Buffer.from(id + ':' + secret).toString('base64')
		},
		body: 'grant_type=client_credentials'
	});
	const data = await res.json();
	if (!res.ok) return null;
	return data.access_token;
}

export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	const id = req.query?.id;
	if (!id) {
		return res.status(400).json({ error: 'Missing id' });
	}
	const token = await getToken();
	if (!token) {
		return res.status(400).json({ error: 'Spotify credentials not configured' });
	}
	const trackRes = await fetch('https://api.spotify.com/v1/tracks/' + encodeURIComponent(id), {
		headers: { Authorization: 'Bearer ' + token }
	});
	if (!trackRes.ok) {
		const err = await trackRes.json().catch(() => ({}));
		return res.status(400).json({ error: err.error?.message || trackRes.statusText });
	}
	const track = await trackRes.json();
	const artist = track.artists?.[0]?.name || '';
	const name = track.name || '';
	return res.status(200).json({ artist, name });
}
