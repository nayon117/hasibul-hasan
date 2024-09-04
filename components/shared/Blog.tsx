"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/GlowingStar";
import { blogsArray } from "@/constants";
import Link from "next/link";
import { TextRevealCard } from "../ui/TextReveal";

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <TextRevealCard
        text="Visionary Voices"
        revealText="Illuminating Paths to Innovation"
      ></TextRevealCard>

      <div className="my-12 flex flex-wrap items-center justify-center gap-16 p-4">
        {blogsArray.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-center  antialiased"
          >
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>{blog.title}</GlowingStarsTitle>
              <div className="flex items-end justify-between">
                <GlowingStarsDescription>
                  {blog.description}
                </GlowingStarsDescription>
                <div className="flex size-8 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)]">
                  <Link href={blog.link} target="_blank">
                    <Icon />
                  </Link>
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          </div>
        ))}
      </div>
    </section>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-4 stroke-2 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
