"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      // Ensure the animation is only triggered after the component has mounted
      await controls.start({
        width: "fit-content",
        transition: {
          duration: 2,
          ease: "linear",
        },
      });

      // Wait before reversing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Animate reversing the typing effect
      await controls.start({
        width: "0%",
        transition: {
          duration: 2,
          ease: "linear",
        },
      });

      // Move to the next word or loop back to the first
      setCurrentWordIndex((prevIndex) =>
        prevIndex === wordsArray.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Start the animation after the component has mounted
    startAnimation();
  }, [currentWordIndex, controls, wordsArray]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray[currentWordIndex].text.map((char, index) => (
          <span
            key={`char-${index}`}
            className={cn(
              `dark:text-white text-purple`,
              wordsArray[currentWordIndex].className
            )}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div className="overflow-hidden pb-2" animate={controls}>
        <div
          className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-purple",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
