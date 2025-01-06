"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="py-12">
      <div className="mb-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <HoverEffect items={courses} />
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}
export const courses = [
  {
    id: 1,
    title: "Guitar Fundamentals",
    slug: "guitar-fundamentals",
    description:
      "Learn the basics of playing guitar with our comprehensive beginner's course.",
  },

  {
    id: 3,
    title: "Advanced Vocal Techniques",
    slug: "advanced-vocal-techniques",
    description:
      "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
  },

  {
    id: 6,
    title: "Music Production Fundamentals",
    slug: "music-production-fundamentals",
    description:
      "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
  },

  {
    id: 8,
    title: "Electronic Music Production",
    slug: "electronic-music-production",
    description:
      "Create compelling electronic music with our course designed for beginners to advanced users.",
  },

  {
    id: 10,
    title: "Blues Guitar Techniques",
    slug: "blues-guitar-techniques",
    description:
      "Discover the techniques of blues guitar to add soul and depth to your playing.",
  },
];
