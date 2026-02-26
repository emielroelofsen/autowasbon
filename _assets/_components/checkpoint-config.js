// Checkpoint Timeline Configuration
// 
// Structure:
//   - checkpoints: Main navigation points (for scrolling and button clicks)
//     Each checkpoint has: name, z, label (optional display text)
//   
//   - points: Camera movement points between checkpoints (animated transitions)
//     Each point has: z, duration, easing, pause (optional pause duration)
//   
//   - labels: Z-position to name mapping (what users see in dash__text--slider)
//     Each label has: z, name

export const checkpointConfig = {
  settings: {
    startZ: 0,
    endZ: -250
  },
  
  // Checkpoints: Main navigation points for scrolling and button clicks
  // Simplified to 2 checkpoints: Start and Bericht
  checkpoints: [
    {
      name: "Start",
      z: 0,
      label: "Start"
    }
  ],
  
  // Points: Camera movement points between checkpoints (animated transitions)
  // Format: from z → to z: duration, easing, pause
  points: [
    // 0 → -56: duration 2s, easing easeInOut, pause 0.2s
    //{ z: -58, duration: 6, easing: "linear", pause: 1 },
    
    // -56 → -65: duration 2s, easing easeInOut, pause 0.2s
  
    
    // -65 → -86: duration 4s, easing easeInOut, pause 0.1s
    //{ z: -88, duration: 10, easing: "linear", pause: 0 },
    
    // -86 → -106: duration 8s, easing easeInOut, pause 0.5s
    { z: -109, duration: 16, easing: "linear", pause: 2 },
    
    // -109 → -141: duration 4s, easing easeInOut, pause 0.5s
    { z: -191, duration: 12, easing: "linear", pause: 1 },
    
    // -141 → -200: duration 5s, easing easeInOut, pause 0.5s
    //{ z: -220, duration: 4, easing: "linear", pause: 0 },
    // -200 → -300: duration 8s, easing easeInOut
    { z: -260, duration: 10, easing: "linear", pause: 0.5 }
  ],
  
  // Points Mobile: Camera movement points for mobile devices (animated transitions)
  // Format: from z → to z: duration, easing, pause
  pointsMobile: [

    { z: -109, duration: 16, easing: "linear", pause: 2 },
    
    // -109 → -141: duration 4s, easing easeInOut, pause 0.5s
    { z: -182, duration: 12, easing: "linear", pause: 1 },
    
    // -141 → -200: duration 5s, easing easeInOut, pause 0.5s
    //{ z: -220, duration: 4, easing: "linear", pause: 0 },
    // -200 → -300: duration 8s, easing easeInOut
    { z: -260, duration: 10, easing: "linear", pause: 0.5 }
    // 0 → -56: duration 2s, easing easeInOut, pause 0.2s
    // { z: -56, duration: 2, easing: "easeInOut", pause: 0.2 },
    
    // // -56 → -65: duration 2s, easing easeInOut, pause 0.2s
    // { z: -65, duration: 2, easing: "easeInOut", pause: 0 },
    
    // // -65 → -86: duration 4s, easing easeInOut, pause 0.1s
    // { z: -88, duration: 2, easing: "easeInOut", pause: 0 },
    
    // // -86 → -106: duration 8s, easing easeInOut, pause 0.5s
    // { z: -106, duration: 4, easing: "easeInOut", pause: 0.5 },
    
    // // -106 → -109: duration 6s, easing easeInOut, pause 0.1s
    // { z: -109, duration: 2, easing: "easeInOut", pause: 0.1 },
    
    // // -109 → -141: duration 4s, easing easeInOut, pause 0.5s
    // { z: -141, duration: 4, easing: "easeInOut", pause: 0.5 },
    
    // // -141 → -200: duration 5s, easing easeInOut, pause 0.5s
    // { z: -200, duration: 4, easing: "easeInOut", pause: 0 },

    // { z: -225, duration: 2, easing: "easeInOut", pause: 0.1 },
    
    // // -200 → -300: duration 8s, easing easeInOut
    // { z: -260, duration: 8, easing: "easeInOut", pause: 0.5 }
  ],
  
  // Labels: Z-position to name mapping (displayed in dash__text--slider)
  // Simplified to only show "Start" and "ga verder" (Bericht)
  labels: [
    { z: 0, name: "Start" },
    // { z: -109, name: "ga verder" }
  ],
  
  // Navigation: Z ranges where dash__nav--item elements get 'active' class
  // Each entry defines a range (startZ to endZ) where a specific indicator should be active
  navigation: [
    { indicator: "indicatorWater", startZ: -105, endZ: -128 },      // indicatorWater active from z: -56 to z: -109
    { indicator: "indicatorMessage", startZ: -156, endZ: -194},    // indicatorMessage active from z: -109 to z: -200
    { indicator: "indicatorGift", startZ: -220, endZ: -300 }        // indicatorGift active from z: -200 to z: -300
  ],
  
  // // Dashboard items: Additional slider items (can reference checkpoint names or have custom text)
  // dashboardItems: [
  //   { checkpointName: "Start", text: "Start" },
  //   { checkpointName: "Water", text: "Water" },
  //   { checkpointName: "Bericht", text: "Bericht" },
  //   { checkpointName: "Bericht", text: "Berichtje!" },
  //   { checkpointName: "Sop", text: "Sop" },
  //   { checkpointName: "Foto", text: "Foto" },
  //   { checkpointName: "Media", text: "Media" },
  //   { checkpointName: "Blazers", text: "Blazers" },
  //   { checkpointName: "Bon", text: "Drogen!" },
  //   { checkpointName: "Bon", text: "Bon" }
  // ],
  
  lotties: [
    // {
    //   url: "https://lottie.host/2e725065-e904-49db-b6bf-d1c935cd6ad1/RGeGDbsxaX.lottie",
    //   playZ: 4,
    //   stopZ: null
    // },
    {
      url: "https://lottie.host/0c0c3659-5225-45ed-9965-5e7e2d4d643d/cEEdtJqm8p.lottie",
      playZ: -106,
      stopZ: null,
      times: 1
    },
    {
      url: "https://lottie.host/e689fd1b-db88-4cda-a259-142b40bbac15/ecYr5QK0oB.lottie",
      playZ: -225,
      times: 1
    },
    {
      url: "https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie",
      playZ: -230,
      times: 8
    },
  ]
};

// Helper function to detect mobile devices
function isMobileDevice() {
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768 && window.matchMedia('(pointer: coarse)').matches);
}

// Helper function to get the appropriate points array (mobile or desktop)
export function getPoints() {
  if (isMobileDevice() && checkpointConfig.pointsMobile && checkpointConfig.pointsMobile.length > 0) {
    return checkpointConfig.pointsMobile;
  }
  return checkpointConfig.points || [];
}

// Convert points to timeline format for backward compatibility
function convertPointsToTimeline() {
  const points = getPoints();
  if (!points || points.length === 0) {
    return [];
  }
  
  const timeline = [];
  let fromZ = checkpointConfig.settings.startZ;
  
  // Find the Bericht checkpoint Z position
  const berichtCheckpoint = checkpointConfig.checkpoints.find(cp => cp.name === "Bericht");
  const berichtZ = berichtCheckpoint ? berichtCheckpoint.z : -109;
  
  for (let index = 0; index < points.length; index++) {
    const point = points[index];
    
    // Check if this point reaches or passes the Bericht checkpoint
    const reachesBericht = Math.abs(point.z - berichtZ) < 0.1 || point.z <= berichtZ;
    
    // Add move segment
    if (point.z !== fromZ) {
      const moveSegment = {
        type: "move",
        fromZ: fromZ,
        toZ: point.z,
        duration: point.duration || 2,
        easing: point.easing || "easeInOut"
      };
      
      // If this segment reaches the Bericht checkpoint, mark it to stop there
      if (reachesBericht) {
        moveSegment.checkpointName = "Bericht";
      }
      
      timeline.push(moveSegment);
    }
    
    // Add pause segment if specified
    if (point.pause && point.pause > 0) {
      const pauseSegment = {
        type: "pause",
        atZ: point.z,
        duration: point.pause
      };
      
      // If this pause is at the Bericht checkpoint, mark it to stop there
      if (reachesBericht) {
        pauseSegment.checkpointName = "Bericht";
      }
      
      timeline.push(pauseSegment);
    }
    
    // Stop if we've reached Bericht (after adding the pause segment if it exists)
    if (reachesBericht) {
      break;
    }
    
    fromZ = point.z;
  }
  
  return timeline;
}

// Convert checkpointConfig to old checkpoints array format for backward compatibility
export const checkpoints = (() => {
  const converted = checkpointConfig.checkpoints.map((cp, index) => {
    const checkpoint = {
      name: cp.name,
      z: cp.z
    };
    
    // First checkpoint gets the timeline converted from points
    if (index === 0) {
      const timeline = convertPointsToTimeline();
      if (timeline.length > 0) {
        checkpoint.timeline = timeline;
      }
    }
    
    return checkpoint;
  });
  
  return converted;
})();

// Helper function to get checkpoint by name
export function getCheckpointByName(name) {
  return checkpoints.find(cp => cp.name === name);
}

// Helper function to get checkpoint index by name
export function getCheckpointIndexByName(name) {
  return checkpoints.findIndex(cp => cp.name === name);
}

// Legacy exports for backward compatibility
export const scrollCheckpoints = checkpoints;
export const namePoints = checkpointConfig.labels; // Alias for labels
