"use client";

import { projects } from "@/constants";
import { PinContainer } from "../ui/Pin";
import Link from "next/link";
import Button from "../ui/Button";
import { SparklesPreview } from "./SparkelComp";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <SparklesPreview title="Signature Projects" />
      <div className="flex flex-wrap items-center justify-center gap-16 p-4 ">
        {projects.map((item) => (
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer title={item.livelink} href={item.livelink}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                <div
                  className="relative size-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/public/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="absolute bottom-0 z-10"
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold text-gray_gradient md:text-xl lg:text-2xl">
                {item.name}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.description}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex size-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:size-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" mt-5 flex items-center gap-4">
                <Link href={item?.client} target="_blank">
                  <Button name="client" containerClass="px-7" />
                </Link>
                {item.server && (
                  <Link href={item.server} target="_blank">
                    <Button name="server" containerClass="px-7 " />
                  </Link>
                )}
                <Link href={item?.livelink} target="_blank">
                  <Button name="Live" isBeam containerClass="px-7 " />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
