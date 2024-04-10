import React from "react";

export function DotBackground() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] z-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
        {/* Radial gradient element (if needed you can add it here) */}
      </div>
    </div>
  );
}