import { motion } from "framer-motion";
import Image from "next/image";

export const CatTrain = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full">
    <motion.div
        className="flex relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:content-['']"
        // initial={{ translateX: "0%" }}
        // animate={{ translateX: '50%' }}
        // transition={{
        // repeat: Infinity,
        // repeatType: "loop",
        // duration: 10,
        // ease: "linear",
        // }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <div className="flex items-center justify-center space-x-1">
          <Image
            src="/assets/gifs/WsRU-train.gif"
            alt="dino"
            width={300}
            height={300}
          />
        </div>
      </motion.div>
      <div className="bg-[url('/assets/railways/train-track.png')] bg-contain bg-center w-full h-6 absolute bottom-5"/>
      </div>
  );
};