"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader"

const loadingStates = [
  {
    text: "Sourcing fresh ingredients...",
  },
  {
    text: "Chopping veggies with Chef’s precision...",
  },
  {
    text: "Simmering the perfect sauce...",
  },
  {
    text: "Setting tables for a delightful experience...",
  },
  {
    text: "Mixing up some refreshing cocktails...",
  },
  {
    text: "Lighting candles for the perfect ambiance...",
  },
  {
    text: "Plating your gourmet meal...",
  },
  {
    text: "All set! Welcome to MealFlow!",
  },
];

export default function MLoader() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
    </div>
  );
}
