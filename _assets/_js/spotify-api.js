/**
 * Spotify Web API: token (via our backend) and playlist tracks with 30s preview URLs.
 * No user login – uses client credentials token and preview_url for playback.
 */

import { SPOTIFY_TOKEN_URL } from './maakbon-config.js';

let cachedToken = null;
let tokenExpiry = 0;

/** Get access token from our backend (no secret in frontend). */
export async function getAccessToken() {
	if (cachedToken && Date.now() < tokenExpiry - 60000) {
		return cachedToken;
	}
	const res = await fetch(SPOTIFY_TOKEN_URL);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.error || 'Failed to get Spotify token');
	}
	cachedToken = data.access_token;
	tokenExpiry = Date.now() + (data.expires_in || 3600) * 1000;
	return cachedToken;
}

/** Extract playlist ID from spotify:playlist:XXX or https://open.spotify.com/playlist/XXX */
export function getPlaylistIdFromUri(uri) {
	if (!uri) return null;
	const m = uri.match(/playlist[/:](\w+)/);
	return m ? m[1] : null;
}

/**
 * Fetch playlist tracks that have a 30s preview_url.
 * @returns {Promise<Array<{ preview_url: string, name: string, artist: string, artwork: string }>>}
 */
export async function getPlaylistTracks(playlistId) {
	const token = await getAccessToken();
	const out = [];
	let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=50`;
	while (url) {
		const res = await fetch(url, {
			headers: { Authorization: 'Bearer ' + token }
		});
		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			throw new Error(err.error?.message || res.statusText);
		}
		const data = await res.json();
		for (const item of data.items || []) {
			const t = item.track;
			if (!t || !t.preview_url) continue;
			out.push({
				preview_url: t.preview_url,
				name: t.name || 'Unknown',
				artist: (t.artists && t.artists[0] && t.artists[0].name) || 'Artist',
				artwork: (t.album && t.album.images && t.album.images[0] && t.album.images[0].url) || ''
			});
		}
		url = data.next || null;
	}
	return out;
}
