/**
 * Maakbon flow – step 2: SOP (soap) choice: preview, arrows, soap click, sound, Voeg toe.
 * Spotify embed: one playlist per SOP; play when step 2 is active; sound button toggles embed.
 * No server needed – uses Spotify iframe embed API only.
 */

import { SOAP_OPTIONS, SPOTIFY_DEFAULT_PLAYLIST_URI, SPOTIFY_TRACK_URL } from './maakbon-config.js';
import { loadSopPreviewLottie } from './maakbon-lottie.js';

export function initSop(state) {
	let sopIndex = 0;
	let hasInteractedWithSopStep = false;

	let spotifyController = null;
	let spotifyPlayWhenReady = false;
	let embedListLoaded = false;
	let lastPlayingUri = '';
	function getPlaylistUri() {
		const s = SOAP_OPTIONS[sopIndex];
		return (s && s.playlist) ? s.playlist : SPOTIFY_DEFAULT_PLAYLIST_URI;
	}
	function safeResume() {
		if (spotifyController && embedListLoaded) {
			const p = spotifyController.resume();
			if (p && typeof p.catch === 'function') p.catch(() => {});
		}
	}
	function safePause() {
		if (spotifyController && embedListLoaded) {
			const p = spotifyController.pause();
			if (p && typeof p.catch === 'function') p.catch(() => {});
		}
	}
	function spotifyResume() {
		spotifyPlayWhenReady = true;
		safeResume();
	}
	function spotifyPause() {
		spotifyPlayWhenReady = false;
		safePause();
	}
	function spotifyLoadCurrentPlaylist() {
		if (spotifyController) {
			embedListLoaded = false;
			spotifyController.loadUri(getPlaylistUri());
			const muted = document.getElementById('sopSound')?.classList.contains('sop-sound-muted');
			if (!muted) spotifyPlayWhenReady = true;
		} else {
			spotifyPlayWhenReady = true;
		}
	}
	window.onSpotifyIframeApiReady = function (IFrameAPI) {
		const el = document.getElementById('sopSpotifyEmbed');
		if (!el) return;
		const w = (el.parentElement && el.parentElement.clientWidth) ? el.parentElement.clientWidth : 400;
		IFrameAPI.createController(el, {
			uri: getPlaylistUri(),
			width: Math.max(280, Math.min(600, w)),
			height: 152
		}, function (controller) {
			spotifyController = controller;
			embedListLoaded = true;
			controller.addListener('ready', function () {
				embedListLoaded = true;
				updateTrackPreview(SOAP_OPTIONS[sopIndex]);
				if (spotifyPlayWhenReady) {
					const muted = document.getElementById('sopSound')?.classList.contains('sop-sound-muted');
					if (!muted) safeResume();
				}
			});
			controller.addListener('playback_started', function (e) {
				if (e && e.data && e.data.playingURI) updateNowPlayingFromUri(e.data.playingURI);
			});
			controller.addListener('playback_update', function (e) {
				if (e && e.data && e.data.playingURI) updateNowPlayingFromUri(e.data.playingURI);
			});
		});
	};

	function applySopBgColor() {
		const bg = SOAP_OPTIONS[sopIndex]?.bgColor || '#89b7f9';
		document.querySelectorAll('.sop-bg-area').forEach(el => { el.style.backgroundColor = bg; });
	}

	function updateSopSoapState() {
		const btn = document.getElementById('sopVoegToe');
		if (btn) btn.disabled = !(state.sopSoapConfirmed || hasInteractedWithSopStep);
	}

	function playSopBounceOnce() {
		const soapImg = document.getElementById('sopSoapImg');
		if (!soapImg) return;
		soapImg.classList.remove('sop-bounce-once');
		soapImg.offsetHeight;
		soapImg.classList.add('sop-bounce-once');
		const onEnd = function () {
			soapImg.classList.remove('sop-bounce-once');
			soapImg.removeEventListener('animationend', onEnd);
		};
		soapImg.addEventListener('animationend', onEnd);
	}

	function updateTrackPreview(s) {
		const tp = s && s.trackPreview;
		const art = document.getElementById('sopTrackArtwork');
		const artistEl = document.getElementById('sopTrackArtist');
		const titleEl = document.getElementById('sopTrackTitle');
		if (art) art.src = (tp && tp.artwork) ? tp.artwork : (s && s.preview) || '';
		if (artistEl) artistEl.textContent = (tp && tp.artist) ? String(tp.artist) : (s && s.name) || 'Spotify';
		if (titleEl) titleEl.textContent = (tp && tp.title) ? String(tp.title) : 'Playlist';
	}

	/** Decode common HTML entities in oembed/og title. */
	function decodeTitle(s) {
		if (!s) return '';
		return s
			.replace(/&ndash;/g, '\u2013')
			.replace(/&mdash;/g, '\u2014')
			.replace(/&amp;/g, '&')
			.replace(/&#8211;/g, '\u2013')
			.replace(/&#8212;/g, '\u2014')
			.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
	}

	/** Parse "Artist – Track" or "Track by Artist" from a title string; returns { artist, trackTitle }. */
	function parseArtistAndTitle(title) {
		const t = decodeTitle((title || '').trim());
		let artist = '';
		let trackTitle = t;
		// "Artist – Track" or "Artist - Track" (various dashes)
		const dashMatch = t.match(/^(.+?)\s*[-\u2010-\u2015\u2212]\s+(.+)$/);
		if (dashMatch) {
			artist = dashMatch[1].trim();
			trackTitle = dashMatch[2].trim();
			return { artist, trackTitle };
		}
		// "Track by Artist"
		const byMatch = t.match(/^(.+?)\s+by\s+(.+)$/i);
		if (byMatch) {
			trackTitle = byMatch[1].trim();
			artist = byMatch[2].trim();
			return { artist, trackTitle };
		}
		return { artist: '', trackTitle: t };
	}

	function applyNowPlaying(artist, trackTitle, thumbnailUrl) {
		const artistEl = document.getElementById('sopTrackArtist');
		const titleEl = document.getElementById('sopTrackTitle');
		const artEl = document.getElementById('sopTrackArtwork');
		if (artistEl) artistEl.textContent = artist || 'Spotify';
		if (titleEl) titleEl.textContent = trackTitle || 'Track';
		if (artEl && thumbnailUrl) artEl.src = thumbnailUrl;
	}

	/** Update UI with current track from embed. playingURI e.g. spotify:track:xxx or spotify:episode:xxx */
	function updateNowPlayingFromUri(playingURI) {
		if (!playingURI || playingURI === lastPlayingUri) return;
		lastPlayingUri = playingURI;
		const artistEl = document.getElementById('sopTrackArtist');
		const titleEl = document.getElementById('sopTrackTitle');
		const artEl = document.getElementById('sopTrackArtwork');
		const trackMatch = playingURI.match(/^spotify:track:(.+)$/);
		const episodeMatch = playingURI.match(/^spotify:episode:(.+)$/);
		const id = trackMatch ? trackMatch[1] : episodeMatch ? episodeMatch[1] : null;
		if (!id) return;
		const type = trackMatch ? 'track' : 'episode';
		const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(`https://open.spotify.com/${type}/${id}`)}`;
		fetch(oembedUrl)
			.then((r) => r.ok ? r.json() : Promise.reject(new Error(r.statusText)))
			.then((data) => {
				const title = (data.title || 'Unknown').trim();
				let { artist, trackTitle } = parseArtistAndTitle(title);
				if (!artist && data.author_name && data.author_name !== 'Spotify') artist = data.author_name;
				// If oembed only gave track name, get artist from backend (Spotify Web API) or CORS proxy fallback
				if ((!artist || artist === 'Spotify') && type === 'track') {
					const tryApply = (a, t) => applyNowPlaying(a || 'Spotify', t, data.thumbnail_url);
					// 1) Prefer backend: GET /api/spotify-track?id=xxx returns { artist, name } (when running node server.js)
					fetch(`${SPOTIFY_TRACK_URL}?id=${encodeURIComponent(id)}`)
						.then((r) => r.ok ? r.json() : Promise.reject(new Error(r.statusText)))
						.then((trackData) => {
							if (trackData.artist || trackData.name) {
								tryApply(trackData.artist || 'Spotify', trackData.name || trackTitle);
								return;
							}
							throw new Error('No artist');
						})
						.catch(() => {
							// 2) Fallback: CORS proxy to track page (Spotify page may not have og:title in initial HTML)
							const proxyUrl = `https://corsproxy.io/?${encodeURIComponent('https://open.spotify.com/track/' + id)}`;
							return fetch(proxyUrl)
								.then((r) => r.ok ? r.text() : Promise.reject(new Error(r.statusText)))
								.then((html) => {
									const ogMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
									if (ogMatch) {
										const parsed = parseArtistAndTitle(decodeTitle(ogMatch[1]));
										if (parsed.artist) {
											artist = parsed.artist;
											trackTitle = parsed.trackTitle;
										}
									}
									tryApply(artist, trackTitle);
								});
						})
						.catch(() => tryApply(artist, trackTitle));
					return;
				}
				applyNowPlaying(artist || 'Spotify', trackTitle, data.thumbnail_url);
			})
			.catch(() => {});
	}

	function resetSopSoundUnmute() {
		const sopSoundBtn = document.getElementById('sopSound');
		const sopSoundIcon = document.getElementById('sopSoundIcon');
		if (sopSoundBtn) sopSoundBtn.classList.remove('sop-sound-muted');
		if (sopSoundIcon) {
			sopSoundIcon.classList.remove('fa-volume-off');
			sopSoundIcon.classList.add('fa-volume-high');
		}
	}

	function updateSopDisplay() {
		const s = SOAP_OPTIONS[sopIndex];
		updateTrackPreview(s);
		document.getElementById('sopPreviewImg').src = s.preview;
		const soapImg = document.getElementById('sopSoapImg');
		if (soapImg) {
			soapImg.src = s.soap;
			playSopBounceOnce();
		}
		const muted = document.getElementById('sopSound')?.classList.contains('sop-sound-muted');
		if (spotifyController) {
			embedListLoaded = false;
			// Don't clear lastPlayingUri: avoids a delayed playback_update for the old track overwriting the new soap's artist/title
			spotifyController.loadUri(getPlaylistUri());
			spotifyPlayWhenReady = !muted;
			// resume() will run in the 'ready' listener when the new list has loaded
		} else {
			spotifyPlayWhenReady = !muted;
		}
		applySopBgColor();
		state.sopSoapConfirmed = false;
		state.sopIndex = sopIndex;
		updateSopSoapState();
		if (s.lottieOverlay) {
			loadSopPreviewLottie(s.lottieOverlay).then(function (anim) { if (anim) anim.play(); });
		} else {
			loadSopPreviewLottie(null);
		}
	}

	state.sopIndex = 0;
	updateSopDisplay();

	document.getElementById('sopSoapImg').addEventListener('click', function () {
		state.sopSoapConfirmed = true;
		hasInteractedWithSopStep = true;
		updateSopSoapState();
	});
	document.getElementById('sopPrev').addEventListener('click', () => {
		hasInteractedWithSopStep = true;
		resetSopSoundUnmute();
		sopIndex = (sopIndex - 1 + SOAP_OPTIONS.length) % SOAP_OPTIONS.length;
		state.sopIndex = sopIndex;
		updateSopDisplay();
	});
	document.getElementById('sopNext').addEventListener('click', () => {
		hasInteractedWithSopStep = true;
		resetSopSoundUnmute();
		sopIndex = (sopIndex + 1) % SOAP_OPTIONS.length;
		state.sopIndex = sopIndex;
		updateSopDisplay();
	});
	applySopBgColor();
	document.getElementById('sopVoegToe').addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (this.disabled) return;
		this.disabled = true;
		document.getElementById('flowSop').value = SOAP_OPTIONS[sopIndex].key;
		state.goNext();
	});

	document.getElementById('sopSound').addEventListener('click', function () {
		this.classList.toggle('sop-sound-muted');
		const icon = document.getElementById('sopSoundIcon');
		if (this.classList.contains('sop-sound-muted')) {
			icon.classList.remove('fa-volume-high');
			icon.classList.add('fa-volume-off');
			spotifyPause();
		} else {
			icon.classList.remove('fa-volume-off');
			icon.classList.add('fa-volume-high');
			spotifyResume();
		}
	});

	state.setStep2Opts({ updateSopSoapState, spotifyResume, spotifyPause, spotifyLoadCurrentPlaylist });
}
