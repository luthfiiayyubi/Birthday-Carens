import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

export function EnvelopeInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Envelope */}
            <div className="relative w-full aspect-[1.6/1] bg-stone-100 border border-stone-200 shadow-xl">
              {/* Envelope Flap */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 bg-stone-200 border-b border-stone-300"
                style={{
                  clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                }}
              />

              {/* Seal */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-20 bg-amber-900 rounded-full flex items-center justify-center border-2 border-amber-800">
                <div className="w-12 h-12 border-2 border-amber-100 rounded-full" />
              </div>

              {/* Hint */}
              <motion.p
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-600 text-sm tracking-wide"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to open
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-stone-200 shadow-2xl p-12"
          >
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-px bg-stone-300 mx-auto mb-6" />
                <h3 className="text-3xl text-stone-900 tracking-tight mb-2">
                  You're Invited
                </h3>
                <div className="w-16 h-px bg-stone-300 mx-auto mt-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6 text-stone-700"
              >
                <p className="text-lg italic leading-relaxed">
                  Join me for a special day together
                </p>

                <div className="space-y-4 py-6">
                  <div className="flex items-center justify-center gap-4">
                    <Calendar className="w-5 h-5 text-stone-500" />
                    <span className="text-lg">Sunday</span>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <MapPin className="w-5 h-5 text-stone-500" />
                    <span className="text-lg">Location: TBA</span>
                  </div>
                </div>

                <p className="text-sm text-stone-500 border-t border-stone-200 pt-6">
                  Can't wait to spend this day with you
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 bg-stone-900 text-white text-sm tracking-wide hover:bg-stone-800 transition-colors"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
