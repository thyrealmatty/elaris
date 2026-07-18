import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { motion } from "framer-motion";
import { useEffect } from "react";

import ChapterExperience from "../components/chapters/ChapterExperience";
import MemoryThreads from "../components/chapters/MemoryThreads";

import chapters from "../data/chapters";


export default function Chapter() {
  const { id } = useParams();

  const chapter = chapters.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
  const saveProgress = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0
        ? Math.min(
            100,
            Math.round((scrollTop / documentHeight) * 100)
          )
        : 0;

    localStorage.setItem(
      "continueReading",
      JSON.stringify({
        id: chapter.id,
        title: chapter.title,
        date: chapter.date,
        readingTime: chapter.readingTime,
        progress,
      })
    );
  };

  window.addEventListener("scroll", saveProgress);

  saveProgress();

  return () => window.removeEventListener("scroll", saveProgress);
}, [chapter]);

  if (!chapter) {
    return (
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
              Elaris
            </p>

            <h1 className="mt-5 text-4xl font-bold">
              This chapter could not be found.
            </h1>

            <Link
              to="/chapters"
              className="mt-8 inline-block rounded-full bg-pink-500 px-7 py-3 font-semibold text-white"
            >
              Return to Chapters
            </Link>
          </div>
        </section>
      
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-6 top-6 z-50"
      >
        <Link
          to="/chapters"
          className="flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm font-medium text-[#2C2C2C] shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/40"
        >
          <FaArrowLeft className="text-xs" />
          Chapters
        </Link>
      </motion.div>

      <section className="min-h-screen px-6 pb-20 pt-16">
        <div className="mx-auto max-w-4xl">
          <ChapterExperience chapter={chapter} />
        </div>
        <MemoryThreads chapter={chapter} />
      </section>
    </>
  );
}