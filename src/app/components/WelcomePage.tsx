import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface WelcomePageProps {
  onNext: () => void;
  onBack: () => void;
}

export function WelcomePage({ onNext }: WelcomePageProps) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-neutral-800 to-stone-900 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-7xl mb-6 text-white tracking-tight"
        >
          For Carens
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl text-neutral-300 mb-12 leading-relaxed"
        >
          A special celebration crafted with love
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={onNext}
          className="group relative px-10 py-4 bg-transparent border border-amber-400/30 text-amber-400 rounded-none overflow-hidden transition-all duration-300 hover:border-amber-400"
        >
          <span className="relative z-10 tracking-wide">Enter</span>
          <motion.div
            className="absolute inset-0 bg-amber-400/10"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </div>
  );
}
