import { motion } from "framer-motion";
import React from "react";
import { myJobs } from "@/constants";

export const ScrollingText = () => {
  return (
    <div className="relative bg-red-500 text-white py-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-300 to-blue-500 opacity-25"></div>

        {/* Scrolling Text */}
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
          animate={{ x: [0, "100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...new Array(9)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {myJobs.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-8 text-lg font-semibold ml-4"
                >
                  <span className="text-nowrap">{job}</span>
                  <span className="text-2xl">&rarr;</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
  );
};
