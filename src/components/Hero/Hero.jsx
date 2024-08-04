import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import downloadCv from "../otherOptions/downloadCv.jsx";
import { getImageUrl } from "../../utils";

const circleVariants = {
  initial: { opacity: 0, scale: 0.8, x: -20, y: -20 },
  animate: {
    opacity: 0.5,
    scale: [0.8, 1.2, 0.8],
    x: [0, 30, 0, -30, 0],
    y: [0, 30, 0, -30, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
};

const specializations = [
  "game developer",
  "mobile developer",
  "VR developer",
  "AR developer",
  "web developer",
  "engineering undergraduate"
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const specialization = specializations[currentIndex];
    const typingSpeed = 200; // Typing speed in milliseconds
    const deletingSpeed = 50; // Deleting speed in milliseconds
    let typingTimeout;
    let deletingTimeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        deletingTimeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        // Move to the next specialization after a short pause
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % specializations.length);
        }, 500); // Pause before starting to type the next text
      }
    } else {
      if (displayText.length < specialization.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText((prev) => specialization.slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        setIsDeleting(true);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center p-8 md:flex-row md:text-left md:justify-between md:p-12">
      <div className="flex justify-center items-center md:w-1/2 mb-8 md:mb-0">
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className="w-40 h-40 rounded-full object-cover md:w-60 md:h-60 lg:w-72 lg:h-72"
        />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl text-white">Hi, I'm Parakkrama</h1>
        <h3 className="font-bold mb-4 text-white">I'm a</h3>

        <div className="relative h-12 md:h-16">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-lg md:text-xl text-white whitespace-nowrap absolute inset-0 flex items-center justify-center"
          >
            {displayText}
          </motion.div>
        </div>

        <p className="text-lg mb-6 md:text-xl text-white">
          with 3 years of experience using Unity Engine and C#. Reach out if you'd like to learn more!
        </p>

        <div className="flex flex-col items-center md:flex-row">
          <a
            href="mailto:parakkramadasanayaka.2@gmail.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-blue-600"
          >
            Contact Me
          </a>
          <button
            onClick={downloadCv}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            Download CV
          </button>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-xl md:w-64 md:h-64"
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-xl md:w-48 md:h-48"
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
    </section>
  );
};
