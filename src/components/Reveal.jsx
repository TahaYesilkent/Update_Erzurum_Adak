import React from "react";

import { motion } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
  y = 40,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;