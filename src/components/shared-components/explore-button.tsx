import { AiFillForward } from "react-icons/ai";
import { motion } from "framer-motion";

export const ExploreButton = () => {
  return (
    <motion.button
      className="bg-red-600 flex justify-between items-center text-center text-xl space-x-3 text-white font-semibold py-3 px-5 mt-6 ml-16"
      style={{ borderRadius: "24px" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{
        scale: 1.01,
        color: "#E6212B",
        backgroundColor: "white",
        border: "1px solid #E6212B",
      }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      name="Explore"
    >
      <p>Explore</p>
      <AiFillForward />
    </motion.button>
  );
};
