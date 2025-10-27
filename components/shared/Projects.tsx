"use client";

import { useState } from "react";
import { projects } from "@/constants";
import Link from "next/link";
import Button from "../ui/Button";
import { SparklesPreview } from "./SparkelComp";
import Image from "next/image";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Show 4 projects per page

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div id="projects" className="mt-20">
      {/* Sparkles Title */}
      <SparklesPreview title="Signature Projects" />

      {/* Projects List */}
      <div className="flex flex-wrap items-center justify-center gap-16 p-4">
        {currentProjects.map((item) => (
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={item.id}
          >
            {/* Project Card */}
            <div
              className="group relative flex flex-col items-center  p-6 shadow-lg transition-all duration-300 ease-in-out"
              style={{ width: "100%", height: "100%" }}
            >
              {/* Project Image Container */}
              <div className="relative mb-6 flex h-[20vh] w-full items-center overflow-hidden p-3 sm:w-96 lg:h-[30vh]">
                <Image
                  src={item.img}
                  alt="cover"
                  width={350}
                  height={350}
                  className="absolute bottom-0 z-10 object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
              </div>

              <h1 className="text-gray_gradient line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {item.name}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.description}
              </p>

              <div className="mb-3 mt-7 flex items-center">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-full border border-white/[.2] bg-black"
                      style={{
                        width: "40px",
                        height: "40px",
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon-${index}`}
                        width={40}
                        height={40}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <Link href={item.client} target="_blank">
                  <Button name="Client" containerClass="px-7" />
                </Link>
                {item.server && (
                  <Link href={item.server} target="_blank">
                    <Button name="Server" containerClass="px-7" />
                  </Link>
                )}
                <Link href={item.livelink} target="_blank">
                  <Button name="Live" isBeam containerClass="px-7" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center gap-3">
        <button
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`rounded px-4 py-2 ${
              currentPage === i + 1
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
