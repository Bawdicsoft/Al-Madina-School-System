import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export const Button = ({ link, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
      transition={{ type: "spring", stiffness: 100, damping: 40 }}
    >
      <Link
        href={link}
        className="bg-yellow-400 uppercase py-4 hover:scale-105 transition duration-1000 px-8 rounded-lg font-bold"
      >
        {title}
      </Link>
    </motion.div>
  );
};
