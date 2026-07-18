import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Envelope({ chapter, onFinished }) {
  const [opened, setOpened] = useState(false);

  function handleOpen() {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onFinished();
    }, 2400);
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[500px] w-[360px]"
      >

        {/* Shadow */}

        <motion.div
          animate={{
            scale: opened ? 1.15 : 1,
            opacity: opened ? .2 : .35,
          }}
          className="absolute bottom-0 left-8 right-8 h-8 rounded-full bg-black blur-2xl"
        />

        {/* Paper */}

        <motion.div
          initial={false}
          animate={{
            y: opened ? -210 : 55,
            scaleY: opened ? 1 : .75,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute left-6 right-6 z-10 h-[360px] rounded-2xl bg-white shadow-2xl overflow-hidden"
        >

          <motion.div
            initial={false}
            animate={{
              opacity: opened ? 1 : 0,
            }}
            transition={{
              delay: 1.1,
              duration: .8,
            }}
            className="h-full p-8"
          >

            <p className="text-xs uppercase tracking-[5px] text-pink-400">
              {chapter.date}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              {chapter.title}
            </h2>

            <div className="mt-2 flex gap-3 text-sm text-gray-500">
              <span>{chapter.weather}</span>
              <span>•</span>
              <span>{chapter.location}</span>
            </div>

            <hr className="my-6" />

            <p className="whitespace-pre-line leading-8 text-gray-700">
              {chapter.letter}
            </p>

          </motion.div>

        </motion.div>

        {/* Envelope */}

        <div className="absolute bottom-0 left-0 right-0 z-20 h-[250px] rounded-b-3xl border border-[#e5d6c1] bg-gradient-to-b from-[#fffaf4] to-[#f2e7d8]" />

        {/* Left Fold */}

        <div
          className="absolute bottom-0 left-0 z-30 h-[250px] w-1/2"
          style={{
            background: "#eadfce",
            clipPath: "polygon(0 0,100% 50%,100% 100%,0 100%)",
          }}
        />

        {/* Right Fold */}

        <div
          className="absolute bottom-0 right-0 z-30 h-[250px] w-1/2"
          style={{
            background: "#e6d8c4",
            clipPath: "polygon(0 50%,100% 0,100% 100%,0 100%)",
          }}
        />

        {/* Flap */}

        <motion.div
          animate={{
            rotateX: opened ? -180 : 0,
          }}
          transition={{
            duration: .9,
          }}
          style={{
            transformOrigin: "top",
            transformStyle: "preserve-3d",
          }}
          className="absolute left-0 right-0 top-[120px] z-40 origin-top"
        >

          <div
            className="h-[170px]"
            style={{
              clipPath: "polygon(0 0,100% 0,50% 100%)",
              background: "#ece0d0",
            }}
          />

        </motion.div>

        {/* Wax Seal */}

        <AnimatePresence>

          {!opened && (

            <motion.button
              onClick={handleOpen}
              exit={{
                opacity: 0,
                scale: 0,
                rotate: 180,
              }}
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 25px rgba(236,72,153,.5)",
                  "0 0 0 rgba(0,0,0,0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute left-1/2 top-[250px] z-50 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-700 font-bold text-white shadow-2xl"
            >
              E
            </motion.button>

          )}

        </AnimatePresence>

      </motion.div>

    </div>
  );
}