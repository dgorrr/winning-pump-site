'use client';

import { useEffect, useState } from "react";

export default function Product360() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <div className="relative h-[480px] sm:h-[560px] w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center group">

      <div className="absolute top-4 left-4 z-10 bg-slate-950/80 border border-slate-800 rounded-full px-3 py-1 text-[10px] font-mono font-bold text-orange-400 tracking-wider backdrop-blur-sm">
        3D PRODUCT VIEW • DRAG TO EXPLORE
      </div>

      {/* @ts-ignore */}
      <model-viewer
      loading="eager"
reveal="auto"
disable-zoom
        src="/models/gza-pump.glb"
        alt="GZA Stamped Stainless Steel Pump 3D Model"
        
        camera-controls
        shadow-intensity="3"
        shadow-softness="1"
        environment-image="legacy"
        exposure="1.2"
        tone-mapping="commerce"
        interaction-prompt="none"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white"
        }}
        onError={() => setHasError(true)}
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-400 text-xs font-mono">
          Unable to load 3D model
        </div>
      )}

      <div className="absolute bottom-4 right-4 z-10 text-xs font-mono text-slate-500 pointer-events-none">
        ROTATE TO VIEW DETAILS
      </div>

    </div>
  );
}