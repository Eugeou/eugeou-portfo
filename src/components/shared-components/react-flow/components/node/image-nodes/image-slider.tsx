import { animSet } from "@/app/helpers/framer-motion/anims";
import { motion } from "framer-motion";
import { useRef } from "react";
import TwinkleStar from "./twinkle-star";

type Props = {
  width: number;
  height: number;
  scaleXPercent: number;
  imageUrls: {
    before: string;
    after: string;
  };
};

const cleanImageUrl = (url: string): string => {
  if (!url) return "";
  return url.trim().replace(/^["']|["']$/g, "");
};


export default function ImageSlider({
  imageUrls,
  width = 160,
  height = 160,
  scaleXPercent = 100,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanBeforeUrl = cleanImageUrl(imageUrls.before);
  const cleanAfterUrl = cleanImageUrl(imageUrls.after);

  return (
    <div
      ref={containerRef}
      className="relative w-40 h-40 overflow-hidden rounded-md border-[2px] border-white shadow-[1px_4px_6px_1px_rgba(0,0,0,0.1)] cursor-pointer"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <motion.div initial="expanded" whileHover="collapsed">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: cleanAfterUrl ? `url(${cleanAfterUrl})` : "none",
          }}
        />
        <motion.div
          variants={animSet.expand({
            width: (width * scaleXPercent) / 100,
            duration: 2.2,
          })}
          className="absolute right-0 top-0 bottom-0 w-full h-full bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: cleanBeforeUrl ? `url(${cleanBeforeUrl})` : "none",
          }}
        >
          <motion.div
            variants={animSet.expandFade({
              durationIn: 0.16,
              durationOut: 0.16,
              desOpacity: 1,
            })}
          >
            <div className="absolute top-0">
              <TwinkleStar />
            </div>
          </motion.div>
          <motion.div
            variants={animSet.expandFade({
              durationIn: 2.5,
              durationOut: 0.16,
              desOpacity: [1, 1, 1, 0],
            })}
          >
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" />
            {/* <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
              <Image
                src={"/assets/icons/arrow-right.svg"}
                alt="Arrow right"
                width={16}
                height={16}
              />
            </div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
