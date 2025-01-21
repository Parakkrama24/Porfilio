import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf"; // Replace with the actual path to your CV
    link.download = "ParakkramaDasanayaka.pdf";
    link.click();
  };

  const getImageUrl = (imagePath) => {
    return `/assets/${imagePath}`; // Adjust the path to your project structure
  };

  return (
    <section className="relative flex flex-col items-center justify-center p-8 text-center md:flex-row md:text-left md:justify-between md:p-12">
      {/* Hero Image */}
      <div className="flex items-center justify-center mb-8 md:w-1/2 md:mb-3">
        <img
          src={getImageUrl("hero/hero.jpg")}
          alt="Hero image of me"
          className="object-cover w-40 h-40 rounded-full md:w-60 md:h-60 lg:w-72 lg:h-72"
        />
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center md:items-start md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold text-center text-white md:text-6xl md:text-left">
          Hi, I'm Parakkrama
        </h1>
        <h3 className="mb-4 font-bold text-center text-white md:text-left">I'm a</h3>
        <div className="relative h-12 text-center md:h-16 md:text-left">
          {/* Typing Effect */}
          <span className="text-lg text-white md:text-xl">
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
        <p className="mb-6 text-lg text-center text-white md:text-2xl md:text-left">
          with 3 years of experience using Unity Engine and C#. Reach out if you'd like to learn more!
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center md:flex-row">
          <a
            href="mailto:parakkramadasanayaka.2@gmail.com"
            className="px-4 py-2 mb-4 text-center text-white bg-blue-500 rounded-full md:mb-0 md:mr-4 hover:bg-blue-600"
          >
            Contact Me
          </a>
          <button
            onClick={downloadCv}
            className="px-4 py-2 text-center text-white bg-green-500 rounded-full hover:bg-green-600"
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
