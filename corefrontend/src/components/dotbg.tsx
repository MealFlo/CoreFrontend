import React from "react";

export function DotBackground() {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-neutral-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] z-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
        {/* Radial gradient element (if needed you can add it here) */}
      </div>
    </div>
  );
}