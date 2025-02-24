import React from "react";
import { motion } from "framer-motion";

const Homebody = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold tracking-tight"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              I'm{" "}
              <motion.span
                className="text-black"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                Abishek Chaulagain
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl text-gray-700"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              A{" "}
              <motion.span
                className="bg-yellow-200 text-black px-2 py-1 rounded-md inline-block"
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
              >
                Tech enthusiast
              </motion.span>{" "}
              and Full Stack Developer.
            </motion.p>

            <motion.div
              className="space-y-3"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl lg:text-3xl font-light leading-relaxed">
                Looking <span className="italic">for</span> my next
                <span className="font-bold"> opportunity</span> to make a{" "}
                <span className="font-bold">change</span>.
              </h2>
              <motion.p
                className="text-2xl lg:text-3xl font-bold text-yellow-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                The digital way.
              </motion.p>
            </motion.div>
          </div>

          {/* Image - Right Side */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/img3.JPG"
                alt="Abishek Chaulagain"
                className="w-64 lg:w-96 h-auto rounded-lg shadow-xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
