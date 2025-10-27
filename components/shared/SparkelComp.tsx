"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkels";

export function SparklesPreview({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black py-4">
      <h1 className="text-gray_gradient relative z-20 text-center text-xl font-bold md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <div className="relative mt-2 h-20 w-80 md:w-96 lg:w-[30rem]">
        <div className="absolute inset-x-10 top-0 h-px w-full bg-gradient-to-r from-transparent via-green-400 to-transparent" />
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={800}
          className="size-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
