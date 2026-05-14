import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WelcomePage } from "./components/WelcomePage";
import { BirthdayPage } from "./components/BirthdayPage";
import { MemoriesPage } from "./components/MemoriesPage";
import { InvitationPage } from "./components/InvitationPage";
import { LetterPage } from "./components/LetterPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full h-screen overflow-hidden relative bg-neutral-50">
      <AnimatePresence mode="wait">
        {currentPage === 0 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <WelcomePage onNext={nextPage} onBack={prevPage} />
          </motion.div>
        )}

        {currentPage === 1 && (
          <motion.div
            key="birthday"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <BirthdayPage onNext={nextPage} onBack={prevPage} />
          </motion.div>
        )}

        {currentPage === 2 && (
          <motion.div
            key="memories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <MemoriesPage onNext={nextPage} onBack={prevPage} />
          </motion.div>
        )}

        {currentPage === 3 && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <LetterPage onNext={nextPage} onBack={prevPage} />
          </motion.div>
        )}

        {currentPage === 4 && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 overflow-y-auto"
          >
            <InvitationPage onNext={nextPage} onBack={prevPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
