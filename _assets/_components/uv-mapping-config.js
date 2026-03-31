// UV mapping configurations for carwash.html
// This file contains all the giveObjectMapping calls for texture application
import { USER_MEDIA_GAMMA, generateDoucheGordijnTexture, getMediaUrl } from './carwash-config.js';
import { WENSEN, USER_WENS_LOTTIE_OPTIONS } from './wensen-config.js';

export function applyUVMappings(textureManager, SOAP_THEME, SOAP_THEMES, stations) {
  // What change per soap - using theme configuration
  const currentTheme = SOAP_THEMES[SOAP_THEME] || SOAP_THEMES['Power Sop'];
  
  // Force replace theme-specific textures to ensure they update when theme changes
  // Apply front (poort) texture per theme: uvmap front
  const uvmapFront = currentTheme.uvmapFront ?? currentTheme.poort;
  textureManager.giveObjectMapping('poort', uvmapFront, 'x', { forceReplace: true });

  // Apply theme-specific boog textures (soap, brush-up, default)
  const uvmapBrushup = currentTheme.uvmapBrushup ?? currentTheme.boogBrushup ?? '_assets/_objects/_textures/_power/uvmap-boog--brush-up.png';
  textureManager.giveObjectMapping('boog--base', currentTheme.boogSoap, 'x', { stationId: 'soap', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', uvmapBrushup, 'x', { stationId: 'brush-up', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', currentTheme.boogDefault, 'x', { forceReplace: true });
  
  // Apply theme's tunnel texture to gate doors
  const tunnelTexturePath = currentTheme.tunnel.startsWith('_assets/') || currentTheme.tunnel.startsWith('/')
    ? currentTheme.tunnel
    : `_assets/_objects/_textures/${currentTheme.tunnel}`;
  textureManager.giveObjectMapping('gate__right', tunnelTexturePath, 'xy', { stationId: 'brush1', forceReplace: true });
  textureManager.giveObjectMapping('gate__left', tunnelTexturePath, 'xy', { stationId: 'brush1', forceReplace: true });
  textureManager.giveObjectMapping('gate__right', tunnelTexturePath, 'xy', { stationId: 'brush2', forceReplace: true });
  textureManager.giveObjectMapping('gate__left', tunnelTexturePath, 'xy', { stationId: 'brush2', forceReplace: true });

  // user__wens: Apply Lottie animation as texture (replaces layer__wens.png)
  // Use default from wensen config; updates when user selects a wens in maak-bon
  const defaultWensLottie = WENSEN.length > 0 ? WENSEN[4].lottie : 'https://lottie.host/f1d0e197-55d8-4b0c-8670-31287c95dd0e/pFkebShNjk.lottie';
  setTimeout(() => {
    textureManager.applyLottieTexture('user__wens', defaultWensLottie, 'x', {
      ...USER_WENS_LOTTIE_OPTIONS
    }).catch(error => {
      console.error('Failed to apply Lottie texture to user__wens:', error);
    });
  }, 200); // Delay to ensure objects are loaded
  // Apply base douche__gordijn texture first
  textureManager.giveObjectMapping('douche__gordijn', '_assets/_objects/_textures/layer__bericht--clean.png', 'y', { forceReplace: true });
  
  // Apply dynamic douche__gordijn text texture overlay (similar to poort name)
  // This should layer on top of the base texture, not replace it
  setTimeout(() => {
    textureManager.giveObjectMapping('douche__gordijn', generateDoucheGordijnTexture, 'y', { forceReplace: false });
  }, 200);
  // user__media: Use basic material with depthWrite false to allow objects behind to be visible
  // UVs are generated in object-local space so they move correctly with the mesh
  // Lower gamma value for brighter appearance
  const mediaUrl = getMediaUrl() || '_assets/_objects/_textures/layer__media--cleanm.png';
  textureManager.giveObjectMapping('user__media', mediaUrl, 'x', { 
    stationId: 'message__media',
    depthWrite: false,
    useBasicMaterial: true,
    flipV: true,
    gamma: USER_MEDIA_GAMMA
  });
  
  // Apply Lottie mask to user__media after texture is loaded
  // The mask will use the Lottie animation's alpha channel to control visibility
  // Trigger when camera is within distance 20 of the user__media object; play only once
  setTimeout(() => {
    textureManager.applyLottieMask('user__media', 'https://lottie.host/9e55e811-ab44-4c7e-8048-73ab61c1e98a/kG0T3l6TMq.lottie', {
      stationId: 'message__media',
      triggerDistance: 25,
      times: 1
    }).catch(error => {
      console.error('Failed to apply Lottie mask to user__media:', error);
    });
  }, 500); // Delay to ensure texture is loaded first
  // autowasbon__txt: Use basic material (pure mesh, no lighting, no color processing)
  // UVs are generated in object-local space so they move correctly with the mesh
  textureManager.giveObjectMapping('autowasbon__txt', '_assets/_objects/_textures/layer__boodschap--v2.png', 'x', { 
    stationId: 'message4',
    depthWrite: false,
    useBasicMaterial: true,
    gamma: 1.0, // No gamma correction - preserve exact colors
    flipV: true // Flip vertically to correct orientation
  });
  
  // Apply name texture overlay to poort (default texture shared across all themes)
  // This should layer on top of the base poort texture, not replace it
  // Apply with a delay to ensure base texture is loaded first
  // Note: In wasbon-controller, this is also applied separately with additional delay for theme changes
  setTimeout(() => {
    textureManager.giveObjectMapping('poort', currentTheme.poortName, 'x', { forceReplace: false });
  }, 200);
  // Apply station-specific boog textures: message4 and blower stay static; message5 uses theme uvmapBoog
  textureManager.giveObjectMapping('boog--base', '_assets/_objects/_textures/uvmap-boog--white.png', 'x', { stationId: 'message4' });
  textureManager.giveObjectMapping('boog--base', '_assets/_objects/_textures/uvmap-boog--white.png', 'x', { stationId: 'blower' });
  const uvmapBoog = currentTheme.uvmapBoog ?? '_assets/_objects/_textures/uvmap-boog--blue.png';
  textureManager.giveObjectMapping('boog--base', uvmapBoog, 'x', { stationId: 'message5', forceReplace: true });
  // Curtain and blower stay as-is (static, no theme)
  textureManager.giveObjectMapping('boog--base', '_assets/_objects/_textures/uvmap-boog--blue.png', 'x', { stationId: 'curtain' });

  // Theme UV maps for front, soap, bericht, media, water (boog at message5 above; soap/bericht/media/water below)
  const uvmapSoap = currentTheme.uvmapSoap ?? '_assets/_objects/_textures/uvmap-boog--soap.png';
  const uvmapBericht = currentTheme.uvmapBericht ?? '_assets/_objects/_textures/uvmap-boog--bericht.png';
  const uvmapMedia = currentTheme.uvmapMedia ?? '_assets/_objects/_textures/uvmap-boog--media.png';
  const uvmapWater = currentTheme.uvmapWater ?? '_assets/_objects/_textures/uvmap-boog--water.png';
  textureManager.giveObjectMapping('boog--base', uvmapBericht, 'x', { stationId: 'message__bericht', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', uvmapMedia, 'x', { stationId: 'message__media', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', uvmapWater, 'x', { stationId: 'message__wens', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', uvmapSoap, 'x', { stationId: 'soap', forceReplace: true });
  textureManager.giveObjectMapping('boog--base', '_assets/_objects/_textures/uvmap-boog--white--drogen.png', 'x', { stationId: 'blower' });

  // Theme UV map for boog--base at brush2
  const uvmapBrush2 = currentTheme.uvmapBrush2 ?? currentTheme.uvmapBoog ?? '_assets/_objects/_textures/uvmap-boog--blue.png';
  textureManager.giveObjectMapping('boog--base', uvmapBrush2, 'x', { stationId: 'brush2', forceReplace: true });

  textureManager.giveObjectMapping('curtain__front--01', '_assets/_objects/_textures/uvmap__curtain-top.png', 'x', { stationId: 'curtain' });
  textureManager.giveObjectMapping('curtain__flaps--01', '_assets/_objects/_textures/layer__boodschap-f.png', 'x', { stationId: 'curtain' });

  textureManager.giveObjectMapping('curtain__front--02', '_assets/_objects/_textures/uvmap__curtain-top.png', 'x', { stationId: 'curtain' });
  textureManager.giveObjectMapping('curtain__flaps--02', '_assets/_objects/_textures/uvmap__flap-long--white.png', 'x', { stationId: 'curtain' });

  textureManager.giveObjectMapping('curtain__front--03', '_assets/_objects/_textures/uvmap__curtain-top.png', 'x', { stationId: 'curtain' });
  textureManager.giveObjectMapping('curtain__flaps--03', '_assets/_objects/_textures/uvmap__flap-long--blue.png', 'x', { stationId: 'curtain' });

  textureManager.giveObjectMapping('boog--base--01', '_assets/_objects/_textures/uvmap-boog--blue.png', 'x', { stationId: 'curtain' });
  textureManager.giveObjectMapping('boog--base--02', '_assets/_objects/_textures/uvmap-boog--white.png', 'x', { stationId: 'curtain' });
  textureManager.giveObjectMapping('boog--base--03', '_assets/_objects/_textures/uvmap-boog--blue.png', 'x', { stationId: 'curtain' });

  textureManager.giveObjectMapping('spray__soap--L', '_assets/_objects/_textures/uvmap__flap--white.png', 'z', { stationId: 'soap' });
  textureManager.giveObjectMapping('spray__soap--R', '_assets/_objects/_textures/uvmap__flap--white.png', 'z', { stationId: 'soap' });
  textureManager.giveObjectMapping('spray__holder--L', '_assets/_objects/_textures/uvmap__flap--blue.png', 'z', { stationId: 'soap' });
  textureManager.giveObjectMapping('spray__holder--R', '_assets/_objects/_textures/uvmap__flap--blue.png', 'z', { stationId: 'soap' });

  textureManager.giveObjectMapping('Helix', '_assets/_objects/_textures/uvmap__flap--blue.png', 'z', { stationId: 'soap' });
  textureManager.giveObjectMapping('Helix_2', '_assets/_objects/_textures/uvmap__flap--blue.png', 'z', { stationId: 'soap' });
  
  //giveObjectMapping('holder__brush--base', '_assets/_objects/_textures/uvmap-boog--white.png', 'x', { stationId: 'brush1' });
  //giveObjectMapping('boog--base', '_assets/_objects/_textures/uvmap-boog--blue.png', 'x', { stationId: 'brush1' });
  
  textureManager.giveObjectMapping('blower__case--R03', '_assets/_objects/_textures/uvmap__blower.png', 'x');
  textureManager.giveObjectMapping('blower__case--R02', '_assets/_objects/_textures/uvmap__blower.png', 'x');
  textureManager.giveObjectMapping('blower__case--R01', '_assets/_objects/_textures/uvmap__blower.png', 'x');
  textureManager.giveObjectMapping('blower__case--L01', '_assets/_objects/_textures/uvmap__blower.png', 'x');
  textureManager.giveObjectMapping('blower__case--L02', '_assets/_objects/_textures/uvmap__blower.png', 'x');
  textureManager.giveObjectMapping('blower__case--L03', '_assets/_objects/_textures/uvmap__blower.png', 'x');

  // Brush 1 - left side
  textureManager.giveObjectMapping('brush__part--L01', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--L02', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--L03', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--L04', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush1' });
  
  // Brush 1 - right side
  textureManager.giveObjectMapping('brush__part--R01', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--R02', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--R03', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('brush__part--R04', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush1' });

  // Base brush 1
  textureManager.giveObjectMapping('holder__brush--stick-L', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--top-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--connect-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--boog-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--ring-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });

  textureManager.giveObjectMapping('holder__brush--stick-R', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--top-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--connect-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--boog-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });
  textureManager.giveObjectMapping('holder__brush--ring-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush1' });

  // Brush 2 - left side
  textureManager.giveObjectMapping('brush__part--L01', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--L02', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--L03', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--L04', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush2' });

  // Brush 2 - right side
  textureManager.giveObjectMapping('brush__part--R01', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--R02', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--R03', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('brush__part--R04', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush2' });

  textureManager.giveObjectMapping('holder__brush--stick-L', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--top-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--connect-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--boog-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--ring-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });

  textureManager.giveObjectMapping('holder__brush--stick-R', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--top-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--connect-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--boog-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });
  textureManager.giveObjectMapping('holder__brush--ring-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush2' });

  // Brush liggend (brush-up station)
  textureManager.giveObjectMapping('holder__brush--base-T', '_assets/_objects/_textures/uvmap__flap--blue.png', 'x', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pin-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pin-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pan-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pan-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--holder-R', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--holder-L', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--ring-TR', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--ring-TL', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });

  // Brush parts (brush-up station) - alternating blue and white
  textureManager.giveObjectMapping('brush__part--T01', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T02', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T03', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T04', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush-up' });

  // Brush liggend--UP (brush-up station) - same UV maps as borstel__liggend
  textureManager.giveObjectMapping('holder__brush--base-T--UP', '_assets/_objects/_textures/uvmap__flap--blue.png', 'x', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pin-R--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pin-L--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pan-R--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--pan-L--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--holder-R--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--holder-L--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--ring-TR--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('holder__brush--ring-TL--UP', '_assets/_objects/_textures/uvmap__brush-con.png', 'y', { stationId: 'brush-up' });

  // Brush parts (brush-up station) --UP variant - alternating blue and white
  textureManager.giveObjectMapping('brush__part--T01--UP', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T02--UP', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T03--UP', '_assets/_objects/_textures/uvmap__flap--blue.png', 'y', { stationId: 'brush-up' });
  textureManager.giveObjectMapping('brush__part--T04--UP', '_assets/_objects/_textures/uvmap__flap--white.png', 'y', { stationId: 'brush-up' });

  textureManager.giveObjectMapping('road', '_assets/_objects/_textures/uvmap__road.png', 'y');
  
  textureManager.giveObjectMapping('road__rail--left', '_assets/_objects/_textures/uvmap__rail.png', 'y');
  textureManager.giveObjectMapping('road__rail--right', '_assets/_objects/_textures/uvmap__rail.png', 'y');
  textureManager.giveObjectMapping('road__rail--middle', '_assets/_objects/_textures/uvmap__rail.png', 'y');
  textureManager.giveObjectMapping('road__top--left', '_assets/_objects/_textures/uvmap__rail.png', 'y');
  textureManager.giveObjectMapping('road__top--right', '_assets/_objects/_textures/uvmap__rail.png', 'y');
  
  textureManager.giveObjectMapping('arrow__lane', '_assets/_objects/_textures/uvmap__arrow.png', 'y');

  textureManager.giveObjectMapping('wasboog', '_assets/_objects/_textures/uvmap__brush-con.png', 'x');
  textureManager.giveObjectMapping('wasboog__back', '_assets/_objects/_textures/uvmap__brush-con.png', 'x');
  
  // Apply UV mapping from station configurations
  stations.forEach((station, index) => {
    if (station.uvMapping) {
      const mapping = station.uvMapping;
      // Support both single mapping object and array of mappings
      const mappings = Array.isArray(mapping) ? mapping : [mapping];
      
      mappings.forEach(uvConfig => {
        if (uvConfig && uvConfig.objectName && uvConfig.imagePath) {
          textureManager.giveObjectMapping(
            uvConfig.objectName,
            uvConfig.imagePath,
            uvConfig.projectionAxis || 'x',
            uvConfig.options || {}
          );
          // UV mapping applied
        }
      });
    }
  });
}
