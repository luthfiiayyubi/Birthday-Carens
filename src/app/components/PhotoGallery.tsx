import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

import memory1 from "../../assets/memories/1.jpg";
import memory2 from "../../assets/memories/2.jpg";
import memory3 from "../../assets/memories/3.jpg";
import memory4 from "../../assets/memories/4.jpg";
import memory5 from "../../assets/memories/5.jpg";
import memory6 from "../../assets/memories/6.jpg";
import memory7 from "../../assets/memories/7.jpg";
import memory8 from "../../assets/memories/8.jpg";
import memory9 from "../../assets/memories/9.jpg";
import memory10 from "../../assets/memories/10.jpg";
import memory11 from "../../assets/memories/11.jpg";
import memory12 from "../../assets/memories/12.jpg";

interface Photo {
  id: number;
  caption: string;
  url: string;
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, url: memory1, caption: "si cantik" },
    { id: 2, url: memory2, caption: "kondangan??" },
    { id: 3, url: memory3, caption: "nyamm nyamm" },
    { id: 4, url: memory4, caption: "nyamm nyamm part 2" },
    { id: 5, url: memory5, caption: "kok kayak lagi marahan" },
    { id: 6, url: memory6, caption: "ehh lagi ngumpet ya?" },
    { id: 7, url: memory7, caption: "behh cantik betul" },
    { id: 8, url: memory8, caption: "jago bngt berposenya" },
    { id: 9, url: memory9, caption: "si cantik part 2" },
    { id: 10, url: memory10, caption: "si cantik part 3" },
    { id: 11, url: memory11, caption: "abiss mamm" },
    { id: 12, url: memory12, caption: "abiss dinner yayy" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPhoto(photo)}
            className="
              relative
              cursor-pointer
              overflow-hidden
              group
            "
          >
            <img
              src={photo.url}
              alt="memory"
              className="
                w-full
                aspect-square
                object-cover
                rounded-[28px]
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-700
                group-hover:scale-105
                shadow-xl
              "
            />

            <div
              className="
                absolute
                inset-0
                rounded-[28px]
                bg-black/10
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            />

            <div
              className="
                absolute
                bottom-4
                left-4
                text-white
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              <p className="text-sm tracking-wide">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              bg-black/90
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-6
            "
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="
                absolute
                top-6
                right-6
                text-white
                z-50
              "
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedPhoto.url}
              className="
                w-auto
                max-w-[90vw]
                h-auto
                max-h-[90vh]
                object-contain
                rounded-[30px]
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
