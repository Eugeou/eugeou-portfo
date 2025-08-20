import { motion } from "framer-motion";
import Image from "next/image";
import { useCheckMobile } from "@/hooks/use-check-mobile";

export const RightIntroHero = () => {
  const { isMobile } = useCheckMobile();
  return (
    <div className="w-[90%] md:w-1/2 justify-start items-start flex flex-col bg-[url('/assets/railways/border.png')] bg-cover bg-no-repeat bg-center bg-opacity-40 h-[340px] md:h-96 z-10 p-2 rounded-xl mt-4 md:mt-0">
      <div className="flex relative items-center justify-between bg-white w-full h-full rounded-sm bg-opacity-20">
        <>
          <Image
            src="/assets/railways/tall-barrier.png"
            alt="bg-hero"
            width={isMobile ? 150 : 200}
            height={isMobile ? 400 : 500}
            className="-mb-5 md:mb-24 -left-9 relative"
          />
        </>
        <div className="flex flex-col items-start justify-start absolute left-10 md:left-16 top-[100px] mt-2 rounded-xl">
          <motion.h1
            className="font-bold text-[#ff8c00] z-20 text-lg sm:text-2xl bg-white px-2 mt-12 md:mt-3 md:pt-2 rounded-[4px] font-mono"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            Warning! You are entering <br />
            <span className="text-red-600">My Portfolio station</span>
          </motion.h1>
          <motion.h2
            className="font-medium text-gray-500 pt-2 z-20 bg-white px-2 pb-2 rounded-[4px] text-xs sm:text-lg font-mono"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            This is my playground, try something new <br /> Also, I share or
            show my experience here.
          </motion.h2>
        </div>
        <div className="relative overflow-hidden h-full w-[260px] md:w-full flex justify-end">
          <Image
            src="/assets/gifs/railway-barrier.gif"
            alt="bg-hero"
            width={isMobile ? 250 : 500}
            height={isMobile ? 300 : 700}
            className="z-10 rounded-xl h-[300px] w-[260px] md:h-[368px] md:w-[500px] mt-5 md:mt-2 relative"
            unoptimized
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
