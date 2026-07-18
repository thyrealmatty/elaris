import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiMusic,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export default function ChapterCard({
  id,
  title,
  date,
  song,
  artist,
  mood,
  location,
  readingTime,
  cover,
}) {
  return (
    <article className="group overflow-hidden rounded-[35px] border border-pink-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#F8E8EC] to-[#EEE7F7]">

        <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
          {cover}
        </span>

      </div>

      <div className="p-8">

        <p className="text-sm font-semibold uppercase tracking-[4px] text-pink-400">
          {date}
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          {title}
        </h2>

        <div className="mt-6 flex items-center gap-3 text-gray-500">
          <FiMusic />
          <span>
            {song} • {artist}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-400">

          <span>
            ✨ {mood}
          </span>

          <span className="flex items-center gap-1">
            <FiMapPin />
            {location}
          </span>

          <span className="flex items-center gap-1">
            <FiClock />
            {readingTime}
          </span>

        </div>

        <Link
          to={`/chapters/${id}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-pink-600"
        >
          <FiBookOpen />

          Open Chapter
        </Link>

      </div>

    </article>
  );
}