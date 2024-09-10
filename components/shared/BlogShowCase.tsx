"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { blogsArray } from "@/constants";


const BlogShowcase: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const swiperParams = {
    modules: [Navigation],
    spaceBetween: 28,
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  };

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col justify-between lg:w-1/3">
            <div className="text-center lg:text-left">
              <h2 className="text-gray_gradient mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:leading-[3.25rem]">
                Visionary Insights
              </h2>
              <p className="mb-8 text-base text-neutral-400 sm:text-lg">
              Dive into my world of creativity and expertise. Discover thought-provoking articles, practical advice, and the latest industry trends that shape my work.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <button
                ref={prevRef}
                className="group flex size-10 items-center justify-center rounded-full border border-purple-400 transition-all duration-300  sm:size-10"
              >
                <FaArrowLeft className="size-5 text-neutral-400 transition-colors  sm:size-5" />
              </button>
              <button
                ref={nextRef}
                className="group flex size-10 items-center justify-center rounded-full border border-purple-400 transition-all duration-300  sm:size-10"
              >
                <FaArrowRight className="size-5 text-neutral-400 transition-colors  sm:size-5" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <Swiper
              {...swiperParams}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {blogsArray.map((post, index) => (
                <SwiperSlide key={index} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <Image
                      src={post.image}
                      width={150}
                      height={150}
                      alt={`Blog post ${index + 1}`}
                      className="h-48 w-full object-cover sm:h-56 lg:h-64"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-gray_gradient mb-2 text-xl font-semibold sm:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-neutral-400 sm:text-base">
                        {post.description}
                      </p>
                      <Link
                        href={post.link}
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-neutral-400 sm:text-base"
                      >
                        Read more
                        <TiArrowRight className="ml-2 size-4" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
