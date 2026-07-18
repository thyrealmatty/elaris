import { motion } from "framer-motion";

export default function Letter({ text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="prose prose-lg max-w-none whitespace-pre-line leading-9 text-gray-700"
    >
      {text}
    </motion.div>
  );
}