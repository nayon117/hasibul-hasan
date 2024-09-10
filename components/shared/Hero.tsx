"use client";
import { Spotlight } from "../ui/Spotlight";
import { FaDirections, FaDownload } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../ui/TypeWriterEffect";
import { words } from "@/constants";
import Button from "../ui/Button";
import ComputersCanvas from "../ui/ComputerCanvas";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-5 pb-12 pt-24 sm:px-10">
      {/* Spotlight */}
      <div className="absolute inset-0">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="purple"
        />
        <Spotlight className="left-3/4 top-10 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#010103] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#010103] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col-reverse items-center justify-center lg:flex-row lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="mb-8 flex flex-col items-center text-center lg:mb-0 lg:w-1/2 lg:items-start lg:text-left">
          <TypewriterEffectSmooth words={words} />
          <p className="my-4 max-w-2xl text-sm text-neutral-400 md:text-lg md:tracking-widest lg:text-xl">
            Passionate about creating impactful and innovative web solutions.
          </p>
          <div className="flex items-center gap-4 pt-5">
            <a href="/Hasibul Hasan Nayon's Resume.pdf" download>
              <Button
                name="Resume"
                icon={<FaDownload />}
                position="right"
                containerClass="px-2 text-left"
              />
            </a>
            <a href="#about">
              <Button
                name="Let's explore"
                icon={<FaDirections />}
                position="right"
                containerClass="px-2 text-left"
              />
            </a>
          </div>
        </div>

        {/* Computer Model */}
        <div className="w-full lg:-mt-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="mx-auto w-full max-w-xl lg:h-[calc(100vh-12rem)]">
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
