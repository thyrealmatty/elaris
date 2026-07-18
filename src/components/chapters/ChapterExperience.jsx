import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import EnvelopeAnimation from "./EnvelopeAnimation";
import Letter from "./Letter";
import MusicPlayer from "./MusicPlayer";

import rainSound from "../../assets/audio/rain.mp3";
import paperSound from "../../assets/audio/paper.mp3";
import sealSound from "../../assets/audio/seal.mp3";

export default function ChapterExperience({ chapter }) {
  const [stage, setStage] = useState(0);
  const sealAudio = useRef(null);
  const paperAudio = useRef(null);
  const rainAudio = useRef(null);

  const openLetter = async () => {
    if (sealAudio.current) {
      sealAudio.current.play();
    }

    setStage(1);

    await new Promise((r) => setTimeout(r, 500));

    if (paperAudio.current) {
      paperAudio.current.play();
    }

    setStage(2);

    await new Promise((r) => setTimeout(r, 700));

    setStage(3);

    if (rainAudio.current) {
      rainAudio.current.play();
    }

    await new Promise((r) => setTimeout(r, 600));

    setStage(4);

    await new Promise((r) => setTimeout(r, 400));

    setStage(5);
  };

  return (
    
       <div className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center">
    


      <audio ref={sealAudio} src={sealSound} preload="auto" />
      <audio ref={paperAudio} src={paperSound} preload="auto" />
      <audio
        ref={rainAudio}
        src={rainSound}
        preload="auto"
        loop
        />

<EnvelopeAnimation
    stage={stage}
    onOpen={openLetter}
/>
      {/* Letter */}
      <AnimatePresence>
        {stage >= 4 && (
          <motion.div
            initial={{ opacity: 0, 
                y: 250, 
                scale: 0.8 
            }}
            animate={{ 
                opacity: 1,
                 y: 0,
                  scale: 1 
                }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
            className="mx-auto w-full max-w-xl rounded-[28px] border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-xl md:max-w-3xl md:rounded-[36px] md:p-10"
          >

            <p className="text-sm uppercase tracking-[6px] text-pink-400">
              Chapter {chapter.id}
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#2c2c2c] md:text-5xl">
              {chapter.title}
            </h1>

            <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500">
              <span>{chapter.date}</span>
              <span>•</span>
              <span>{chapter.readingTime}</span>
            </div>

            <hr className="my-5" />

            <div className="mt-6 text-[15px] leading-8 text-[#4a4a4a] md:text-[17px]">
  <Letter text={chapter.letter} />
</div>

            {stage >= 5 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <MusicPlayer
      song={chapter.song}
      artist={chapter.artist}
      songUrl={chapter.songUrl}
    />
  </motion.div>
)}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}