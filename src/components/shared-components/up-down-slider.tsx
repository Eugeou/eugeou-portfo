import { imagesUp, imagesDown } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export const UpDownSlider = () => {
  const fadeUp = {
    initial: { opacity: 1, y: 100 },
    animate: {
      //opacity: [1, 0],
      y: ["0%", "-100%"],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const fadeDown = {
    initial: { opacity: 1, y: -100 },
    animate: {
      //opacity: [1, 0],
      y: ["0%", "100%"],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };
  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 w-full h-screen overflow-hidden relative">
        <div className="relative flex flex-col space-y-4">
          {Array(10)
            .fill(imagesUp)
            .flat()
            .map((src, index) => (
              <motion.div
                key={`col1-${index}`}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={fadeUp.transition}
                className="w-full h-1/3 overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-contain border border-gray-600 rounded-2xl"
                />
              </motion.div>
            ))}
        </div>

        <div className="relative flex flex-col space-y-4">
          {Array(10)
            .fill(imagesDown)
            .flat()
            .map((src, index) => (
              <motion.div
                key={`col2-${index}`}
                variants={fadeDown}
                initial="initial"
                animate="animate"
                transition={fadeDown.transition}
                className="w-full h-1/3 overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-contain border border-gray-600 rounded-2xl"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};
