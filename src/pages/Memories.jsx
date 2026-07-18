import { Link } from "react-router-dom";


import memories from "../data/memories";

export default function Memories() {
  
  return (
      <section className="min-h-screen px-6 pt-24 pb-32 sm:px-6">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
            Eshoras
          </p>

         <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-[#2C2C2C]">
              Our Memories
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
              Some moments fade with time.
              The ones that matter most are kept here forever.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              {memories.length} memories preserved
            </p>

          <div className="mt-10 space-y-6">

            {memories.map((memory) => (
              <Link
                key={memory.id}
                to={`/chapters/${memory.chapterId}`}
                className="group block rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-4xl shadow-lg">
                    {memory.image}
                  </div>

                  <div className="flex-1 min-w-0">

                    <h2 className="text-xl font-bold">
                      {memory.title}
                    </h2>

                    <p className="mt-3 inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                        {memory.date}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                          {memory.mood}
                        </span>

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                          {memory.weather}
                        </span>

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                          {memory.location}
                        </span>

                      </div>

                    <p className="mt-3 leading-7 text-gray-600">
                      {memory.note}
                    </p>
                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-sm font-medium text-pink-500">
                        Opens related chapter
                      </span>

                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>
  );
}