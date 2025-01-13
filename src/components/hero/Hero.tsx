"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div
            className="flex justify-between items-center h-screen p-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-1/2 justify-center">
                <motion.h1
                    className="text-2xl font-bold"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi everyone, welcome to my Portfolio page!
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Hero;