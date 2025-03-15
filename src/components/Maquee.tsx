import React from 'react';
import { motion } from 'framer-motion';
import { wallet } from '../constant/Index';

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex mx-auto w-full">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        
        {[...wallet, ...wallet, ...wallet].map((img, index) => (
          <img src={img} alt="wallet" key={index} className="w-15 p-1" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
