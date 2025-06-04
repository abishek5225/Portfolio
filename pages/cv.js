import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mechi Multiple Campus",
    year: "2021 - Present",
  },
  {
    degree: "Senior High",
    institution: "Himalayan English Academy",
    year: "2019 - 2021",
  },
  {
    degree: "High School",
    institution: "Parijat Public School",
    year: "2019",
  },
];

const interests = [
  "Always excited to explore emerging technologies and their impact on the world",
  "Neuroscience – Curious about how the human brain works",
];

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <Navbar />

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

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:px-8 flex flex-col items-start">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg"
          >
            <p className="text-xl md:text-2xl text-indigo-100">
              Full-Stack Developer with a passion for creating impactful digital
              experiences
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#summary"
                className="px-6 py-3 rounded-full bg-white text-indigo-900 font-medium tracking-wide hover:bg-opacity-90 transition-all shadow-lg"
              >
                Explore Profile
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

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

      {/* Professional Summary Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20"
        id="summary"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <h2 className="text-3xl font-bold text-gray-900 inline-flex items-center">
              <span className="relative">
                Professional Summary
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
                Passionate about problem-solving, performance optimization, and
                responsive design, with a keen eye for detail and a commitment
                to delivering high-quality projects.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Currently enhancing expertise in new technologies and advanced
                back-end systems. Open to exciting projects and collaborations.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-3">
              EXPERTISE
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Technical Proficiency
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6"></div>
          </motion.div>

          <Skills />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-3">
              EDUCATION
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Academic Background
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>

            <div className="space-y-12 relative">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative md:w-1/2 md:ml-auto md:mr-0 md:pl-8 md:pr-0 md:even:ml-0 md:even:mr-auto md:even:pl-0 md:even:pr-8"
                  style={{ marginLeft: index % 2 === 0 ? "0" : "auto" }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                    {/* Circle on timeline */}
                    <div className="absolute top-6 left-0 w-6 h-6 bg-indigo-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>

                    <div className="mb-1 text-indigo-500 font-medium">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interest Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-3">
              INTERESTS
            </span>
            <h2 className="text-4xl font-bold text-gray-900">What Drives Me</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="h-3 bg-indigo-500"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">{interest}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}

      
    </div>
  );
};

export default CV;
