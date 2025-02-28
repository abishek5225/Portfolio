import React from "react";
import { motion } from "framer-motion";

const Homebody = () => {
  // Main text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Name animation variants
  const nameVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Skills pill animation variants
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4 + custom * 0.1,
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Skills array to display as pills
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Tailwind CSS",
    "Full Stack",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-indigo-900 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/api/placeholder/400/320')] bg-repeat opacity-10"></div>
          <div className="absolute -inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-indigo-900 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Text Content - Left Side */}
          <div className="md:w-1/2 space-y-8 mb-12 md:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-900 bg-indigo-100 rounded-full mb-3">
                WELCOME
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              I'm{" "}
              <motion.span
                className="text-indigo-300"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                Abishek Chaulagain
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-indigo-100"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Full-Stack Developer with a passion for creating impactful digital
              experiences
            </motion.p>

            

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-indigo-900 font-medium tracking-wide hover:bg-opacity-90 transition-all shadow-lg"
                whileHover="hover"
                variants={buttonVariants}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:bg-opacity-10 transition-all"
                whileHover="hover"
                variants={buttonVariants}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Image - Right Side */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full opacity-20"></div>

              {/* Main profile image */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/img3.JPG"
                  alt="Abishek Chaulagain"
                  className="w-64 md:w-80 h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(249, 250, 251)"
              fillOpacity="1"
              d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,42.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Brief intro section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 relative text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 inline-flex items-center justify-center">
              <span className="relative">
                About Me
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-500"></span>
              </span>
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-100 rounded-full opacity-70"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-indigo-100 rounded-full opacity-70"></div>

            <div className="space-y-6 relative">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Results-driven Full-Stack Developer with 3+ years of experience
                in designing, developing, and maintaining scalable web
                applications. Proficient in React.js, Node.js, Express.js,
                MySQL, and Tailwind CSS, with a strong focus on creating
                efficient, secure, and user-friendly solutions.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Currently enhancing expertise in new technologies and advanced
                back-end systems. Open to exciting projects and collaborations.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <a
                  href="/cv"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Full CV
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Homebody;
