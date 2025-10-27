"use client";
import { blogsArray } from "@/constants";
import { SparklesPreview } from "./SparkelComp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogShowCase = () => {
  return (
    <div id="blog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-gray_gradient mb-12 flex items-center justify-center text-center text-4xl font-bold">
        <SparklesPreview title="Visionary Voices" />
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mx-auto max-w-4xl"
      >
        {blogsArray.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="items-center overflow-hidden rounded-lg bg-gray-900 p-4 shadow-lg md:flex md:p-0">
              <div className="md:shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="h-64 w-full object-cover md:h-full md:w-64"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">{blog.title}</h3>
                  <p className="mb-4 line-clamp-3 text-gray-400">
                    {blog.description}
                  </p>
                </div>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-green-600"
                >
                  Read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogShowCase;
