import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface LetterPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function LetterPage({ onNext, onBack }: LetterPageProps) {
  return (
    <div className="min-h-screen bg-[#f8f5f2] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-14 relative overflow-hidden border border-neutral-200">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-100 rounded-full blur-3xl opacity-50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-400 fill-pink-300" />

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800">
                A Little Letter ✨
              </h1>
            </div>

            <div className="space-y-6 text-neutral-600 leading-8 text-lg">
              <p>Hi Hi My One And Only Carens 🤍</p>

              <p>
                Happy birthday yaaa. Aku cuma mau bilang makasih karena udah
                hadir sejauh ini. Semoga semua hal baik datang ke kamu
                satu-satu. semoga kita juga bisa sama-sama belajar buat kurangin
                ego dan gengsi yang kadang bikin keadaan jadi susah sendiri
                hehe..
              </p>

              <p>
                Dari semua random moments, foto absurd, obrolan ga jelas,
                somehow semuanya jadi memory yang aku suka banget.
              </p>

              <p>
                dan maaf ya kalau selama ini aku masih belum jadi yang terbaik
                buat kamu. tapi jujur, aku selalu berusaha jadi seseorang yang
                bisa bikin kamu nyaman dan bahagia. makasih udah mau bertahan
                sama aku sejauh ini :
              </p>

              <p>Once Again Happy Birthday Carens ✨</p>

              <div className="pt-6">
                <p className="font-semibold text-neutral-800 text-xl">
                  — Luthfi 🤍
                </p>
              </div>
            </div>

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
      </motion.div>
    </div>
  );
}
