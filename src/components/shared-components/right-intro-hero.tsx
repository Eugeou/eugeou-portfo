import { motion } from "framer-motion";
import Image from "next/image";

export const RightIntroHero = () => {
  return (
    <div className="w-full md:w-1/2 justify-start items-start flex flex-col bg-[url('/assets/railways/border.png')] bg-cover bg-no-repeat bg-center bg-opacity-40 h-96 z-10 p-2 rounded-xl">
      <div className="flex relative items-center justify-between bg-white w-full h-full rounded-sm bg-opacity-20">
        <>
          <Image
            src="/assets/railways/tall-barrier.png"
            alt="bg-hero"
            width={200}
            height={500}
            className="mb-24 -left-9 relative"
          />
        </>
        <div className="flex flex-col items-start justify-start absolute left-20 top-[100px] mt-2 rounded-xl">
          <motion.h1
            className="font-bold text-[#ff8c00] z-10 text-2xl bg-white px-2 pt-2 rounded-[4px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            Warning! You are entering <br />
            <span className="text-red-600">My Portfolio station</span>
          </motion.h1>
          <motion.h2
            className="font-medium text-gray-500 mt-2 text-lg z-10 bg-white px-2 pb-2 rounded-[4px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            This is my playground, try something new <br /> Also, I share or
            show my knowledge <br /> and experience here.
          </motion.h2>
        </div>
        <div className="relative overflow-hidden h-full">
          <Image
            src="/assets/gifs/railway-barrier.gif"
            alt="bg-hero"
            width={500}
            height={700}
            className="z-10 rounded-xl h-[368px] mt-2"
          />
          <Image
            src="/assets/railways/barrier.png"
            alt="bg-hero"
            width={72}
            height={72}
            className="absolute -bottom-3 left-20 z-20"
          />
          <Image
            src="/assets/railways/barrier.png"
            alt="bg-hero"
            width={72}
            height={72}
            className="absolute -bottom-3 left-40 z-20"
          />
          {/* <Image
            src="/assets/railways/dino-pixel.png"
            alt="bg-hero"
            width={140}
            height={150}
            className="absolute -bottom-3 left-36 z-20"
          /> */}
        </div>
      </div>
    </div>
  );
};
