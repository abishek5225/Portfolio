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
              {/*
              
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-indigo-900 font-medium tracking-wide hover:bg-opacity-90 transition-all shadow-lg"
                whileHover="hover"
                variants={buttonVariants}
              >
                View Projects
              </motion.a>
              
              */}
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-24 bg-indigo-900 text-white"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with fellow innovators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              href="https://github.com/abishek5225"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-indigo-200 text-sm">View my projects</p>
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              href="https://x.com/Abishek_098"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Twitter</h3>
              <p className="text-indigo-200 text-sm">Follow me</p>
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              href="https://www.facebook.com/abishek.chaulagain5225"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Facebook</h3>
              <p className="text-indigo-200 text-sm">Connect with me</p>
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              href="mailto:abishek@example.com"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-indigo-200 text-sm">Get in touch</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-indigo-200 text-lg">
              © 2024 Abishek Chaulagain. Crafted with ❤️ and lots of ☕
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Homebody;
