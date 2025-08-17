import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { aboutMeTabs } from "@/constants";
import { useState } from "react";

export const AboutMeContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col items-center h-screen p-4 px-10">
      <motion.h2
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-red-600 font-bold mt-5 text-3xl p-3 border-b-4 border-b-red-600 "
      >
        ABOUT ME
      </motion.h2>
      <div className="flex justify-between items-start mt-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/assets/avatar.png"
            alt="Avatar"
            width={450}
            height={450}
          />
        </motion.div>
        <motion.div
          className="p-3 border-2 border-red-600 rounded-3xl w-5/7 h-[450px] ml-12 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {/* Tabs */}
          <div
            className="flex space-x-6 border border-red-500 p-2"
            style={{ borderRadius: "50px" }}
          >
            {aboutMeTabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center cursor-pointer border rounded-full px-4 py-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white border-transparent"
                    : "bg-white text-red-500 border-red-500"
                }`}
              >
                {/* Circle Icon */}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-blue-700"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {tab.icon}
                </div>
                {/* Tab Label */}
                <p className="font-semibold text-lg">{tab.label}</p>
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8 w-full h-[300px] max-w-2xl border border-gray-300 rounded-lg p-4 bg-gray-200">
            <AnimatePresence mode="wait">
              {aboutMeTabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-gray-700 flex flex-col"
                    >
                      {tab.content}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
