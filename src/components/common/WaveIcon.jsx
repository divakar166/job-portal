import { motion } from "framer-motion";

const WaveIcon = () => {
  return (
    <motion.div
      initial={{ rotate: 0, scale: 1 }}
      animate={{
        rotate: [0, 15, -15, 15, -15, 0], // Keyframes for waving
      }}
      transition={{
        duration: 1.5, // Duration of the entire wave animation
        ease: "easeInOut", // Smooth easing
      }}
    >
      <div className="w-6 h-6 flex justify-center items-baseline">
        <img src="/handWave.svg" height={20} width={20} alt="hand" />
      </div>
    </motion.div>
  );
};

export default WaveIcon;
