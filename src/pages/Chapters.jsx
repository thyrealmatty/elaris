import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import chapters from "../data/chapters";

export default function Chapters() {
  return (
      <section className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
              Elaris Archive
            </p>

            <h1 className="mt-4 text-5xl font-bold text-[#2C2C2C]">
              Your Avenas 💌
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
              Every chapter is a memory preserved in time.
              Open one whenever you want to relive a moment.
            </p>

          <div className="mt-12 grid gap-6">

            {chapters.map((chapter, index) => (
              <motion.div
                  key={chapter.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                  }}
                >
                  <Link
                    to={`/chapters/${chapter.id}`}
                    className="group block rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                <div className="flex items-start justify-between gap-6">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[5px] text-pink-400">
                      Chapter {chapter.id}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-[#2C2C2C]">
                      {chapter.title}
                    </h2>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                      <span>📅 {chapter.date}</span>

                      <span>⏱ {chapter.readingTime}</span>

                      <span>💖 {chapter.mood}</span>

                    </div>

                  </div>

                  <div className="flex flex-col items-center gap-3">

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 8,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-700 text-lg font-bold text-white shadow-lg"
                    >
                      E
                    </motion.div>

                    <span className="text-sm font-semibold text-pink-500">
                      Open Letter
                    </span>

                  </div>

                </div>
              </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
  
  );
}