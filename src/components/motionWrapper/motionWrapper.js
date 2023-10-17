/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const blocksAnimation = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: (custom = 1) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.3
      }
    })
};

const MotionWrapper = ({ children, custom })  => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.05, once: true }}
            custom={custom}
            variants={blocksAnimation}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;