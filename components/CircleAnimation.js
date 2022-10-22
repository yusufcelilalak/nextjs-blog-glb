import styles from "./CircleAnimation.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const CircleAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      opacity: 0.5,
      borderRadius: "50%",
      width: "3rem",
      height: "3rem",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
    visible: {
      opacity: 1,
      borderRadius: "2%",
      width: "100%",
      height: "100%",
      transition: {
        type: "spring",
        stiffness: 10,
        damping: 5,
        when: "beforeChildren",
        delayChildren: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.circle}
        variants={circleVariants}
        whileHover={{
          opacity: 1,
          scale: 1.01,
          cursor: "pointer",
        }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <motion.div className={styles.content} variants={contentVariants}>
          {isOpen && (
            <>
              <h2>glb.</h2>
              <div>
                A new approach to the blogs. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi non quam quis mi bibendum
                dignissim et eu enim. Praesent vulputate erat vitae nulla
                viverra luctus. Fusce lacinia rutrum quam pulvinar commodo.
                Pellentesque consectetur velit a dapibus commodo. Nullam tempor
                lacus id semper egestas. Maecenas mattis placerat dui molestie
                interdum. Nam facilisis lorem vitae ullamcorper accumsan.
                Vivamus eu nulla ante. Quisque eu libero sed neque viverra
                iaculis. Donec eleifend risus nec sapien condimentum mattis.
                Nulla sed lectus ullamcorper, ultrices nunc at, dapibus velit.
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircleAnimation;
