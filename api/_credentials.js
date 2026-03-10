/**
 * Server-only: reads Spotify credentials from environment.
 * Set in Vercel dashboard or in .env (see .env.example). No secrets in source.
 */
const ENV_ID = 'SPOTIFY_CLIENT_ID';
const ENV_SECRET = 'SPOTIFY_CLIENT_SECRET';

export function getSpotifyCredentials() {
	return {
		id: process.env[ENV_ID],
		secret: process.env[ENV_SECRET]
	};
}
