import { Link } from "react-router-dom";
import { FiArrowRight, FiHeart, FiMusic, FiImage } from "react-icons/fi";

export default function MemoryThreads({ chapter }) {
  return (
    <section className="mt-20">

      <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
        Continue Your Story
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Memory Threads
      </h2>

      <div className="mt-8 grid gap-5">

        <Link
          to="/journey"
          className="group flex items-center justify-between rounded-[28px] border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3">
              <FiHeart className="text-pink-500" />
              <span className="font-semibold">Journey</span>
            </div>

            <p className="mt-2 text-gray-500">
              Revisit the milestone behind this chapter.
            </p>
          </div>

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </Link>

        <Link
          to="/soundtrack"
          className="group flex items-center justify-between rounded-[28px] border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3">
              <FiMusic className="text-pink-500" />
              <span className="font-semibold">
                {chapter.song}
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              Listen to the song connected to this memory.
            </p>
          </div>

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </Link>

        <Link
          to="/memories"
          className="group flex items-center justify-between rounded-[28px] border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3">
              <FiImage className="text-pink-500" />
              <span className="font-semibold">
                Memories
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              View photos captured around this chapter.
            </p>
          </div>

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </Link>

      </div>

    </section>
  );
}