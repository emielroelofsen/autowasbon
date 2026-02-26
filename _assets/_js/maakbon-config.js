/**
 * Maakbon flow – shared config (soap options, step count, Lottie URLs).
 */

export const SECTION2_STEPS = 9;

/** Spotify API (for embed/Web API). Client ID is safe in frontend; secret must only be used server-side. */
export const SPOTIFY_CLIENT_ID = 'c96e3ab2afc14b77a1ac4e3c3e5cefa2';
/** Use only on a server / in env vars; never expose in client bundles. */
export const SPOTIFY_CLIENT_SECRET = '2e9d6bfeb55d46b1b959a7dc270d6315';
/** Backend URL that returns { access_token }. Use local server (node server.js) or Vercel api/spotify-token. */
export const SPOTIFY_TOKEN_URL = '/api/spotify-token';
/** Backend URL that returns { artist, name } for a track. GET ?id=trackId. Same server as SPOTIFY_TOKEN_URL. */
export const SPOTIFY_TRACK_URL = '/api/spotify-track';

const _img = (folder, file) => `_assets/_style/_images/${folder}/${file}`;

/** Default Spotify playlist (used when a SOP has no playlist). */
export const SPOTIFY_DEFAULT_PLAYLIST_URI = 'spotify:playlist:6vyLIRVmFTnwYNDHYyFJN5';

/** Soap array: each SOP has soap img, bg, cardpreview, lottie overlay, playlist (Spotify URI), background name/media paths. */
export const SOAP_OPTIONS = [
	{
		key: 'autowasbon',
		name: 'Autowasbon',
		soap: _img('_soap', 'soap__autowasbon.png'),
		bgColor: '#1572fe',
		preview: _img('_cardpreview', 'preview__autowasbon.png'),
		lottieOverlay: 'https://lottie.host/ccc85061-9622-45b6-8e2b-884f4cf7e108/jdfiJL6y44.lottie',
		playlist: 'spotify:playlist:4fK7dk9zvgx2hwstJlTHLQ',
		backgroundName: _img('_nameboog', 'background__name--autowasbon.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--autowasbon.png'),
		trackPreview: { artist: 'Spotify', title: 'Autowasbon', artwork: _img('_cardpreview', 'preview__autowasbon.png') }
	},
	{
		key: 'party',
		name: 'Party Party',
		soap: _img('_soap', 'soap__party.png'),
		bgColor: '#fcde20',
		preview: _img('_cardpreview', 'preview__party.png'),
		lottieOverlay: 'https://lottie.host/73f7aeb5-7109-41d9-b27f-5a784c29ea81/rDSYdUOPcM.lottie',
		playlist: 'spotify:playlist:5rX97ygiHTX0ZkvVj8K2un',
		backgroundName: _img('_nameboog', 'background__name--party.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--party.png'),
		trackPreview: { artist: 'Spotify', title: 'Party vibes', artwork: _img('_cardpreview', 'preview__party.png') }
	},
	{
		key: 'love',
		name: 'Sweet Flowers',
		trackPreview: { artist: 'Spotify', title: 'Sweet Flowers', artwork: _img('_cardpreview', 'preview__love.png') },
		soap: _img('_soap', 'soap__love.png'),
		bgColor: '#ff4160',
		preview: _img('_cardpreview', 'preview__love.png'),
		lottieOverlay: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie',
		playlist: 'spotify:playlist:6AVt7jCICxKdH4vkR00Crb',
		backgroundName: _img('_nameboog', 'background__name--love.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--love.png')
	},
	{
		key: 'pop',
		name: 'Pop Sop',
		soap: _img('_soap', 'soap__pop.png'),
		bgColor: '#eb63f2',
		preview: _img('_cardpreview', 'preview__pop.png'),
		lottieOverlay: 'https://lottie.host/64a16f32-23bb-4f03-82e5-8e72222f4c42/fw4syv8Om4.lottie',
		playlist: 'spotify:playlist:5QjiogWeTYue1K58MvXr2x',
		backgroundName: _img('_nameboog', 'background__name--pop.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--pop.png'),
		trackPreview: { artist: 'Spotify', title: 'Pop Sop', artwork: _img('_cardpreview', 'preview__pop.png') }
	},
	{
		key: 'power',
		name: 'Power Sop',
		soap: _img('_soap', 'soap__power.png'), 
		bgColor: '#15e891',
		preview: _img('_cardpreview', 'preview__power.png'),
		lottieOverlay: 'https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie',
		playlist: 'spotify:playlist:6vyLIRVmFTnwYNDHYyFJN5',
		backgroundName: _img('_nameboog', 'background__name--power.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--power.png'),
		trackPreview: { artist: 'Spotify', title: 'Power Sop', artwork: _img('_cardpreview', 'preview__power.png') }
	},
	{
		key: 'feelgood', 
		name: 'Feel Good',
		soap: _img('_soap', 'soap__feelgood.png'),
		bgColor: '#ffac26',
		preview: _img('_cardpreview', 'preview__feelgood.png'),
		lottieOverlay: 'https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie',
		playlist: 'spotify:playlist:6DEYFsUWAyuECgkiWtgPqM',
		backgroundName: _img('_nameboog', 'background__name--feelgood.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--feelgood.png'),
		trackPreview: { artist: 'Spotify', title: 'Feel Good', artwork: _img('_cardpreview', 'preview__feelgood.png') }
	},
	{
		key: 'calm',
		name: 'Soft Calm',
		soap: _img('_soap', 'soap__calm.png'),
		bgColor: '#89b7f9',
		preview: _img('_cardpreview', 'preview__calm.png'),
		lottieOverlay: 'https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie',
		playlist: 'spotify:playlist:6JPVvIRLLmsPINLcMdtAs3',
		backgroundName: _img('_nameboog', 'background__name--calm.png'),
		backgroundMedia: _img('_mediaboog', 'background__photo--calm.png'),
		trackPreview: { artist: 'Spotify', title: 'Soft Calm', artwork: _img('_cardpreview', 'preview__calm.png') }
	}
];

/** @deprecated Use SOAP_OPTIONS */
export const SOP_OPTIONS = SOAP_OPTIONS;

export const STEP3_LOTTIE_URL = 'https://lottie.host/8f8051ac-44b9-4183-8d84-e28f7ceeaee4/9czZ6PkTbV.lottie';
export const STEP4_LOTTIE_URL = 'https://lottie.host/630ed545-d60e-4175-b7a7-dca0979ec653/bKKnlIZOLx.lottie';
export const CLICK_LOTTIE_URL = 'https://lottie.host/141a3316-e85a-45ea-8137-9753f02cf319/uD4RYS0HRC.lottie';
export const CLICK_LOTTIE_DURATION_MS = 400;
