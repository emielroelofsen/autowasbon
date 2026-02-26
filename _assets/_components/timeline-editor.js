// Simple Timeline Editor - Compact bottom bar with dialogs
// Can be easily disabled by not importing/initializing it

import { checkpoints, checkpointConfig, getPoints } from './checkpoint-config.js';

export class TimelineEditor {
  constructor(checkpointController, cameraController) {
    this.checkpointController = checkpointController;
    this.cameraController = cameraController;
    this.isVisible = false;
    // Always use first checkpoint (index 0) since whole timeline is there
    this.points = [];
    this.namePoints = []; // Separate array for checkpoint name markers
    this.lottiePoints = []; // Array for lottie animation points
    this.selectedPointIndex = null;
    this.selectedNamePointIndex = null;
    this.selectedCheckpointIndex = null;
    this.selectedLottiePointIndex = null;
    this.isTestPlaying = false;
    this.originalTimeline = null;
    // Manual Z range for timeline (null = auto-calculate)
    this.manualStartZ = null;
    this.manualEndZ = null;
    // Dashboard items text mapping
    this.dashboardItems = [];
    
    // Initialize UI
    this.initUI();
  }
  
  /**
   * Initialize the timeline editor UI
   */
  initUI() {
    // Create compact timeline bar at bottom
    const timelineBar = document.createElement('div');
    timelineBar.id = 'timelineBar';
    timelineBar.className = 'timeline-bar-container';
    timelineBar.style.display = 'none';
    
    timelineBar.innerHTML = `
      <div class="timeline-bar-header">
        <button id="timelineAddBtn" class="timeline-icon-btn" title="Add Point">+</button>
        <button id="timelineAddNamePointBtn" class="timeline-icon-btn" title="Add Name Point">🏷️</button>
        <button id="timelineAddCheckpointBtn" class="timeline-icon-btn" title="Add Checkpoint">📍</button>
        <button id="timelineAddLottieBtn" class="timeline-icon-btn" title="Add Lottie">🎬</button>
        <button id="timelineSlideNamesBtn" class="timeline-icon-btn" title="Edit Slide Names">📝</button>
        <button id="timelineSettingsBtn" class="timeline-icon-btn" title="Settings">⚙</button>
        <button id="timelineTestBtn" class="timeline-icon-btn" title="Test">▶</button>
        <button id="timelineStopBtn" class="timeline-icon-btn" title="Stop" style="display: none;">⏹</button>
        <button id="timelineSaveBtn" class="timeline-icon-btn" title="Save Timeline">💾</button>
        <button id="timelineExportBtn" class="timeline-icon-btn" title="Export All Checkpoints">📋</button>
        <button id="timelineCloseBtn" class="timeline-icon-btn" title="Close">×</button>
      </div>
      <div class="timeline-track-container">
        <div class="timeline-tracks-wrapper" id="timelineTracksWrapper">
          <div class="timeline-track-row">
            <div class="timeline-track-label">Checkpoints</div>
            <div class="timeline-track timeline-track-compact" id="timelineCheckpointTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Points</div>
            <div class="timeline-track timeline-track-compact" id="timelineTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Names</div>
            <div class="timeline-track timeline-track-compact" id="timelineNameTrack"></div>
          </div>
          <div class="timeline-track-row">
            <div class="timeline-track-label">Lottie</div>
            <div class="timeline-track timeline-track-compact" id="timelineLottieTrack"></div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(timelineBar);
    
    // Create dialogs
    this.createDialogs();
    
    // Load timeline from first checkpoint (index 0)
    this.loadCheckpointTimeline();
    
    // Setup event listeners
    this.setupEventListeners();
  }
  
  /**
   * Create dialog modals
   */
  createDialogs() {
    // Add Point Dialog
    const addPointDialog = document.createElement('div');
    addPointDialog.id = 'addPointDialog';
    addPointDialog.className = 'timeline-dialog';
    addPointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addPointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="addPointZ" step="0.1" value="0">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="addPointSpeed" step="0.1" value="2" min="0.1">
          </label>
          <label>
            Easing:
            <select id="addPointEasing" style="padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
              <option value="easeInOut" selected>easeInOut</option>
              <option value="easeIn">easeIn</option>
              <option value="easeOut">easeOut</option>
              <option value="ease">ease</option>
              <option value="linear">linear</option>
            </select>
          </label>
          <label>
            Pause (seconds):
            <input type="number" id="addPointPause" step="0.1" value="0" min="0">
          </label>
          <label>
            Change Dashboard Text To (optional):
            <div style="display: flex; gap: 5px; align-items: center;">
              <select id="addPointCheckpointName" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
                <option value="">-- None --</option>
                <option value="__NEW__">+ Add New Checkpoint Name</option>
              </select>
              <input type="text" id="addPointCheckpointNameNew" placeholder="New name" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; display: none;">
            </div>
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addPointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addPointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Edit Point Dialog
    const editPointDialog = document.createElement('div');
    editPointDialog.id = 'editPointDialog';
    editPointDialog.className = 'timeline-dialog';
    editPointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editPointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="editPointZ" step="0.1">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="editPointSpeed" step="0.1" min="0.1">
          </label>
          <label>
            Easing:
            <select id="editPointEasing" style="padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
              <option value="easeInOut">easeInOut</option>
              <option value="easeIn">easeIn</option>
              <option value="easeOut">easeOut</option>
              <option value="ease">ease</option>
              <option value="linear">linear</option>
            </select>
          </label>
          <label>
            Pause (seconds):
            <input type="number" id="editPointPause" step="0.1" min="0">
          </label>
          <label>
            Change Dashboard Text To (optional):
            <div style="display: flex; gap: 5px; align-items: center;">
              <select id="editPointCheckpointName" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
                <option value="">-- None --</option>
                <option value="__NEW__">+ Add New Checkpoint Name</option>
              </select>
              <input type="text" id="editPointCheckpointNameNew" placeholder="New name" style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; display: none;">
            </div>
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updatePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedPoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editPointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Settings Dialog
    const settingsDialog = document.createElement('div');
    settingsDialog.id = 'settingsDialog';
    settingsDialog.className = 'timeline-dialog';
    settingsDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Timeline Settings</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('settingsDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <h4>Z Range (for accurate indicator)</h4>
          <label>
            Start Z (left edge):
            <input type="number" id="timelineStartZ" step="0.1" placeholder="Auto">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.setStartZFromCamera()">Use Camera</button>
          </label>
          <label>
            End Z (right edge):
            <input type="number" id="timelineEndZ" step="0.1" placeholder="Auto">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.setEndZFromCamera()">Use Camera</button>
          </label>
          <div style="display: flex; gap: 10px; margin: 10px 0;">
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.applyZRange()">Apply Range</button>
            <button class="timeline-btn timeline-btn-small" onclick="window.timelineEditor.resetZRange()">Reset to Auto</button>
          </div>
          <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.1);">
          <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.clearTimeline()">Clear All Points</button>
          <button class="timeline-btn" onclick="window.timelineEditor.useCurrentZ()">Use Current Camera Z</button>
          <button class="timeline-btn" onclick="window.timelineEditor.showDashboardEditor()">Edit Dashboard Text</button>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('settingsDialog')">Close</button>
          </div>
        </div>
      </div>
    `;
    
    // Dashboard Editor Dialog
    const dashboardEditorDialog = document.createElement('div');
    dashboardEditorDialog.id = 'dashboardEditorDialog';
    dashboardEditorDialog.className = 'timeline-dialog';
    dashboardEditorDialog.innerHTML = `
      <div class="timeline-dialog-content" style="max-width: 600px;">
        <div class="timeline-dialog-header">
          <h3>Dashboard Text Items</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('dashboardEditorDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <p style="margin-bottom: 15px; color: rgba(255,255,255,0.7);">Edit the text displayed on dashboard items for each checkpoint.</p>
          <div id="dashboardItemsList" style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
            <!-- Dashboard items will be populated here -->
          </div>
          <div class="timeline-dialog-actions" style="margin-top: 15px;">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.saveDashboardItems()">Save</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('dashboardEditorDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Add Checkpoint Dialog
    const addCheckpointDialog = document.createElement('div');
    addCheckpointDialog.id = 'addCheckpointDialog';
    addCheckpointDialog.className = 'timeline-dialog';
    addCheckpointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Checkpoint</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addCheckpointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Checkpoint Name/ID:
            <input type="text" id="addCheckpointName" placeholder="e.g., Start, Message, Media" required>
          </label>
          <label>
            Z Position:
            <input type="number" id="addCheckpointZ" step="0.1" value="0">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="addCheckpointSpeed" step="0.1" value="2" min="0.1">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addCheckpointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addCheckpointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Edit Checkpoint Dialog
    const editCheckpointDialog = document.createElement('div');
    editCheckpointDialog.id = 'editCheckpointDialog';
    editCheckpointDialog.className = 'timeline-dialog';
    editCheckpointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Checkpoint</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editCheckpointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Checkpoint Name/ID:
            <input type="text" id="editCheckpointName" required>
          </label>
          <label>
            Z Position:
            <input type="number" id="editCheckpointZ" step="0.1">
          </label>
          <label>
            Speed (seconds):
            <input type="number" id="editCheckpointSpeed" step="0.1" min="0.1">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateCheckpointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedCheckpoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editCheckpointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Slide Names Dialog (for editing dashboard text)
    const slideNamesDialog = document.createElement('div');
    slideNamesDialog.id = 'slideNamesDialog';
    slideNamesDialog.className = 'timeline-dialog';
    slideNamesDialog.innerHTML = `
      <div class="timeline-dialog-content" style="max-width: 600px;">
        <div class="timeline-dialog-header">
          <h3>Edit Slide Names</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('slideNamesDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <p style="margin-bottom: 15px; color: rgba(255,255,255,0.7);">Edit the text that appears in the dashboard slider for each checkpoint. These are created from timeline points with checkpoint names.</p>
          <div id="slideNamesList" style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
            <!-- Slide names will be populated here -->
          </div>
          <div class="timeline-dialog-actions" style="margin-top: 15px;">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.saveSlideNames()">Save</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('slideNamesDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Add Name Point Dialog
    const addNamePointDialog = document.createElement('div');
    addNamePointDialog.id = 'addNamePointDialog';
    addNamePointDialog.className = 'timeline-dialog';
    addNamePointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Name Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addNamePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="addNamePointZ" step="0.1" value="0">
          </label>
          <label>
            Name/Label:
            <input type="text" id="addNamePointName" placeholder="Enter name or label" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addNamePointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addNamePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Edit Name Point Dialog
    const editNamePointDialog = document.createElement('div');
    editNamePointDialog.id = 'editNamePointDialog';
    editNamePointDialog.className = 'timeline-dialog';
    editNamePointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Name Point</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editNamePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Z Position:
            <input type="number" id="editNamePointZ" step="0.1">
          </label>
          <label>
            Name/Label:
            <input type="text" id="editNamePointName" placeholder="Enter name or label" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateNamePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedNamePoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editNamePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Add Lottie Point Dialog
    const addLottiePointDialog = document.createElement('div');
    addLottiePointDialog.id = 'addLottiePointDialog';
    addLottiePointDialog.className = 'timeline-dialog';
    addLottiePointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Add Lottie Animation</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('addLottiePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Lottie URL:
            <input type="text" id="addLottiePointUrl" placeholder="https://lottie.host/example.lottie" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <label>
            Play at Z Position (when to start):
            <input type="number" id="addLottiePointPlayZ" step="0.1" value="0">
          </label>
          <label>
            Stop at Z Position (when to stop, optional):
            <input type="number" id="addLottiePointStopZ" step="0.1" placeholder="Leave empty to play until end">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.addLottiePointFromDialog()">Add</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('addLottiePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Edit Lottie Point Dialog
    const editLottiePointDialog = document.createElement('div');
    editLottiePointDialog.id = 'editLottiePointDialog';
    editLottiePointDialog.className = 'timeline-dialog';
    editLottiePointDialog.innerHTML = `
      <div class="timeline-dialog-content">
        <div class="timeline-dialog-header">
          <h3>Edit Lottie Animation</h3>
          <button class="timeline-dialog-close" onclick="window.timelineEditor.closeDialog('editLottiePointDialog')">×</button>
        </div>
        <div class="timeline-dialog-body">
          <label>
            Lottie URL:
            <input type="text" id="editLottiePointUrl" placeholder="https://lottie.host/example.lottie" style="width: 100%; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
          </label>
          <label>
            Play at Z Position (when to start):
            <input type="number" id="editLottiePointPlayZ" step="0.1">
          </label>
          <label>
            Stop at Z Position (when to stop, optional):
            <input type="number" id="editLottiePointStopZ" step="0.1" placeholder="Leave empty to play until end">
          </label>
          <div class="timeline-dialog-actions">
            <button class="timeline-btn timeline-btn-primary" onclick="window.timelineEditor.updateLottiePointFromDialog()">Update</button>
            <button class="timeline-btn timeline-btn-danger" onclick="window.timelineEditor.deleteSelectedLottiePoint()">Delete</button>
            <button class="timeline-btn" onclick="window.timelineEditor.closeDialog('editLottiePointDialog')">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(addPointDialog);
    document.body.appendChild(editPointDialog);
    document.body.appendChild(addNamePointDialog);
    document.body.appendChild(editNamePointDialog);
    document.body.appendChild(settingsDialog);
    document.body.appendChild(addCheckpointDialog);
    document.body.appendChild(editCheckpointDialog);
    document.body.appendChild(dashboardEditorDialog);
    document.body.appendChild(slideNamesDialog);
    document.body.appendChild(addLottiePointDialog);
    document.body.appendChild(editLottiePointDialog);
  }
  
  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // No checkpoint selection needed - always use first checkpoint (index 0)
    
    // Add button
    document.getElementById('timelineAddBtn').addEventListener('click', () => {
      const currentZ = this.cameraController ? this.cameraController.camera.position.z : 0;
      document.getElementById('addPointZ').value = currentZ.toFixed(1);
      this.populateCheckpointDropdown('addPointCheckpointName');
      this.setupCheckpointNameInput('addPointCheckpointName', 'addPointCheckpointNameNew');
      // Reset new name input
      const newNameInput = document.getElementById('addPointCheckpointNameNew');
      if (newNameInput) {
        newNameInput.style.display = 'none';
        newNameInput.value = '';
      }
      this.showDialog('addPointDialog');
    });
    
    // Add Name Point button
    document.getElementById('timelineAddNamePointBtn').addEventListener('click', () => {
      const currentZ = this.cameraController ? this.cameraController.camera.position.z : 0;
      document.getElementById('addNamePointZ').value = currentZ.toFixed(1);
      document.getElementById('addNamePointName').value = '';
      this.showDialog('addNamePointDialog');
    });
    
    // Add Checkpoint button
    document.getElementById('timelineAddCheckpointBtn').addEventListener('click', () => {
      const currentZ = this.cameraController ? this.cameraController.camera.position.z : 0;
      document.getElementById('addCheckpointZ').value = currentZ.toFixed(1);
      document.getElementById('addCheckpointName').value = '';
      this.showDialog('addCheckpointDialog');
    });
    
    // Add Lottie button
    document.getElementById('timelineAddLottieBtn').addEventListener('click', () => {
      const currentZ = this.cameraController ? this.cameraController.camera.position.z : 0;
      document.getElementById('addLottiePointPlayZ').value = currentZ.toFixed(1);
      document.getElementById('addLottiePointUrl').value = '';
      document.getElementById('addLottiePointStopZ').value = '';
      this.showDialog('addLottiePointDialog');
    });
    
    // Slide Names button
    document.getElementById('timelineSlideNamesBtn').addEventListener('click', () => {
      this.showSlideNamesDialog();
    });
    
    // Click on timeline track to add checkpoint at that position
    // Use event delegation to handle clicks on the track container
    const trackContainer = document.querySelector('.timeline-track-container');
    if (trackContainer) {
      trackContainer.addEventListener('click', (e) => {
        const track = document.getElementById('timelineTrack');
        // Only if clicking directly on the track or empty area (not on markers)
        if (e.target === track || e.target.classList.contains('timeline-track-container') || e.target.classList.contains('timeline-empty')) {
          const rect = track.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickPercent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
          
          // Calculate Z from click position
          // Get current Z range (same logic as renderTimeline)
          const allZValues = [];
          if (this.points.length > 0) {
            allZValues.push(...this.points.map(p => p.z));
          }
          if (this.namePoints.length > 0) {
            allZValues.push(...this.namePoints.map(np => np.z));
          }
          if (checkpoints.length > 0) {
            allZValues.push(...checkpoints.map(cp => cp.z));
          }
          
          let minZ, maxZ, zRange;
          if (allZValues.length === 0) {
            minZ = -50;
            maxZ = 50;
            zRange = 100;
          } else {
            minZ = Math.min(...allZValues);
            maxZ = Math.max(...allZValues);
            const padding = (maxZ - minZ) * 0.1 || 10;
            minZ -= padding;
            maxZ += padding;
            zRange = maxZ - minZ || 1;
          }
          
          // Convert click position to Z (reverse of rendering: maxZ - (clickPercent / 100) * zRange)
          const clickedZ = maxZ - (clickPercent / 100) * zRange;
          
          // Show dialog to create checkpoint at this Z
          document.getElementById('addCheckpointZ').value = clickedZ.toFixed(1);
          document.getElementById('addCheckpointName').value = '';
          this.showDialog('addCheckpointDialog');
        }
      });
    }
    
    // Settings button
    document.getElementById('timelineSettingsBtn').addEventListener('click', () => {
      // Update Z range inputs with current values
      document.getElementById('timelineStartZ').value = this.manualStartZ !== null ? this.manualStartZ : '';
      document.getElementById('timelineEndZ').value = this.manualEndZ !== null ? this.manualEndZ : '';
      this.showDialog('settingsDialog');
    });
    
    // Test button
    document.getElementById('timelineTestBtn').addEventListener('click', () => {
      this.testAnimation();
    });
    
    // Stop button
    document.getElementById('timelineStopBtn').addEventListener('click', () => {
      this.stopAnimation();
    });
    
    // Save button (saves current checkpoint timeline)
    document.getElementById('timelineSaveBtn').addEventListener('click', () => {
      this.saveTimeline();
    });
    
    // Export button (exports all checkpoints array)
    document.getElementById('timelineExportBtn').addEventListener('click', () => {
      this.exportCheckpoints();
    });
    
    // Close button
    document.getElementById('timelineCloseBtn').addEventListener('click', () => {
      this.hide();
    });
  }
  
  /**
   * Load timeline from first checkpoint (index 0)
   * Also supports loading from new checkpointConfig structure
   */
  loadCheckpointTimeline() {
    const checkpoint = checkpoints[0]; // Always use first checkpoint
    
    // Check if we have checkpointConfig imported (new structure)
    if (checkpointConfig && checkpointConfig.settings) {
      // Load from new checkpointConfig structure
      // Load settings
      this.manualStartZ = checkpointConfig.settings.startZ !== null ? checkpointConfig.settings.startZ : null;
      this.manualEndZ = checkpointConfig.settings.endZ !== null ? checkpointConfig.settings.endZ : null;
      console.log(`Loaded Z range from checkpointConfig: Start=${this.manualStartZ}, End=${this.manualEndZ}`);
      
      // Load points (new structure) or timeline (old structure for backward compatibility)
      const points = getPoints();
      if (points && Array.isArray(points) && points.length > 0) {
        // New structure: use points directly (mobile or desktop)
        this.points = points.map(point => ({
          z: point.z,
          speed: point.duration || point.speed || 2,
          easing: point.easing || 'easeInOut',
          pause: point.pause || 0
        }));
      } else if (checkpointConfig.timeline && Array.isArray(checkpointConfig.timeline) && checkpointConfig.timeline.length > 0) {
        // Old structure: convert timeline to points
        this.points = this.convertTimelineToPoints(checkpointConfig.timeline, checkpoint?.z || 0);
      } else {
        this.points = [];
      }
      
      // Load labels (new structure) or namePoints (old structure for backward compatibility)
      if (checkpointConfig.labels && Array.isArray(checkpointConfig.labels) && checkpointConfig.labels.length > 0) {
        this.namePoints = checkpointConfig.labels.map(label => ({
          z: label.z,
          name: label.name || 'Name'
        }));
        this.sortNamePoints();
      } else if (checkpointConfig.namePoints && Array.isArray(checkpointConfig.namePoints)) {
        this.namePoints = checkpointConfig.namePoints.map(np => ({
          z: np.z,
          name: np.name || np.checkpointName || 'Name'
        }));
        this.sortNamePoints();
      } else if (checkpointConfig.timeline) {
        // Fallback: extract from timeline segments (backward compatibility)
        this.namePoints = [];
        checkpointConfig.timeline.forEach(segment => {
          if (segment.checkpointName) {
            let zPosition;
            if (segment.type === 'move') {
              zPosition = segment.toZ;
            } else if (segment.type === 'pause') {
              zPosition = segment.atZ;
            }
            if (zPosition !== undefined) {
              const existing = this.namePoints.find(np => 
                (np.name === segment.checkpointName || np.checkpointName === segment.checkpointName) && Math.abs(np.z - zPosition) < 0.1
              );
              if (!existing) {
                this.namePoints.push({
                  z: zPosition,
                  name: segment.checkpointName
                });
              }
            }
          }
        });
        this.sortNamePoints();
      } else {
        this.namePoints = [];
      }
      
      // Update checkpoint's timeline if using old structure (for backward compatibility)
      if (checkpoint && checkpointConfig.timeline) {
        checkpoint.timeline = checkpointConfig.timeline;
      }
      
      // Load dashboard items if available
      if (checkpointConfig.dashboardItems && Array.isArray(checkpointConfig.dashboardItems)) {
        this.dashboardItems = checkpointConfig.dashboardItems;
        // Update HTML dashboard items with loaded text
        this.updateDashboardItemsInHTML();
      } else {
        // Initialize from current HTML dashboard items
        this.loadDashboardItemsFromHTML();
      }
      
      // Load lottie points if available
      if (checkpointConfig.lotties && Array.isArray(checkpointConfig.lotties)) {
        this.lottiePoints = checkpointConfig.lotties.map(l => ({
          url: l.url || l.lottie,
          playZ: l.playZ !== undefined ? l.playZ : l.zindex,
          stopZ: l.stopZ !== undefined ? l.stopZ : null
        }));
        this.sortLottiePoints();
      } else {
        this.lottiePoints = [];
      }
    } else {
      // Fallback to old structure (timeline in first checkpoint)
      if (checkpoint && checkpoint.timeline) {
        this.points = this.convertTimelineToPoints(checkpoint.timeline, checkpoint.z);
      } else {
        this.points = [];
      }
      
      // Load manual Z range if it exists in checkpoint config (old structure)
      if (checkpoint && checkpoint.timelineStartZ !== undefined && checkpoint.timelineEndZ !== undefined) {
        this.manualStartZ = checkpoint.timelineStartZ;
        this.manualEndZ = checkpoint.timelineEndZ;
        console.log(`Loaded Z range from checkpoint config: Start=${this.manualStartZ}, End=${this.manualEndZ}`);
      } else {
        // Reset to auto if not in config
        this.manualStartZ = null;
        this.manualEndZ = null;
      }
      
      // Load dashboard items from HTML
      this.loadDashboardItemsFromHTML();
      
      // Initialize lottie points if not in config
      if (!this.lottiePoints) {
        this.lottiePoints = [];
      }
    }
    
    this.renderTimeline();
  }
  
  /**
   * Convert timeline format to points
   */
  convertTimelineToPoints(timeline, startZ) {
    const points = [];
    let currentZ = startZ;
    
    timeline.forEach(segment => {
      if (segment.type === 'move') {
        points.push({
          z: segment.toZ,
          speed: segment.duration || 2,
          easing: segment.easing || 'easeInOut',
          pause: 0,
          checkpointName: segment.checkpointName || null
        });
        currentZ = segment.toZ;
      } else if (segment.type === 'pause') {
        if (points.length > 0) {
          points[points.length - 1].pause = segment.duration || 1;
          // If pause has checkpointName, apply it to the previous point
          if (segment.checkpointName) {
            points[points.length - 1].checkpointName = segment.checkpointName;
          }
        }
      }
    });
    
    return points;
  }
  
  /**
   * Add point from dialog
   */
  addPointFromDialog() {
    const z = parseFloat(document.getElementById('addPointZ').value);
    const speed = parseFloat(document.getElementById('addPointSpeed').value);
    const easing = document.getElementById('addPointEasing').value || 'easeInOut';
    const pause = parseFloat(document.getElementById('addPointPause').value);
    
    // Get checkpoint name - check if new name was entered
    let checkpointName = document.getElementById('addPointCheckpointName').value.trim();
    if (checkpointName === '__NEW__') {
      checkpointName = document.getElementById('addPointCheckpointNameNew').value.trim();
      if (!checkpointName) {
        alert('Please enter a checkpoint name or select an existing one.');
        return;
      }
      // Add new checkpoint to checkpoints array if it doesn't exist
      if (!checkpoints.find(cp => cp.name === checkpointName)) {
        checkpoints.push({
          name: checkpointName,
          z: z,
          speed: speed
        });
        console.log(`Added new checkpoint: ${checkpointName}`);
      }
    }
    
    checkpointName = checkpointName || null;
    
    this.points.push({ z, speed, easing, pause, checkpointName });
    this.sortPoints();
    this.renderTimeline();
    this.closeDialog('addPointDialog');
  }
  
  /**
   * Update point from dialog
   */
  updatePointFromDialog() {
    if (this.selectedPointIndex === null) return;
    
    const point = this.points[this.selectedPointIndex];
    point.z = parseFloat(document.getElementById('editPointZ').value);
    point.speed = parseFloat(document.getElementById('editPointSpeed').value);
    point.easing = document.getElementById('editPointEasing').value || 'easeInOut';
    point.pause = parseFloat(document.getElementById('editPointPause').value);
    
    // Get checkpoint name - check if new name was entered
    let checkpointName = document.getElementById('editPointCheckpointName').value.trim();
    if (checkpointName === '__NEW__') {
      checkpointName = document.getElementById('editPointCheckpointNameNew').value.trim();
      if (!checkpointName) {
        alert('Please enter a checkpoint name or select an existing one.');
        return;
      }
      // Add new checkpoint to checkpoints array if it doesn't exist
      if (!checkpoints.find(cp => cp.name === checkpointName)) {
        checkpoints.push({
          name: checkpointName,
          z: point.z,
          speed: point.speed
        });
        console.log(`Added new checkpoint: ${checkpointName}`);
      }
    }
    
    point.checkpointName = checkpointName || null;
    
    this.sortPoints();
    this.renderTimeline();
    this.closeDialog('editPointDialog');
  }
  
  /**
   * Delete selected point
   */
  deleteSelectedPoint() {
    if (this.selectedPointIndex === null) return;
    
    if (confirm('Delete this point?')) {
      this.points.splice(this.selectedPointIndex, 1);
      this.renderTimeline();
      this.closeDialog('editPointDialog');
      this.selectedPointIndex = null;
    }
  }
  
  /**
   * Add name point from dialog
   */
  addNamePointFromDialog() {
    const z = parseFloat(document.getElementById('addNamePointZ').value);
    const name = document.getElementById('addNamePointName').value.trim();
    
    if (!name) {
      alert('Please enter a name or label.');
      return;
    }
    
    if (isNaN(z)) {
      alert('Please enter a valid Z position.');
      return;
    }
    
    this.namePoints.push({ z, name });
    this.sortNamePoints();
    this.renderTimeline();
    this.closeDialog('addNamePointDialog');
  }
  
  /**
   * Update name point from dialog
   */
  updateNamePointFromDialog() {
    if (this.selectedNamePointIndex === null) return;
    
    const namePoint = this.namePoints[this.selectedNamePointIndex];
    const z = parseFloat(document.getElementById('editNamePointZ').value);
    const name = document.getElementById('editNamePointName').value.trim();
    
    if (!name) {
      alert('Please enter a name or label.');
      return;
    }
    
    if (isNaN(z)) {
      alert('Please enter a valid Z position.');
      return;
    }
    
    namePoint.z = z;
    namePoint.name = name;
    
    this.sortNamePoints();
    this.renderTimeline();
    this.closeDialog('editNamePointDialog');
  }
  
  /**
   * Delete selected name point
   */
  deleteSelectedNamePoint() {
    if (this.selectedNamePointIndex === null) return;
    
    if (confirm('Delete this name point?')) {
      this.namePoints.splice(this.selectedNamePointIndex, 1);
      this.renderTimeline();
      this.closeDialog('editNamePointDialog');
      this.selectedNamePointIndex = null;
    }
  }
  
  /**
   * Select name point
   */
  selectNamePoint(index) {
    this.selectedNamePointIndex = index;
    const namePoint = this.namePoints[index];
    
    document.getElementById('editNamePointZ').value = namePoint.z;
    document.getElementById('editNamePointName').value = namePoint.name || '';
    
    this.renderTimeline();
    this.showDialog('editNamePointDialog');
  }
  
  /**
   * Sort name points by Z (descending: 0, -20, -100, -200)
   */
  sortNamePoints() {
    this.namePoints.sort((a, b) => b.z - a.z);
  }
  
  /**
   * Add lottie point from dialog
   */
  addLottiePointFromDialog() {
    const url = document.getElementById('addLottiePointUrl').value.trim();
    const playZ = parseFloat(document.getElementById('addLottiePointPlayZ').value);
    const stopZInput = document.getElementById('addLottiePointStopZ').value.trim();
    const stopZ = stopZInput ? parseFloat(stopZInput) : null;
    
    if (!url) {
      alert('Please enter a Lottie URL.');
      return;
    }
    
    if (isNaN(playZ)) {
      alert('Please enter a valid play Z position.');
      return;
    }
    
    this.lottiePoints.push({ url, playZ, stopZ });
    this.sortLottiePoints();
    this.renderTimeline();
    this.closeDialog('addLottiePointDialog');
  }
  
  /**
   * Update lottie point from dialog
   */
  updateLottiePointFromDialog() {
    if (this.selectedLottiePointIndex === null) return;
    
    const lottiePoint = this.lottiePoints[this.selectedLottiePointIndex];
    const url = document.getElementById('editLottiePointUrl').value.trim();
    const playZ = parseFloat(document.getElementById('editLottiePointPlayZ').value);
    const stopZInput = document.getElementById('editLottiePointStopZ').value.trim();
    const stopZ = stopZInput ? parseFloat(stopZInput) : null;
    
    if (!url) {
      alert('Please enter a Lottie URL.');
      return;
    }
    
    if (isNaN(playZ)) {
      alert('Please enter a valid play Z position.');
      return;
    }
    
    lottiePoint.url = url;
    lottiePoint.playZ = playZ;
    lottiePoint.stopZ = stopZ;
    
    this.sortLottiePoints();
    this.renderTimeline();
    this.closeDialog('editLottiePointDialog');
  }
  
  /**
   * Delete selected lottie point
   */
  deleteSelectedLottiePoint() {
    if (this.selectedLottiePointIndex === null) return;
    
    if (confirm('Delete this lottie point?')) {
      this.lottiePoints.splice(this.selectedLottiePointIndex, 1);
      this.renderTimeline();
      this.closeDialog('editLottiePointDialog');
      this.selectedLottiePointIndex = null;
    }
  }
  
  /**
   * Select lottie point
   */
  selectLottiePoint(index) {
    this.selectedLottiePointIndex = index;
    const lottiePoint = this.lottiePoints[index];
    
    document.getElementById('editLottiePointUrl').value = lottiePoint.url;
    document.getElementById('editLottiePointPlayZ').value = lottiePoint.playZ;
    document.getElementById('editLottiePointStopZ').value = lottiePoint.stopZ !== null ? lottiePoint.stopZ : '';
    
    this.renderTimeline();
    this.showDialog('editLottiePointDialog');
  }
  
  /**
   * Sort lottie points by playZ (descending: 0, -20, -100, -200)
   */
  sortLottiePoints() {
    this.lottiePoints.sort((a, b) => b.playZ - a.playZ);
  }
  
  /**
   * Render name points on timeline
   */
  renderNamePoints(track, minZ, maxZ, zRange) {
    if (!track) return;
    
    // Remove existing name point markers
    track.querySelectorAll('.timeline-name-point-marker').forEach(m => m.remove());
    
    this.namePoints.forEach((namePoint, index) => {
      const marker = document.createElement('div');
      marker.className = `timeline-name-point-marker ${index === this.selectedNamePointIndex ? 'selected' : ''}`;
      marker.dataset.index = index;
      
      // Calculate position: (maxZ - namePoint.z) / zRange
      let position = ((maxZ - namePoint.z) / zRange) * 100;
      position = Math.max(0, Math.min(100, position));
      
      marker.style.left = `${position}%`;
      
      const label = document.createElement('div');
      label.className = 'timeline-name-point-label';
      label.textContent = namePoint.name || namePoint.checkpointName || 'Name';
      label.title = `Z: ${namePoint.z.toFixed(1)} | ${namePoint.name || namePoint.checkpointName || 'Name'}`;
      marker.appendChild(label);
      
      // Add Z position label on marker
      const zLabel = document.createElement('div');
      zLabel.className = 'timeline-marker-z';
      zLabel.textContent = `Z:${namePoint.z.toFixed(0)}`;
      marker.appendChild(zLabel);
      
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectNamePoint(index);
      });
      
      track.appendChild(marker);
    });
  }
  
  /**
   * Clear timeline
   */
  clearTimeline() {
    if (confirm('Clear all points?')) {
      this.points = [];
      this.renderTimeline();
      this.closeDialog('settingsDialog');
    }
  }
  
  /**
   * Use current camera Z
   */
  useCurrentZ() {
    const currentZ = this.cameraController ? this.cameraController.camera.position.z : 0;
    document.getElementById('addPointZ').value = currentZ.toFixed(1);
    this.closeDialog('settingsDialog');
    this.showDialog('addPointDialog');
  }
  
  /**
   * Set start Z from camera
   */
  setStartZFromCamera() {
    if (!this.cameraController) return;
    const currentZ = this.cameraController.camera.position.z;
    document.getElementById('timelineStartZ').value = currentZ.toFixed(1);
  }
  
  /**
   * Set end Z from camera
   */
  setEndZFromCamera() {
    if (!this.cameraController) return;
    const currentZ = this.cameraController.camera.position.z;
    document.getElementById('timelineEndZ').value = currentZ.toFixed(1);
  }
  
  /**
   * Apply manual Z range
   */
  applyZRange() {
    const startZInput = document.getElementById('timelineStartZ').value.trim();
    const endZInput = document.getElementById('timelineEndZ').value.trim();
    
    if (startZInput && endZInput) {
      this.manualStartZ = parseFloat(startZInput);
      this.manualEndZ = parseFloat(endZInput);
      
      // Re-render timeline with new range
      this.renderTimeline();
      
      console.log(`Z Range set: Start=${this.manualStartZ}, End=${this.manualEndZ}`);
      alert(`Z Range applied: ${this.manualStartZ} to ${this.manualEndZ}`);
    } else {
      alert('Please enter both Start Z and End Z values.');
    }
  }
  
  /**
   * Reset Z range to auto-calculate
   */
  resetZRange() {
    this.manualStartZ = null;
    this.manualEndZ = null;
    document.getElementById('timelineStartZ').value = '';
    document.getElementById('timelineEndZ').value = '';
    
    // Re-render timeline with auto-calculated range
    this.renderTimeline();
    
    console.log('Z Range reset to auto-calculate');
    alert('Z Range reset to auto-calculate');
  }
  
  /**
   * Load dashboard items from HTML
   */
  loadDashboardItemsFromHTML() {
    const items = document.querySelectorAll('.dash__text--item[data-checkpoint-name]');
    this.dashboardItems = Array.from(items).map(item => ({
      checkpointName: item.getAttribute('data-checkpoint-name'),
      text: item.textContent.trim()
    }));
  }
  
  /**
   * Show dashboard editor
   */
  showDashboardEditor() {
    // Load current dashboard items from HTML if not loaded
    if (this.dashboardItems.length === 0) {
      this.loadDashboardItemsFromHTML();
    }
    
    // If still empty, initialize from checkpoints
    if (this.dashboardItems.length === 0 && checkpoints.length > 0) {
      this.dashboardItems = checkpoints.map(cp => ({
        checkpointName: cp.name,
        text: cp.name // Default to checkpoint name
      }));
    }
    
    // Populate the editor
    const list = document.getElementById('dashboardItemsList');
    list.innerHTML = '';
    
    this.dashboardItems.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.display = 'flex';
      itemDiv.style.gap = '10px';
      itemDiv.style.alignItems = 'center';
      itemDiv.style.padding = '8px';
      itemDiv.style.background = 'rgba(255,255,255,0.05)';
      itemDiv.style.borderRadius = '4px';
      
      itemDiv.innerHTML = `
        <label style="min-width: 120px; color: rgba(255,255,255,0.8);">
          ${item.checkpointName}:
        </label>
        <input type="text" 
               class="dashboard-text-input" 
               data-index="${index}"
               value="${item.text || ''}" 
               placeholder="Enter dashboard text"
               style="flex: 1; padding: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff;">
      `;
      
      list.appendChild(itemDiv);
    });
    
    this.closeDialog('settingsDialog');
    this.showDialog('dashboardEditorDialog');
  }
  
  /**
   * Save dashboard items
   */
  saveDashboardItems() {
    const inputs = document.querySelectorAll('#dashboardItemsList .dashboard-text-input');
    
    inputs.forEach(input => {
      const index = parseInt(input.dataset.index);
      if (this.dashboardItems[index]) {
        this.dashboardItems[index].text = input.value.trim();
      }
    });
    
    // Update HTML dashboard items
    this.updateDashboardItemsInHTML();
    
    console.log('Dashboard items saved:', this.dashboardItems);
    alert('Dashboard text items saved!');
    this.closeDialog('dashboardEditorDialog');
  }
  
  /**
   * Update dashboard items in HTML
   */
  updateDashboardItemsInHTML() {
    this.dashboardItems.forEach(item => {
      const htmlItem = document.querySelector(`.dash__text--item[data-checkpoint-name="${item.checkpointName}"]`);
      if (htmlItem) {
        htmlItem.textContent = item.text || item.checkpointName;
      }
    });
  }
  
  /**
   * Populate checkpoint dropdown with available checkpoint names
   */
  populateCheckpointDropdown(selectId, selectedValue = '') {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Clear existing options but keep structure
    const hasNewOption = select.querySelector('option[value="__NEW__"]');
    select.innerHTML = '<option value="">-- None --</option>';
    
    // Add checkpoint names from checkpoints array
    checkpoints.forEach(cp => {
      const option = document.createElement('option');
      option.value = cp.name;
      option.textContent = cp.name;
      if (cp.name === selectedValue) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    
    // Add "Add New" option if it was there before or if select has the new input field
    const newInputId = selectId.replace('CheckpointName', 'CheckpointNameNew');
    const newInput = document.getElementById(newInputId);
    if (hasNewOption || newInput) {
      const newOption = document.createElement('option');
      newOption.value = '__NEW__';
      newOption.textContent = '+ Add New Checkpoint Name';
      select.appendChild(newOption);
    }
  }
  
  /**
   * Show slide names dialog - edit dashboard text for checkpoints found in timeline
   */
  showSlideNamesDialog() {
    // Get timeline to find all checkpoint names
    const timeline = checkpointConfig?.timeline || (checkpoints[0]?.timeline || []);
    
    // Collect unique checkpoint names from timeline
    const slideCheckpoints = [];
    const seenNames = new Set();
    
    timeline.forEach(segment => {
      if (segment.checkpointName && !seenNames.has(segment.checkpointName)) {
        seenNames.add(segment.checkpointName);
        let zPosition;
        
        if (segment.type === 'move') {
          zPosition = segment.toZ;
        } else if (segment.type === 'pause') {
          zPosition = segment.atZ;
        }
        
        if (zPosition !== undefined) {
          slideCheckpoints.push({
            name: segment.checkpointName,
            z: zPosition,
            text: segment.checkpointName // Default to checkpoint name
          });
        }
      }
    });
    
    // Sort by Z position (descending: 0, -20, -100, -200)
    slideCheckpoints.sort((a, b) => b.z - a.z);
    
    // If no checkpoints found in timeline, show message
    if (slideCheckpoints.length === 0) {
      alert('No checkpoint names found in timeline. Add checkpoint names to timeline points first.');
      return;
    }
    
    // Populate the dialog
    const list = document.getElementById('slideNamesList');
    list.innerHTML = '';
    
    slideCheckpoints.forEach((checkpoint, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.style.display = 'flex';
      itemDiv.style.gap = '10px';
      itemDiv.style.alignItems = 'center';
      itemDiv.style.padding = '10px';
      itemDiv.style.background = 'rgba(255,255,255,0.05)';
      itemDiv.style.borderRadius = '4px';
      
      itemDiv.innerHTML = `
        <div style="min-width: 150px;">
          <div style="color: rgba(255,255,255,0.9); font-weight: bold; margin-bottom: 4px;">${checkpoint.name}</div>
          <div style="color: rgba(255,255,255,0.5); font-size: 12px;">Z: ${checkpoint.z.toFixed(1)}</div>
        </div>
        <input type="text" 
               class="slide-name-input" 
               data-checkpoint-name="${checkpoint.name}"
               value="${checkpoint.text || checkpoint.name}" 
               placeholder="Enter slide text"
               style="flex: 1; padding: 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; font-size: 14px;">
      `;
      
      list.appendChild(itemDiv);
    });
    
    this.showDialog('slideNamesDialog');
  }
  
  /**
   * Save slide names and update dashboard items
   */
  saveSlideNames() {
    const inputs = document.querySelectorAll('#slideNamesList .slide-name-input');
    const slideNames = [];
    
    inputs.forEach(input => {
      const checkpointName = input.getAttribute('data-checkpoint-name');
      const text = input.value.trim() || checkpointName;
      
      if (checkpointName) {
        slideNames.push({
          checkpointName: checkpointName,
          text: text
        });
      }
    });
    
    // Update dashboard items
    this.dashboardItems = slideNames;
    
    // Update HTML dashboard items if they exist
    this.updateDashboardItemsInHTML();
    
    // Reinitialize dashboard items in checkpoint controller
    if (window.checkpointController) {
      window.checkpointController.initializeDashboardItems();
    }
    
    console.log('Slide names saved:', slideNames);
    alert('Slide names saved! Dashboard will update.');
    this.closeDialog('slideNamesDialog');
  }
  
  /**
   * Sort points by Z (descending - from front 0 to back -280)
   * For Z values: 0 > -20 > -100 > -200 (0 is greater/more positive)
   * Descending sort: 0, -20, -100, -200 (forward direction)
   */
  sortPoints() {
    // Sort descending so 0 (front) comes first, -280 (back) comes last
    // Descending: 0, -20, -100, -200 (0 > -20 > -100 > -200)
    this.points.sort((a, b) => b.z - a.z);
  }
  
  /**
   * Render timeline
   */
  renderTimeline() {
    // Get all track elements
    const checkpointTrack = document.getElementById('timelineCheckpointTrack');
    const pointsTrack = document.getElementById('timelineTrack');
    const nameTrack = document.getElementById('timelineNameTrack');
    const lottieTrack = document.getElementById('timelineLottieTrack');
    
    // Clear all tracks
    if (checkpointTrack) checkpointTrack.innerHTML = '';
    if (pointsTrack) pointsTrack.innerHTML = '';
    if (nameTrack) nameTrack.innerHTML = '';
    if (lottieTrack) lottieTrack.innerHTML = '';
    
    // Use first track for empty message if needed
    const track = pointsTrack || checkpointTrack;
    
    // Calculate Z range (use manual range if set, otherwise auto-calculate)
    let minZ, maxZ, zRange;
    
    // Check if manual Z range is set
    if (this.manualStartZ !== null && this.manualEndZ !== null) {
      // Use manual range (startZ is left/beginning, endZ is right/end)
      // For timeline: higher Z (0) is left, lower Z (-280) is right
      // So startZ should be the higher value (left), endZ should be lower (right)
      maxZ = Math.max(this.manualStartZ, this.manualEndZ);
      minZ = Math.min(this.manualStartZ, this.manualEndZ);
      zRange = maxZ - minZ || 1;
    } else {
      // Auto-calculate from points, name points, and checkpoints
      const allZValues = [];
      
      // Collect Z values from points
      if (this.points.length > 0) {
        allZValues.push(...this.points.map(p => p.z));
      }
      
      // Collect Z values from name points
      if (this.namePoints.length > 0) {
        allZValues.push(...this.namePoints.map(np => np.z));
      }
      
      // Collect Z values from checkpoints
      if (checkpoints.length > 0) {
        allZValues.push(...checkpoints.map(cp => cp.z));
      }
      
      // Collect Z values from lottie points
      if (this.lottiePoints.length > 0) {
        this.lottiePoints.forEach(lp => {
          allZValues.push(lp.playZ);
          if (lp.stopZ !== null && lp.stopZ !== undefined) {
            allZValues.push(lp.stopZ);
          }
        });
      }
      
      if (allZValues.length === 0) {
        // Default range if nothing exists
        minZ = -50;
        maxZ = 50;
        zRange = 100;
        if (track) {
          track.innerHTML = '<div class="timeline-empty">No points or checkpoints. Click + to add points or 📍 to add checkpoints.</div>';
        }
      } else {
        minZ = Math.min(...allZValues);
        maxZ = Math.max(...allZValues);
        
        // Add padding to range
        const padding = (maxZ - minZ) * 0.1 || 10;
        
        // Special handling: if maxZ is 0 (or close to 0), we want it at the left edge
        // So we should keep maxZ at 0 (or very close) and only add padding to minZ
        if (maxZ <= 0 && maxZ >= -padding) {
          // maxZ is 0 or very close to 0, keep it at 0 for left edge positioning
          maxZ = 0;
          minZ -= padding;
        } else {
          // Normal case: add padding to both sides
          minZ -= padding;
          maxZ += padding;
        }
        
        zRange = maxZ - minZ || 1;
      }
    }
    
    // Get wrapper and create a tracks-only container for indicators
    const wrapper = document.getElementById('timelineTracksWrapper');
    
    // Create a container that spans just the tracks (excluding labels)
    // This will be used for indicators so they align with the track content
    let tracksContainer = wrapper;
    if (wrapper) {
      // Check if tracks container already exists
      let existingContainer = wrapper.querySelector('.timeline-tracks-indicators-container');
      if (!existingContainer) {
        existingContainer = document.createElement('div');
        existingContainer.className = 'timeline-tracks-indicators-container';
        wrapper.appendChild(existingContainer);
      }
      tracksContainer = existingContainer;
    }
    
    // Render start/end Z indicators if manual range is set
    if (this.manualStartZ !== null && this.manualEndZ !== null) {
      this.renderRangeIndicators(tracksContainer || track, minZ, maxZ, zRange);
    }
    
    // Render camera position indicator first (so it's behind the markers)
    // Use tracks container so it spans all tracks (excluding labels)
    this.renderCameraIndicator(tracksContainer || track, minZ, maxZ, zRange);
    
    // Render checkpoint markers on checkpoint track
    if (checkpointTrack) {
      this.renderCheckpointMarkers(checkpointTrack, minZ, maxZ, zRange);
    }
    
    // Render name points on name track
    if (nameTrack) {
      this.renderNamePoints(nameTrack, minZ, maxZ, zRange);
    }
    
    if (this.points.length === 0 && this.namePoints.length === 0 && checkpoints.length === 0) {
      // Start updating camera indicator even with no points
      this.startCameraIndicatorUpdate();
      return;
    }
    
    // Render timeline points on points track
    if (pointsTrack) {
      // First, render sequence bars between consecutive points
      this.renderSequenceBars(pointsTrack, minZ, maxZ, zRange);
      
      // Then render timeline points
      // Flip the calculation so higher Z (0) is on left, lower Z (-280) is on right
      // This makes the timeline go from front (0) to back (-280)
      this.points.forEach((point, index) => {
      const marker = document.createElement('div');
      marker.className = `timeline-marker ${point.pause > 0 ? 'has-pause' : ''} ${point.checkpointName ? 'has-checkpoint' : ''}`;
      marker.dataset.index = index;
      
      // Calculate position: (maxZ - point.z) / zRange
      // This maps: maxZ (start) → 0%, minZ (end) → 100%
      let position = ((maxZ - point.z) / zRange) * 100;
      
      // Clamp position to valid range (0-100%) to ensure alignment with manual range
      position = Math.max(0, Math.min(100, position));
      
      marker.style.left = `${position}%`;
      
      let label = `Z: ${point.z.toFixed(1)} | Speed: ${point.speed}s${point.pause > 0 ? ` | Pause: ${point.pause}s` : ''}`;
      if (point.checkpointName) {
        label += ` | Dashboard: ${point.checkpointName}`;
      }
      marker.title = label;
      
      // Add name label to marker
      const nameLabel = document.createElement('div');
      nameLabel.className = 'timeline-marker-name';
      nameLabel.textContent = `Z:${point.z.toFixed(0)}`;
      marker.appendChild(nameLabel);
      
      // Add visual indicator for checkpoint name
      if (point.checkpointName) {
        const checkpointBadge = document.createElement('div');
        checkpointBadge.className = 'timeline-checkpoint-badge';
        checkpointBadge.textContent = point.checkpointName;
        checkpointBadge.title = `Changes dashboard text to: ${point.checkpointName}`;
        marker.appendChild(checkpointBadge);
      }
      
      if (index === this.selectedPointIndex) {
        marker.classList.add('selected');
      }
      
      marker.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent track click
        this.selectPoint(index);
      });
      
      pointsTrack.appendChild(marker);
      });
    }
    
    // Render lottie points on lottie track
    this.renderLottiePoints(minZ, maxZ, zRange);
    
    // Start updating camera indicator
    this.startCameraIndicatorUpdate();
  }
  
  /**
   * Render sequence bars between consecutive points
   * Shows the animation sequence from one point to the next with speed and easing visualization
   */
  renderSequenceBars(track, minZ, maxZ, zRange) {
    if (!track || this.points.length < 2) return;
    
    // Sort points by Z (descending) to ensure correct order
    const sortedPoints = [...this.points].sort((a, b) => b.z - a.z);
    
    // Create sequence bars between consecutive points
    for (let i = 0; i < sortedPoints.length - 1; i++) {
      const fromPoint = sortedPoints[i];
      const toPoint = sortedPoints[i + 1];
      
      // Calculate positions
      const fromPosition = ((maxZ - fromPoint.z) / zRange) * 100;
      const toPosition = ((maxZ - toPoint.z) / zRange) * 100;
      
      // Clamp positions
      const clampedFrom = Math.max(0, Math.min(100, fromPosition));
      const clampedTo = Math.max(0, Math.min(100, toPosition));
      
      // Calculate bar dimensions
      const leftPos = Math.min(clampedFrom, clampedTo);
      const width = Math.abs(clampedTo - clampedFrom);
      
      // Skip if width is too small
      if (width < 0.5) continue;
      
      // Create sequence bar
      const sequenceBar = document.createElement('div');
      sequenceBar.className = 'timeline-sequence-bar';
      
      // Get speed and easing from the "to" point (the destination)
      const speed = toPoint.speed || 2;
      const easing = toPoint.easing || 'easeInOut';
      
      // Set position and width
      sequenceBar.style.left = `${leftPos}%`;
      sequenceBar.style.width = `${width}%`;
      
      // Add data attributes for styling
      sequenceBar.dataset.speed = speed;
      sequenceBar.dataset.easing = easing;
      sequenceBar.dataset.fromZ = fromPoint.z.toFixed(1);
      sequenceBar.dataset.toZ = toPoint.z.toFixed(1);
      
      // Create tooltip with sequence info
      const fromZLabel = fromPoint.z.toFixed(1);
      const toZLabel = toPoint.z.toFixed(1);
      sequenceBar.title = `Sequence: Z ${fromZLabel} → ${toZLabel} | Speed: ${speed}s | Easing: ${easing}`;
      
      // Add speed label (duration in seconds)
      const speedLabel = document.createElement('div');
      speedLabel.className = 'timeline-sequence-speed';
      speedLabel.textContent = `${speed}s`;
      speedLabel.title = `Duration: ${speed} seconds`;
      sequenceBar.appendChild(speedLabel);
      
      // Add easing indicator
      const easingIndicator = document.createElement('div');
      easingIndicator.className = `timeline-sequence-easing timeline-easing-${easing}`;
      easingIndicator.title = `Easing: ${easing}`;
      sequenceBar.appendChild(easingIndicator);
      
      // Add from/to labels
      const fromLabel = document.createElement('div');
      fromLabel.className = 'timeline-sequence-from';
      fromLabel.textContent = `Z:${fromZLabel}`;
      sequenceBar.appendChild(fromLabel);
      
      const toLabel = document.createElement('div');
      toLabel.className = 'timeline-sequence-to';
      toLabel.textContent = `Z:${toZLabel}`;
      sequenceBar.appendChild(toLabel);
      
      // Insert before markers (so markers appear on top)
      track.insertBefore(sequenceBar, track.firstChild);
    }
  }
  
  /**
   * Render lottie points on lottie track
   */
  renderLottiePoints(minZ, maxZ, zRange) {
    const track = document.getElementById('timelineLottieTrack');
    if (!track) return;
    
    track.innerHTML = '';
    
    this.lottiePoints.forEach((lottiePoint, index) => {
      // Create marker for play position
      const playMarker = document.createElement('div');
      playMarker.className = `timeline-lottie-marker timeline-lottie-play ${index === this.selectedLottiePointIndex ? 'selected' : ''}`;
      playMarker.dataset.index = index;
      playMarker.dataset.type = 'play';
      
      // Calculate position for play Z
      let playPosition = ((maxZ - lottiePoint.playZ) / zRange) * 100;
      playPosition = Math.max(0, Math.min(100, playPosition));
      playMarker.style.left = `${playPosition}%`;
      
      const playLabel = document.createElement('div');
      playLabel.className = 'timeline-lottie-label';
      playLabel.textContent = '▶';
      playLabel.title = `Play at Z: ${lottiePoint.playZ.toFixed(1)}`;
      playMarker.appendChild(playLabel);
      
      // Add Z position and URL info
      const playZLabel = document.createElement('div');
      playZLabel.className = 'timeline-marker-z';
      playZLabel.textContent = `Z:${lottiePoint.playZ.toFixed(0)}`;
      playMarker.appendChild(playZLabel);
      
      // Add URL name (shortened)
      const urlName = lottiePoint.url.split('/').pop().split('.')[0] || `L${index}`;
      const urlLabel = document.createElement('div');
      urlLabel.className = 'timeline-lottie-name';
      urlLabel.textContent = urlName.substring(0, 8);
      urlLabel.title = lottiePoint.url;
      playMarker.appendChild(urlLabel);
      
      playMarker.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectLottiePoint(index);
      });
      
      track.appendChild(playMarker);
      
      // Create marker for stop position if specified
      if (lottiePoint.stopZ !== null && !isNaN(lottiePoint.stopZ)) {
        const stopMarker = document.createElement('div');
        stopMarker.className = `timeline-lottie-marker timeline-lottie-stop ${index === this.selectedLottiePointIndex ? 'selected' : ''}`;
        stopMarker.dataset.index = index;
        stopMarker.dataset.type = 'stop';
        
        // Calculate position for stop Z
        let stopPosition = ((maxZ - lottiePoint.stopZ) / zRange) * 100;
        stopPosition = Math.max(0, Math.min(100, stopPosition));
        stopMarker.style.left = `${stopPosition}%`;
        
      const stopLabel = document.createElement('div');
      stopLabel.className = 'timeline-lottie-label';
      stopLabel.textContent = '⏹';
      stopLabel.title = `Stop at Z: ${lottiePoint.stopZ.toFixed(1)}`;
      stopMarker.appendChild(stopLabel);
      
      // Add Z position
      const stopZLabel = document.createElement('div');
      stopZLabel.className = 'timeline-marker-z';
      stopZLabel.textContent = `Z:${lottiePoint.stopZ.toFixed(0)}`;
      stopMarker.appendChild(stopZLabel);
        
        stopMarker.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectLottiePoint(index);
        });
        
        track.appendChild(stopMarker);
        
        // Create connecting line between play and stop
        if (Math.abs(playPosition - stopPosition) > 1) {
          const line = document.createElement('div');
          line.className = 'timeline-lottie-line';
          const leftPos = Math.min(playPosition, stopPosition);
          const width = Math.abs(playPosition - stopPosition);
          line.style.left = `${leftPos}%`;
          line.style.width = `${width}%`;
          line.title = `Lottie: ${lottiePoint.url.substring(0, 30)}...`;
          track.appendChild(line);
        }
      }
    });
  }
  
  /**
   * Render start/end Z range indicators
   * Can be rendered on wrapper (to span tracks) or individual track
   */
  renderRangeIndicators(container, minZ, maxZ, zRange) {
    // Remove existing range indicators
    if (container) {
      container.querySelectorAll('.timeline-range-indicator').forEach(m => m.remove());
    }
    
    // Start indicator (left edge at 0%)
    const startIndicator = document.createElement('div');
    startIndicator.className = 'timeline-range-indicator timeline-range-start';
    startIndicator.style.left = '0%';
    startIndicator.title = `Start Z: ${maxZ.toFixed(1)}`;
    startIndicator.innerHTML = `<div class="timeline-range-label">START<br>${maxZ.toFixed(1)}</div>`;
    container.appendChild(startIndicator);
    
    // End indicator (right edge at 100%)
    const endIndicator = document.createElement('div');
    endIndicator.className = 'timeline-range-indicator timeline-range-end';
    endIndicator.style.left = '100%';
    endIndicator.title = `End Z: ${minZ.toFixed(1)}`;
    endIndicator.innerHTML = `<div class="timeline-range-label">END<br>${minZ.toFixed(1)}</div>`;
    container.appendChild(endIndicator);
  }
  
  /**
   * Render checkpoint markers on timeline
   */
  renderCheckpointMarkers(track, minZ, maxZ, zRange) {
    if (!track) return;
    
    // Remove existing checkpoint markers
    track.querySelectorAll('.timeline-checkpoint-marker').forEach(m => m.remove());
    
    // Render all checkpoints
    checkpoints.forEach((checkpoint, index) => {
      const marker = document.createElement('div');
      marker.className = `timeline-checkpoint-marker ${index === this.selectedCheckpointIndex ? 'selected' : ''}`;
      marker.dataset.checkpointIndex = index;
      marker.dataset.checkpointZ = checkpoint.z;
      
      // Calculate position: (maxZ - checkpoint.z) / zRange
      // This ensures maxZ (start) is at 0% (left edge)
      // And minZ (end) is at 100% (right edge)
      // All checkpoints align to the manual range boundaries
      let position = ((maxZ - checkpoint.z) / zRange) * 100;
      
      // Clamp position to valid range (0-100%) to ensure alignment with manual range
      position = Math.max(0, Math.min(100, position));
      
      marker.style.left = `${position}%`;
      
      const label = `${checkpoint.name}\nZ: ${checkpoint.z.toFixed(1)}\nSpeed: ${checkpoint.speed}s`;
      marker.title = label;
      
      // Add checkpoint name label
      const labelEl = document.createElement('div');
      labelEl.className = 'timeline-checkpoint-label';
      labelEl.textContent = checkpoint.name;
      marker.appendChild(labelEl);
      
      // Add Z position label on marker
      const zLabel = document.createElement('div');
      zLabel.className = 'timeline-marker-z';
      zLabel.textContent = `Z:${checkpoint.z.toFixed(0)}`;
      marker.appendChild(zLabel);
      
      marker.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent track click
        this.selectCheckpoint(index);
      });
      
      track.appendChild(marker);
      
      // Debug log for Z=0 checkpoint
      if (checkpoint.z === 0) {
        console.log(`Checkpoint "${checkpoint.name}" at Z=0: position=${position}%, maxZ=${maxZ}, minZ=${minZ}, zRange=${zRange}`);
      }
    });
  }
  
  /**
   * Select a checkpoint
   */
  selectCheckpoint(index) {
    if (index < 0 || index >= checkpoints.length) {
      console.warn('Invalid checkpoint index:', index);
      return;
    }
    
    this.selectedCheckpointIndex = index;
    const checkpoint = checkpoints[index];
    
    // No dropdown to update - always editing first checkpoint
    
    // Populate edit dialog
    document.getElementById('editCheckpointName').value = checkpoint.name;
    document.getElementById('editCheckpointZ').value = checkpoint.z;
    document.getElementById('editCheckpointSpeed').value = checkpoint.speed || 2;
    
    // Show edit dialog
    this.showDialog('editCheckpointDialog');
    
    // Re-render to show selection
    this.renderTimeline();
  }
  
  /**
   * Edit checkpoint by ID/name
   */
  editCheckpointById(checkpointId) {
    const index = checkpoints.findIndex(cp => cp.name === checkpointId || cp.name.toLowerCase() === checkpointId.toLowerCase());
    if (index >= 0) {
      this.selectCheckpoint(index);
    } else {
      alert(`Checkpoint "${checkpointId}" not found.`);
    }
  }
  
  /**
   * Add checkpoint from dialog
   */
  addCheckpointFromDialog() {
    const name = document.getElementById('addCheckpointName').value.trim();
    const z = parseFloat(document.getElementById('addCheckpointZ').value);
    const speed = parseFloat(document.getElementById('addCheckpointSpeed').value);
    
    if (!name) {
      alert('Please enter a checkpoint name/ID');
      return;
    }
    
    // Check if name already exists
    if (checkpoints.some(cp => cp.name === name)) {
      alert(`Checkpoint "${name}" already exists. Please use a different name.`);
      return;
    }
    
    // Add new checkpoint
    const newCheckpoint = {
      name: name,
      z: z,
      speed: speed
    };
    
    checkpoints.push(newCheckpoint);
    
    // Update checkpoint select dropdown
    this.updateCheckpointSelect();
    
    // Re-render timeline
    this.renderTimeline();
    
    // Close dialog
    this.closeDialog('addCheckpointDialog');
    
    console.log('Added checkpoint:', newCheckpoint);
    alert(`Checkpoint "${name}" added at Z: ${z}`);
  }
  
  /**
   * Update checkpoint from dialog
   */
  updateCheckpointFromDialog() {
    if (this.selectedCheckpointIndex === null) return;
    
    const checkpoint = checkpoints[this.selectedCheckpointIndex];
    const newName = document.getElementById('editCheckpointName').value.trim();
    const newZ = parseFloat(document.getElementById('editCheckpointZ').value);
    const newSpeed = parseFloat(document.getElementById('editCheckpointSpeed').value);
    
    if (!newName) {
      alert('Please enter a checkpoint name/ID');
      return;
    }
    
    // Check if new name conflicts with another checkpoint
    if (newName !== checkpoint.name && checkpoints.some(cp => cp.name === newName)) {
      alert(`Checkpoint "${newName}" already exists. Please use a different name.`);
      return;
    }
    
    // Update checkpoint
    checkpoint.name = newName;
    checkpoint.z = newZ;
    checkpoint.speed = newSpeed;
    
    // Update checkpoint select dropdown
    this.updateCheckpointSelect();
    
    // Re-render timeline
    this.renderTimeline();
    
    // Close dialog
    this.closeDialog('editCheckpointDialog');
    
    console.log('Updated checkpoint:', checkpoint);
  }
  
  /**
   * Delete selected checkpoint
   */
  deleteSelectedCheckpoint() {
    if (this.selectedCheckpointIndex === null) return;
    
    if (checkpoints.length <= 1) {
      alert('Cannot delete the last checkpoint. At least one checkpoint is required.');
      return;
    }
    
    const checkpoint = checkpoints[this.selectedCheckpointIndex];
    const confirmDelete = confirm(`Are you sure you want to delete checkpoint "${checkpoint.name}"?`);
    
    if (!confirmDelete) return;
    
    // Remove checkpoint
    checkpoints.splice(this.selectedCheckpointIndex, 1);
    
    // Reset selection
    this.selectedCheckpointIndex = null;
    
    // Update checkpoint select dropdown
    this.updateCheckpointSelect();
    
    // If deleted checkpoint was the first one, reload timeline
    if (this.selectedCheckpointIndex === 0) {
      this.loadCheckpointTimeline();
    }
    
    // Re-render timeline
    this.renderTimeline();
    
    // Close dialog
    this.closeDialog('editCheckpointDialog');
    
    console.log('Deleted checkpoint:', checkpoint.name);
  }
  
  /**
   * Update checkpoint select dropdown (no longer needed, but kept for compatibility)
   */
  updateCheckpointSelect() {
    // No longer needed since we always use first checkpoint
    // Kept for compatibility with other code that might call it
  }
  
  /**
   * Render camera position indicator
   * Renders on the tracks container so it spans all tracks (excluding labels)
   */
  renderCameraIndicator(container, minZ, maxZ, zRange) {
    // Remove existing indicator from anywhere
    const wrapper = document.getElementById('timelineTracksWrapper');
    if (wrapper) {
      const existing = wrapper.querySelector('.timeline-camera-indicator');
      if (existing) {
        existing.remove();
      }
    }
    
    // Also check the container itself
    if (container) {
      const existing = container.querySelector('.timeline-camera-indicator');
      if (existing) {
        existing.remove();
      }
    }
    
    const indicator = document.createElement('div');
    indicator.className = 'timeline-camera-indicator';
    indicator.id = 'timelineCameraIndicator';
    
    // Add to the container (which should be tracks-indicators-container)
    // This container is positioned after the labels, so indicator aligns with tracks
    if (container) {
      container.appendChild(indicator);
    } else {
      // Fallback: add to wrapper if container not found
      const fallbackWrapper = document.getElementById('timelineTracksWrapper');
      if (fallbackWrapper) {
        fallbackWrapper.appendChild(indicator);
      }
    }
    
    this.updateCameraIndicator(minZ, maxZ, zRange);
  }
  
  /**
   * Update camera position indicator
   */
  updateCameraIndicator(minZ, maxZ, zRange) {
    const indicator = document.getElementById('timelineCameraIndicator');
    if (!indicator || !this.cameraController || !this.cameraController.camera) {
      return;
    }
    
    const currentZ = this.cameraController.camera.position.z;
    // Calculate position using the same formula as points/markers for alignment
    // This ensures the camera indicator aligns with the manual range boundaries
    let position = ((maxZ - currentZ) / zRange) * 100;
    
    // Clamp to valid range (0-100%) to ensure alignment
    position = Math.max(0, Math.min(100, position));
    
    // Position is relative to the tracks container (which starts after labels)
    // So we use percentage directly - the container already accounts for label offset
    indicator.style.left = `${position}%`;
  }
  
  /**
   * Start updating camera indicator
   */
  startCameraIndicatorUpdate() {
    // Clear existing interval
    if (this.cameraIndicatorInterval) {
      clearInterval(this.cameraIndicatorInterval);
    }
    
    // Update camera indicator every 100ms
    this.cameraIndicatorInterval = setInterval(() => {
      let minZ, maxZ, zRange;
      
      // Use manual range if set (same logic as renderTimeline)
      if (this.manualStartZ !== null && this.manualEndZ !== null) {
        maxZ = Math.max(this.manualStartZ, this.manualEndZ);
        minZ = Math.min(this.manualStartZ, this.manualEndZ);
        zRange = maxZ - minZ || 1;
      } else {
        // Auto-calculate from points and checkpoints
        const allZValues = [];
        
        if (this.points.length > 0) {
          allZValues.push(...this.points.map(p => p.z));
        }
        
        if (checkpoints.length > 0) {
          allZValues.push(...checkpoints.map(cp => cp.z));
        }
        
        if (allZValues.length === 0) {
          const checkpoint = checkpoints[0]; // Always use first checkpoint
          minZ = checkpoint ? checkpoint.z - 50 : -50;
          maxZ = checkpoint ? checkpoint.z + 50 : 50;
          zRange = maxZ - minZ || 100;
        } else {
          minZ = Math.min(...allZValues);
          maxZ = Math.max(...allZValues);
          const padding = (maxZ - minZ) * 0.1 || 10;
          
          if (maxZ <= 0 && maxZ >= -padding) {
            maxZ = 0;
            minZ -= padding;
          } else {
            minZ -= padding;
            maxZ += padding;
          }
          
          zRange = maxZ - minZ || 1;
        }
      }
      
      this.updateCameraIndicator(minZ, maxZ, zRange);
    }, 100);
  }
  
  /**
   * Stop updating camera indicator
   */
  stopCameraIndicatorUpdate() {
    if (this.cameraIndicatorInterval) {
      clearInterval(this.cameraIndicatorInterval);
      this.cameraIndicatorInterval = null;
    }
  }
  
  /**
   * Select point
   */
  selectPoint(index) {
    this.selectedPointIndex = index;
    const point = this.points[index];
    
    document.getElementById('editPointZ').value = point.z;
    document.getElementById('editPointSpeed').value = point.speed;
    document.getElementById('editPointEasing').value = point.easing || 'easeInOut';
    document.getElementById('editPointPause').value = point.pause;
    this.populateCheckpointDropdown('editPointCheckpointName', point.checkpointName || '');
    this.setupCheckpointNameInput('editPointCheckpointName', 'editPointCheckpointNameNew');
    
    // Hide new name input if not needed
    const newNameInput = document.getElementById('editPointCheckpointNameNew');
    if (newNameInput) {
      newNameInput.style.display = 'none';
      newNameInput.value = '';
    }
    
    this.renderTimeline();
    this.showDialog('editPointDialog');
  }
  
  /**
   * Setup checkpoint name input to show/hide new name field
   */
  setupCheckpointNameInput(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);
    
    if (!select || !input) return;
    
    // Remove existing listeners by cloning
    const newSelect = select.cloneNode(true);
    select.parentNode.replaceChild(newSelect, select);
    
    // Add change listener
    newSelect.addEventListener('change', () => {
      if (newSelect.value === '__NEW__') {
        input.style.display = 'block';
        input.focus();
      } else {
        input.style.display = 'none';
        input.value = '';
      }
    });
    
    // Also handle when user types in the new input and then selects an existing option
    input.addEventListener('blur', () => {
      if (newSelect.value !== '__NEW__' && input.value) {
        // If user typed something but then selected existing, clear the input
        if (newSelect.value && newSelect.value !== '__NEW__') {
          input.value = '';
          input.style.display = 'none';
        }
      }
    });
  }
  
  /**
   * Show dialog
   */
  showDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.style.display = 'flex';
    }
  }
  
  /**
   * Close dialog
   */
  closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.style.display = 'none';
    }
  }
  
  /**
   * Convert points to timeline format
   * Points are sorted descending (0 to -280), so we process them in forward order
   * Forward means: 0 → -20 → -100 → -200 (always going more negative)
   * Name points are applied to the closest segment
   */
  convertPointsToTimeline() {
    if (this.points.length === 0) return null;
    
    const timeline = [];
    
    // Points are sorted descending: 0, -20, -100, -200 (0 > -20 > -100)
    // Start from the first point's Z (should be 0 or highest/most positive)
    let fromZ = this.points[0].z; // Start from first point (should be 0)
    
    // Process points in order (forward: 0 → -20 → -100 → -200)
    this.points.forEach((point, index) => {
      if (index === 0) {
        // First point - this is our starting position
        fromZ = point.z;
      } else if (point.z !== fromZ) {
        // Move from previous point to current point
        // Ensure we're going forward (fromZ should be > point.z for forward motion)
        const moveSegment = {
          type: 'move',
          fromZ: fromZ,
          toZ: point.z,
          duration: point.speed || 2,
          easing: point.easing || 'easeInOut'
        };
        // Add checkpointName if point has one
        if (point.checkpointName) {
          moveSegment.checkpointName = point.checkpointName;
        }
        timeline.push(moveSegment);
        fromZ = point.z;
      }
      
      // Add pause if specified
      if (point.pause > 0) {
        const pauseSegment = {
          type: 'pause',
          atZ: point.z,
          duration: point.pause
        };
        // Add checkpointName if point has one (for pause segments)
        if (point.checkpointName) {
          pauseSegment.checkpointName = point.checkpointName;
        }
        timeline.push(pauseSegment);
      } else if (point.checkpointName && index > 0 && point.z === fromZ) {
        // If no pause but has checkpointName, add it to the last move segment
        if (timeline.length > 0 && timeline[timeline.length - 1].type === 'move') {
          timeline[timeline.length - 1].checkpointName = point.checkpointName;
        }
      }
    });
    
    // Apply name points to the closest segments
    this.namePoints.forEach(namePoint => {
      // Find the segment closest to this name point's Z position
      let closestSegment = null;
      let closestDistance = Infinity;
      
      timeline.forEach(segment => {
        let segmentZ;
        if (segment.type === 'move') {
          // For move segments, use the end position (toZ)
          segmentZ = segment.toZ;
        } else if (segment.type === 'pause') {
          // For pause segments, use the pause position (atZ)
          segmentZ = segment.atZ;
        }
        
        if (segmentZ !== undefined) {
          const distance = Math.abs(segmentZ - namePoint.z);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSegment = segment;
          }
        }
      });
      
      // Names are now independent - no longer applied to timeline segments
      // Name points are just visual labels on the timeline
    });
    
    console.log('Converted timeline (forward order):', timeline.map((s, i) => `${i}: ${s.type} ${s.fromZ || s.atZ} → ${s.toZ || s.atZ}${s.checkpointName ? ` [${s.checkpointName}]` : ''}`).join(', '));
    
    return timeline.length > 0 ? timeline : null;
  }
  
  /**
   * Save timeline and export in new structure: settings, timeline, checkpoints
   */
  saveTimeline() {
    const checkpoint = checkpoints[0]; // Always use first checkpoint
    const timeline = this.convertPointsToTimeline();
    
    checkpoint.timeline = timeline;
    
    // Load current dashboard items from HTML before exporting
    this.loadDashboardItemsFromHTML();
    
    // Build export structure: settings, timeline, checkpoints, dashboardItems, namePoints, lotties
    const exportData = {
      settings: {
        startZ: this.manualStartZ !== null ? this.manualStartZ : null,
        endZ: this.manualEndZ !== null ? this.manualEndZ : null
      },
      timeline: timeline || [],
      checkpoints: checkpoints.map(cp => ({
        name: cp.name,
        z: cp.z,
        speed: cp.speed
      })),
      dashboardItems: this.dashboardItems.length > 0 ? this.dashboardItems : checkpoints.map(cp => ({
        checkpointName: cp.name,
        text: cp.name
      })),
      namePoints: this.namePoints.map(np => ({
        z: np.z,
        name: np.name || np.checkpointName || 'Name'
      })),
      lotties: this.lottiePoints.map(lp => ({
        url: lp.url,
        playZ: lp.playZ,
        stopZ: lp.stopZ
      }))
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    
    // Create formatted export for easy copy-paste
    const formattedExport = `export const checkpointConfig = ${jsonString};`;
    
    // Reinitialize dashboard items if checkpoint controller exists
    if (window.checkpointController) {
      window.checkpointController.initializeDashboardItems();
    }
    
    // Reinitialize dashboard items if checkpoint controller exists
    if (window.checkpointController) {
      window.checkpointController.initializeDashboardItems();
    }
    
    console.log('=== CHECKPOINT CONFIG (copy this to checkpoint-config.js) ===');
    console.log('Settings:', exportData.settings);
    console.log('Timeline segments:', exportData.timeline.length);
    console.log('Checkpoints:', exportData.checkpoints.length);
    console.log('\n' + formattedExport);
    console.log('\n=== JSON DATA ===');
    console.log(jsonString);
    
    alert(`Saved!\n\nConfig exported to console with:\n- Settings (Z range)\n- Timeline (${exportData.timeline.length} segments)\n- Checkpoints (${exportData.checkpoints.length} markers)\n\nCopy the "export const checkpointConfig = ..." code to checkpoint-config.js`);
  }
  
  /**
   * Export complete checkpoints configuration
   * Exports in new structure: settings, timeline, checkpoints
   */
  exportCheckpoints() {
    // Get timeline from first checkpoint
    const timeline = checkpoints[0]?.timeline || [];
    
    // Load current dashboard items from HTML before exporting
    this.loadDashboardItemsFromHTML();
    
    // Build export structure: settings, timeline, checkpoints, dashboardItems, namePoints, lotties
    const exportData = {
      settings: {
        startZ: this.manualStartZ !== null ? this.manualStartZ : null,
        endZ: this.manualEndZ !== null ? this.manualEndZ : null
      },
      timeline: timeline,
      checkpoints: checkpoints.map(cp => ({
        name: cp.name,
        z: cp.z,
        speed: cp.speed
      })),
      dashboardItems: this.dashboardItems.length > 0 ? this.dashboardItems : checkpoints.map(cp => ({
        checkpointName: cp.name,
        text: cp.name
      })),
      namePoints: this.namePoints.map(np => ({
        z: np.z,
        name: np.name || np.checkpointName || 'Name'
      })),
      lotties: this.lottiePoints.map(lp => ({
        url: lp.url,
        playZ: lp.playZ,
        stopZ: lp.stopZ
      }))
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    const formattedExport = `export const checkpointConfig = ${jsonString};`;
    
    // Reinitialize dashboard items if checkpoint controller exists
    if (window.checkpointController) {
      window.checkpointController.initializeDashboardItems();
    }
    
    console.log('=== CHECKPOINT CONFIG ===');
    console.log('Settings:', exportData.settings);
    console.log('Timeline segments:', exportData.timeline.length);
    console.log('Checkpoints:', exportData.checkpoints.length);
    console.log('\n' + formattedExport);
    console.log('\n=== JSON DATA ===');
    console.log(jsonString);
    
    // Log details
    console.log('\n=== DETAILS ===');
    console.log('Settings - Start Z:', exportData.settings.startZ, 'End Z:', exportData.settings.endZ);
    console.log('Timeline -', exportData.timeline.length, 'segments');
    exportData.checkpoints.forEach((cp, index) => {
      console.log(`Checkpoint ${index}: "${cp.name}" at Z: ${cp.z}`);
    });
    
    // Copy to clipboard if possible
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedExport).then(() => {
        alert(`Config copied to clipboard!\n\nSettings, Timeline (${exportData.timeline.length} segments), and ${exportData.checkpoints.length} checkpoints.\nPaste it into checkpoint-config.js`);
      }).catch(() => {
        alert(`Config exported to console.\n\nSettings, Timeline, and Checkpoints included.\nCopy the "export const checkpointConfig = ..." code to checkpoint-config.js`);
      });
    } else {
      alert(`Config exported to console.\n\nSettings, Timeline, and Checkpoints included.\nCopy the "export const checkpointConfig = ..." code to checkpoint-config.js`);
    }
  }
  
  /**
   * Test animation
   */
  testAnimation() {
    if (!this.checkpointController || !this.cameraController) {
      alert('Checkpoint controller not available');
      return;
    }
    
    // If already playing, don't start again
    if (this.isTestPlaying) {
      return;
    }
    
    const checkpoint = checkpoints[0]; // Always use first checkpoint
    this.originalTimeline = checkpoint.timeline ? JSON.parse(JSON.stringify(checkpoint.timeline)) : null;
    const timeline = this.convertPointsToTimeline();
    
    if (!timeline || timeline.length === 0) {
      alert('No timeline to test. Add points first.');
      return;
    }
    
    checkpoint.timeline = timeline;
    this.isTestPlaying = true;
    
    // Update UI: hide play button, show stop button
    document.getElementById('timelineTestBtn').style.display = 'none';
    document.getElementById('timelineStopBtn').style.display = 'inline-block';
    
    // Always start from Z=0 for preview
    const startZ = 0;
    
    // Ensure the timeline starts at 0 by adjusting the first segment if needed
    const firstSegment = timeline[0];
    if (firstSegment) {
      if (firstSegment.type === 'move') {
        // Force first segment to start from 0
        const originalFromZ = firstSegment.fromZ;
        firstSegment.fromZ = 0;
        console.log(`Adjusted first segment fromZ: ${originalFromZ} → 0`);
      } else if (firstSegment.type === 'pause') {
        // If first segment is a pause, insert a move segment to 0 first
        timeline.unshift({
          type: 'move',
          fromZ: 0,
          toZ: firstSegment.atZ,
          duration: 0.1, // Very short duration to get to pause position
          easing: 'linear'
        });
        console.log('Inserted move segment to start from Z=0');
      }
    }
    
    console.log('Test animation: Starting from Z:', startZ, 'First segment:', timeline[0]);
    
    // Immediately move camera to start position (force it to 0)
    this.cameraController.camera.position.z = startZ;
    this.cameraController.targetZ = startZ;
    
    // Wait a bit longer to ensure camera position is set, then start animation
    setTimeout(() => {
      // Double-check camera is at start position (0)
      this.cameraController.camera.position.z = startZ;
      this.cameraController.targetZ = startZ;
      
      // Now start the animation (always use first checkpoint, index 0)
      this.checkpointController.jumpToCheckpoint(0, true);
    }, 150);
    
    // Monitor animation completion
    this.monitorAnimationCompletion();
  }
  
  /**
   * Stop animation
   */
  stopAnimation() {
    if (!this.isTestPlaying) {
      return;
    }
    
    // Stop the checkpoint controller animation
    if (this.checkpointController) {
      // Cancel any ongoing animation
      if (this.checkpointController.currentAnimationFrame !== null) {
        cancelAnimationFrame(this.checkpointController.currentAnimationFrame);
        this.checkpointController.currentAnimationFrame = null;
      }
      this.checkpointController.isAnimating = false;
    }
    
    // Restore original timeline
    if (this.originalTimeline !== null) {
      const checkpoint = checkpoints[0]; // Always use first checkpoint
      checkpoint.timeline = this.originalTimeline;
      this.originalTimeline = null;
    }
    
    this.isTestPlaying = false;
    
    // Update UI: show play button, hide stop button
    document.getElementById('timelineTestBtn').style.display = 'inline-block';
    document.getElementById('timelineStopBtn').style.display = 'none';
    
    console.log('Animation stopped');
  }
  
  /**
   * Monitor animation completion to restore UI
   */
  monitorAnimationCompletion() {
    const checkInterval = setInterval(() => {
      if (!this.isTestPlaying) {
        clearInterval(checkInterval);
        return;
      }
      
      // Check if animation is complete
      if (this.checkpointController && !this.checkpointController.isAnimating) {
        // Animation completed naturally
        this.stopAnimation();
        clearInterval(checkInterval);
      }
    }, 100);
    
    // Also set a timeout as fallback (30 seconds max)
    setTimeout(() => {
      if (this.isTestPlaying) {
        this.stopAnimation();
      }
      clearInterval(checkInterval);
    }, 30000);
  }
  
  /**
   * Show timeline bar
   */
  show() {
    const bar = document.getElementById('timelineBar');
    if (bar) {
      bar.style.display = 'block';
      this.isVisible = true;
    }
  }
  
  /**
   * Hide timeline bar
   */
  hide() {
    const bar = document.getElementById('timelineBar');
    if (bar) {
      bar.style.display = 'none';
      this.isVisible = false;
    }
    // Close all dialogs
    document.querySelectorAll('.timeline-dialog').forEach(d => d.style.display = 'none');
    // Stop camera indicator updates
    this.stopCameraIndicatorUpdate();
  }
  
  /**
   * Toggle visibility
   */
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }
}
