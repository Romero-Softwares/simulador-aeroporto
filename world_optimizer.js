// Merotec Optimization Module - Time-Slicing Chunk Generator & Cache Engine
// This module chunks dynamic world generation tasks to preserve frame rates and caches chunks.

const WorldOptimizer = {
  chunkQueue: [],
  maxTimePerFrameMs: 3,
  chunkCache: new Map(),

  settings: {
    chunkSubdivisionScale: 1.0,
    perceivedScaleMultiplier: 1.5,
    generationRadius: 5
  },

  init() {
    console.log("Merotec World Optimizer initialized.");
  },

  queueChunkGeneration(chunkId, generationLogic) {
    if (this.chunkCache.has(chunkId)) {
      return this.chunkCache.get(chunkId);
    }
    if (!this.chunkQueue.some(item => item.id === chunkId)) {
      this.chunkQueue.push({ id: chunkId, run: generationLogic });
    }
    return null;
  },

  processQueue() {
    if (this.chunkQueue.length === 0) return;
    
    const startTime = performance.now();
    while (this.chunkQueue.length > 0 && (performance.now() - startTime) < this.maxTimePerFrameMs) {
      const currentChunk = this.chunkQueue.shift();
      try {
        const result = currentChunk.run();
        if (result) {
          this.chunkCache.set(currentChunk.id, result);
        }
      } catch (e) {
        console.error("Error generating chunk " + currentChunk.id, e);
      }
    }
  }
};

window.WorldOptimizer = WorldOptimizer;
WorldOptimizer.init();
