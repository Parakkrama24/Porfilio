import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf"; // Replace with the actual path to your CV
    link.download = "Parakkrama_CV.pdf";
    link.click();
  };

  const getImageUrl = (imagePath) => {
    return `/assets/${imagePath}`; // Adjust the path to your project structure
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center p-8 md:flex-row md:text-left md:justify-between md:p-12">
      {/* Hero Image */}
      <div className="flex justify-center items-center md:w-1/2 mb-8 md:mb-0">
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className="w-40 h-40 rounded-full object-cover md:w-60 md:h-60 lg:w-72 lg:h-72"
        />
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center md:items-start md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl text-white text-center md:text-left">
          Hi, I'm Parakkrama
        </h1>
        <h3 className="font-bold mb-4 text-white text-center md:text-left">I'm a</h3>
        <div className="relative h-12 md:h-16 text-center md:text-left">
          {/* Typing Effect */}
          <span className="text-lg md:text-xl text-white">
            <Typewriter
              words={["Game Developer", "Web Developer", "Mobile Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className="text-lg mb-6 md:text-2xl text-white text-center md:text-left">
          with 3 years of experience using Unity Engine and C#. Reach out if you'd like to learn more!
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center md:flex-row">
          <a
            href="mailto:parakkramadasanayaka.2@gmail.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 md:mb-0 md:mr-4 hover:bg-blue-600 text-center"
          >
            Contact Me
          </a>
          <button
            onClick={downloadCv}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-center"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-xl md:w-64 md:h-64"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-xl md:w-48 md:h-48"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </section>
  );
};
