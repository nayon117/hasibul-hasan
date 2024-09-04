"use client";
import { skillsArray } from "@/constants"; // Import your skills array
import Image from "next/image";
import { useState, DragEvent } from "react";
import { TextRevealCard } from "../ui/TextReveal";

interface Skill {
  name: string;
  imageUrl: string;
}

const Skills = () => {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (
    e: DragEvent<HTMLDivElement>,
    index: number
  ): void => {
    setDraggedItem(index);
    (e.target as HTMLDivElement).style.transition = "none";
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>): void => {
    (e.target as HTMLDivElement).style.transform = "none";
    (e.target as HTMLDivElement).style.transition = "transform 0.5s ease";
    setDraggedItem(null);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    if (draggedItem !== null) {
      (e.target as HTMLDivElement).style.transform = `translate(${
        e.clientX - 25
      }px, ${e.clientY - 25}px) rotate(15deg)`;
    }
  };

  return (
    <section id="skills" className="py-16">
      <div className="flex flex-col ">
        {/* <h1 className="heading text-center font-spaceGrotesk">
          My <span className="text-purple">Toolkit</span>
        </h1> */}
        <div className="flex w-full items-center justify-center rounded-2xl">
          <TextRevealCard
            text="Skills & Qualifications"
            revealText="A Toolbox of Specialized Capabilities"
          ></TextRevealCard>
        </div>

        <div className="mt-20 flex flex-wrap gap-12">
          {skillsArray.map((skill: Skill, index: number) => (
            <div
              key={index}
              className={`block-container animate-float relative size-20 transition-transform duration-300 ease-in-out ${
                draggedItem === index ? "" : "hover:z-10 hover:scale-110"
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={(e) => handleDragEnd(e)}
              onDrag={(e) => handleDrag(e)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <Image
                  width={50}
                  height={50}
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite; /* Reduced from 3s to 2s */
        }
      `}</style>
    </section>
  );
};

export default Skills;
