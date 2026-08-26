// Merotec Dynamic Injection Bridge - Active Runtime Override
// This script provides global performance setting overrides.

(function injectOptimizer() {
  if (window.WorldOptimizerInject) return;
  window.WorldOptimizerInject = true;

  console.log("Merotec Active Bridge: Overriding simulation variables dynamically...");

  // Remove aggressive window.requestAnimationFrame override.
  // Optimizer logic will now be handled directly in the render loop.
  
  setInterval(() => {
    if (window.WorldOptimizer && window.WorldOptimizer.settings) {
      if (typeof window.CHUNK_SIZE !== 'undefined') window.CHUNK_SIZE = 16 * window.WorldOptimizer.settings.chunkSubdivisionScale;
      if (typeof window.WORLD_SCALE !== 'undefined') window.WORLD_SCALE = window.WorldOptimizer.settings.perceivedScaleMultiplier;
    }
  }, 500);
})();
