import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContinueReading() {
  const [reading] = useState(() => {
    const saved = localStorage.getItem("continueReading");
    return saved ? JSON.parse(saved) : null;
  });

  if (!reading) {
    return (
      <div className="rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[6px] text-pink-400">
          Continue Reading
        </p>

        <h2 className="mt-4 text-3xl font-bold text-[#2C2C2C]">
          💌 Your next letter is waiting
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          Start a chapter and Elaris will remember exactly where you left off.
        </p>
      </div>
    );
  }

  return (
    <Link
      to={`/chapters/${reading.id}`}
      className="block rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[6px] text-pink-400">
        Continue Reading
      </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] text-pink-500">
            Chapter {reading.id}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#2C2C2C] md:text-3xl">
            {reading.title}
          </h2>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <span>{reading.date}</span>
        <span>•</span>
        <span>{reading.readingTime}</span>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        {reading.progress >= 100
          ? "You've finished this chapter! ❤️"
          : `${reading.progress}% `}
      </p>
      <p className="mt-5 text-sm font-medium text-pink-500">
  Tap anywhere to continue →
</p>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-gray-400">
              Resume where you left off
            </span>

            <span className="font-semibold text-pink-500">
              Continue →
            </span>
          </div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-pink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-500"
          style={{
            width: `${reading.progress}%`,
          }}
        />
      </div>
    </Link>
  );
}