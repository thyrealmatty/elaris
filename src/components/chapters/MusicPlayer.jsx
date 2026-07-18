import { FiMusic, FiExternalLink } from "react-icons/fi";

export default function MusicPlayer({
  song,
  artist,
  songUrl,
}) {
  function handlePlay() {
    if (!songUrl) {
      return;
    }

    window.open(
      songUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="mt-12 rounded-[30px] border border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50 p-6">

      <p className="text-xs font-semibold uppercase tracking-[4px] text-pink-400">
        This Chapter's Song
      </p>

      <div className="mt-5 flex items-center justify-between gap-5">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white">
            <FiMusic size={20} />
          </div>

          <div>
            <h3 className="font-semibold">
              {song}
            </h3>

            <p className="text-sm text-gray-500">
              {artist}
            </p>
          </div>

        </div>

        <button
          onClick={handlePlay}
          disabled={!songUrl}
          className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Listen
          <FiExternalLink />
        </button>

      </div>

    </div>
  );
}