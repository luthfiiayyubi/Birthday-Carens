import { motion } from "motion/react";
import { PhotoGallery } from "./PhotoGallery";
import { ArrowRight } from "lucide-react";

interface MemoriesPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function MemoriesPage({ onNext, onBack }: MemoriesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">
            Our Journey
          </p>
          <h2 className="text-5xl md:text-6xl text-stone-900 mb-6 tracking-tight">
            Memories Together
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6" />
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Every photograph tells a story of laughter, adventure, and the bond
            we share
          </p>
        </motion.div>

        <PhotoGallery />

        <div className="mt-16 flex items-center justify-between">
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
            className="px-8 py-4 rounded-full bg-stone-900 text-white font-medium shadow-xl hover:bg-stone-800 transition-all"
          >
            View Letter ✨
          </motion.button>
        </div>
      </div>
    </div>
  );
}
