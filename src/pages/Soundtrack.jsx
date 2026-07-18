import { useState } from "react";
import { FiExternalLink, FiMusic, FiPlay } from "react-icons/fi";


import chapters from "../data/chapters";

export default function Soundtrack() {
  const [currentSong, setCurrentSong] = useState(chapters[0]);
  
  return (
      <section className="min-h-screen px-6 pt-24 pb-32 sm:px-6">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
            Lumaris
          </p>

        <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-[#2C2C2C]">
            Our Soundtrack
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Some memories are remembered through words.
            Others are remembered through music.
            Every chapter carries a song that preserves how that moment felt.
          </p>
          <p className="mt-4 text-sm text-gray-400">
              {chapters.length} songs • One beautiful story
            </p>
          <div className="mt-10 rounded-[36px] border border-[#efe3d3] bg-gradient-to-r from-pink-500 to-fuchsia-600 p-8 text-white shadow-xl">

              <p className="text-sm uppercase tracking-[6px] text-pink-100">
                Now Playing
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                {currentSong.song}
              </h2>

              <p className="mt-2 text-pink-100">
                {currentSong.artist}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
                    {currentSong.mood}
                  </div>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 backdrop-blur-md">
                <FiPlay />
                <span>{currentSong.title}</span>
              </div>

            </div>

          <div className="mt-10 space-y-5">

            {chapters.map((chapter) => (

              <div
                key={chapter.id}
                onClick={() => setCurrentSong(chapter)}
                className={`group cursor-pointer rounded-[32px] border p-8 transition-all duration-300 ${
                  currentSong.id === chapter.id
                    ? "border-pink-300 bg-pink-50 shadow-xl ring-2 ring-pink-200"
                    : "border-[#efe3d3] bg-[#fffaf3] shadow-lg hover:-translate-y-2 hover:shadow-2xl"
                }`}
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4 min-w-0">

                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white shadow-lg">
                      <FiMusic size={24} />
                    </div>

                    <div className="min-w-0">

                      <h2 className="truncate text-xl font-bold">
                        {chapter.song}
                      </h2>

                     <div className="mt-4 flex flex-wrap gap-2">

                        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                          💌 {chapter.title}
                        </span>

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                          {chapter.mood}
                        </span>

                      </div>

                     <p className="mt-4 inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                        💌 {chapter.title}
                      </p>

                    </div>

                  </div>

                 <a
                    href={chapter.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink
                      size={24}
                      className="text-pink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
  );
}