import { motion } from "motion/react";
import { EnvelopeInvitation } from "./EnvelopeInvitation";

interface InvitationPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function InvitationPage({ onNext, onBack }: InvitationPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-white py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">
            Something Special
          </p>
          <h2 className="text-5xl md:text-6xl text-stone-900 mb-6 tracking-tight">
            You're Invited
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-6" />
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            I have something planned for us this Sunday (if it's posssible)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <EnvelopeInvitation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-stone-500">Made with love</p>
        </motion.div>
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBack}
            className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-100 transition-all"
          >
            Back
          </motion.button>
        </div>
      </div>
    </div>
  );
}
