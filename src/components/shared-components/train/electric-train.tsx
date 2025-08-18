import { motion } from "framer-motion";
import Image from "next/image";

export const ElectricTrain = () => {
  return (
    <div className="flex flex-col items-start justify-center relative mt-28">
      <Image
        src="/assets/gifs/cherry-blossom.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[132px] "
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-60"
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-80"
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-[400px]"
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-[800px]"
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-[880px]"
      />
      <Image
        src="/assets/gifs/sakura.gif"
        alt="sakura"
        width={200}
        height={200}
        className="absolute -top-[120px] left-[960px]"
      />
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
        animate={{ x: ["-240%", "240%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          },
        }}
      >
        <div className="flex items-center justify-center space-x-1 relative bottom-3">
          <Image
            src="/assets/railways/train-end-cabin.png"
            alt="dino"
            width={440}
            height={440}
          />
          <Image
            src="/assets/railways/train-cabin.png"
            alt="dino"
            width={340}
            height={340}
          />
          <Image
            src="/assets/railways/train-cabin.png"
            alt="dino"
            width={340}
            height={340}
          />
          <Image
            src="/assets/railways/train-head.png"
            alt="dino"
            width={480}
            height={480}
          />
        </div>
      </motion.div>
      <div className="bg-[url('/assets/railways/train-track.png')] bg-contain bg-center w-full h-5 absolute bottom-0" />
    </div>
  );
};
