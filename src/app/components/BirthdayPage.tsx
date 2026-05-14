import { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { ArrowRight } from "lucide-react";

interface BirthdayPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function BirthdayPage({ onNext, onBack }: BirthdayPageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2500;
      const animationEnd = Date.now() + duration;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 30 * (timeLeft / duration);

        confetti({
          particleCount,
          spread: 60,
          origin: { x: Math.random(), y: Math.random() * 0.6 },
          colors: ["#f59e0b", "#d97706", "#b45309"],
          ticks: 200,
        });
      }, 250);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg tracking-[0.3em] uppercase text-stone-500 mb-6"
          >
            Happy Birthday
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-8xl md:text-9xl mb-8 text-stone-900 tracking-tight"
          >
            Carens
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl text-stone-600 mb-16 leading-relaxed max-w-2xl mx-auto"
          >
            Today we celebrate you and all the beautiful moments we've shared
            together
          </motion.p>

          <div className="mt-12 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onBack}
              className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-100 transition-all"
            >
              Back
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNext}
              className="px-8 py-4 rounded-full bg-neutral-900 text-white font-medium shadow-xl hover:bg-neutral-800 transition-all"
            >
              Continue ✨
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
