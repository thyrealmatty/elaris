import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import journey from "../data/journey";

export default function Journey() {
 
  return (
      <section className="min-h-screen px-6 pt-24 pb-32 sm:px-6">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
            VIREL
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-[#2C2C2C]">
                Our Journey
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                Every beautiful story is written one moment at a time.
                These are the memories that brought us here.
              </p>

          <div className="mt-10 rounded-3xl border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm uppercase tracking-[5px] text-pink-400">
                  Journey Progress
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {journey.length} Beautiful Moments
                </h3>
              </div>

              <div className="text-5xl">
                ❤️
              </div>

            </div>

          </div>
          <div className="mt-12 space-y-10">
            {journey.map((event) => (
              <div key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    to={`/chapters/${event.chapterId}`}
                    className="group flex gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-3xl text-white shadow-lg">
                        {event.icon}
                      </div>
                      <div className="mt-2 h-full w-[3px] rounded-full bg-gradient-to-b from-pink-400 via-pink-300 to-transparent group-last:hidden"></div>
                    </div>

                    <div className="flex-1 rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                      <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                        {event.date}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">
                        {event.title}
                      </h2>
                      <p className="mt-3 leading-7 text-gray-600">
                        {event.description}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
                          💌 Opens Chapter
                        </span>
                        <span className="text-sm font-medium text-pink-500 transition group-hover:translate-x-1">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}

            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-pink-300 bg-white text-3xl">
                  ✨
                </div>
              </div>

              <div className="flex-1 rounded-[32px] border border-dashed border-pink-200 bg-pink-50 p-8">
                <h2 className="text-2xl font-bold text-[#2C2C2C]">
                  More chapters are waiting...
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  Every day adds another page to our story.
                  The best memories are still ahead of us.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>
  );
}