import { motion } from "framer-motion";

export default function EnvelopeAnimation({
  stage,
  onOpen,
}) {
  return (
    <motion.div
      layout
      className="relative h-[300px] w-[400px] cursor-pointer"
      onClick={stage === 0 ? onOpen : undefined}
      initial={{ opacity: 1 }}
      animate={{
        opacity: stage >= 4 ? 0 : 1,
        scale: stage >= 4 ? 0.92 : 1,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {/* Shadow */}

      <div className="absolute inset-x-12 bottom-0 h-8 rounded-full bg-black/20 blur-xl" />

      {/* Envelope */}

      <div className="absolute inset-0 rounded-3xl border border-[#eadcca] bg-gradient-to-b from-[#fffaf5] to-[#efe4d6] shadow-2xl" />

      {/* Left Fold */}

      <div
        className="absolute bottom-0 left-0 h-[180px] w-1/2"
        style={{
          clipPath: "polygon(0 0,100% 50%,100% 100%,0 100%)",
          background: "#e6d5c3",
        }}
      />

      {/* Right Fold */}

      <div
        className="absolute bottom-0 right-0 h-[180px] w-1/2"
        style={{
          clipPath: "polygon(0 50%,100% 0,100% 100%,0 100%)",
          background: "#dfcdb8",
        }}
      />

      {/* Flap */}

      <motion.div
        className="absolute left-0 right-0 top-0 h-[170px]"
        style={{
          transformOrigin: "top",
          clipPath: "polygon(0 0,100% 0,50% 100%)",
          background: "#efe0cf",
        }}
        animate={{
          rotateX: stage >= 2 ? -180 : 0,
        }}
        transition={{
          duration: .8,
          ease: "easeInOut",
        }}
      />

      {/* Seal */}

      <motion.div
        animate={{
          scale:
            stage >= 1
              ? 0
              : [1,1.08,1],

          opacity:
            stage >= 1
              ? 0
              : 1,
        }}
        transition={{
          repeat:
            stage === 0
              ? Infinity
              : 0,

          duration: 2,
        }}
        className="absolute left-1/2 top-[120px] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-700 text-xl font-bold text-white shadow-xl"
      >
        E
      </motion.div>

      <motion.p
        animate={{
          opacity: [.5,1,.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute -bottom-14 w-full text-center text-gray-500"
      >
        Tap the seal to open your letter
      </motion.p>

    </motion.div>
  );
}