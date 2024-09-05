"use client";

import React from "react";

import { Spotlight } from "../ui/Spotlight";
import { Vortex } from "../ui/Vortex";
import Image from "next/image";
import MagicButton2 from "./MagicButton2";
import { FaDownload } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../ui/TypeWriterEffect";
import { words } from "@/constants";

const Hero = () => {
  return (
    <div className="pb-12 pt-20">
      {/* Spotlight */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-3/4 top-10 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* background */}
      <div
        className="absolute left-0 top-0 flex h-screen w-full
       items-center justify-center  dark:bg-black-100 dark:bg-grid-white/[0.03]"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <Vortex
        className="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
        backgroundColor="transparent"
      />

      {/* Text and image */}
      <div className="relative z-10 mt-20 flex justify-center">
        <div className="flex flex-col-reverse items-center justify-between  gap-6 md:flex-row">
          <div className=" flex-1 text-left">
            <TypewriterEffectSmooth words={words} />
            <p className="mb-4  text-sm text-white md:text-lg md:tracking-widest lg:text-2xl">
              {" "}
              Passionate about creating impactful and innovative web solutions.
            </p>

            <a href="/Hasibul Hasan Nayon's Resume.pdf" download>
              <MagicButton2
                title="Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
          <div className="flex-1 justify-end ">
            <Image
              src="/imageP.png"
              width={220}
              height={150}
              alt="Hasibul Hasan"
              className="mx-auto rounded-full p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
