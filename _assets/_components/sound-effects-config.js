// Sound effects configuration for carwash.html
// Play a sound when the camera is within `distance` of a given object (layer/group/mesh) in a station.

/** Background loop — plays continuously. Set to null to disable. */
export const backgroundAudio = '_assets/_audio/carwash-loop-2.mp3';

/**
 * Sound effects configuration. Each entry can be either:
 * 
 * PROXIMITY-TRIGGERED (distance-based):
 * - audioPath: string — path to the audio file (e.g. '_assets/_audio/woosh.mp3')
 * - stationId: string — station id from station-config (e.g. 'poort', 'message__wens', 'brush2')
 * - objectName: string — exact name of the layer, group, or mesh in that station (e.g. 'gate__right', 'user__media')
 * - distance: number — trigger when camera is within this distance (world units) of the object
 * - times: number | null — how many times to play total (1 = once, 3 = three times, null = every time camera enters range)
 * 
 * Z-INDEX-TRIGGERED (camera z position-based):
 * - audioPath: string — path to the audio file
 * - triggerZ: number — exact z position to trigger (plays once when camera reaches this z)
 * OR
 * - startZ: number — start of z range (inclusive)
 * - endZ: number — end of z range (exclusive)
 * - times: number | null — how many times to play (1 = once, null = every time camera enters range)
 * 
 * Note: Use either distance-based OR z-based triggers, not both in the same entry.
 */
export const soundEffects = [
  // Example: play once when camera is within 25 units of gate__right in brush2
  {
    audioPath: '_assets/_audio/bleh.wav',
    stationId: 'message__wens',
    objectName: 'user__wens',
    distance: 25,
    times: 1
  },

  {
    audioPath: '_assets/_audio/bleh.wav',
    stationId: 'brush2',
    objectName: 'user__media',
    distance: 30,
    times: 1
  },

  {
    audioPath: '_assets/_audio/bleh.wav',
    stationId: 'soap',
    objectName: 'lottie_front',
    distance: 20,
    times: 1
  },

  // Example: z-index triggered - play once when camera reaches exact z position
  {
    audioPath: '_assets/_audio/water.mp3',
    triggerZ: -87,
    times: 1
  },
  {
    audioPath: '_assets/_audio/soap.mp3',
    triggerZ: -140,
    times: 1
  },
  {
    audioPath: '_assets/_audio/blower.mp3',
    triggerZ: -200,
    times: 1
  },

  // Example: z-index range - play when camera is within z range
  // {
  //   audioPath: '_assets/_audio/example.wav',
  //   startZ: -109,
  //   endZ: -130,
  //   times: 1
  // }
];
