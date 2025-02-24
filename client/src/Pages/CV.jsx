import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Navbar";
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
};

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Nav />

      {/* Header Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-50 py-12"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 transform -skew-y-6" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900">CV</h1>
          </div>
        </div>
      </motion.div>

      {/* Professional Summary Section */}
      <motion.section {...fadeIn} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...slideIn} className="text-4xl font-bold mb-8">
            <span className="text-gray-900">Professional</span>
            <span className="text-gray-600"> Summary</span>
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              {...fadeIn}
              className="text-gray-700 text-lg leading-relaxed"
            >
              Results-driven Full-Stack Developer with 3+ years of experience in
              designing, developing, and maintaining scalable web applications.
              Proficient in React.js, Node.js, Express.js, MySQL, and Tailwind
              CSS, with a strong focus on creating efficient, secure, and
              user-friendly solutions.
            </motion.p>

            <motion.p
              {...fadeIn}
              className="text-gray-700 text-lg leading-relaxed"
            >
              Passionate about problem-solving, performance optimization, and
              responsive design, with a keen eye for detail and a commitment to
              delivering high-quality projects.
            </motion.p>

            <motion.p
              {...fadeIn}
              className="text-gray-700 text-lg leading-relaxed"
            >
              Currently enhancing expertise in new technologies and advanced
              back-end systems. Open to exciting projects and collaborations.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section {...fadeIn} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...slideIn} className="relative mb-12">
            <div className="absolute inset-0 bg-yellow-300 transform -skew-y-3" />
            <h2 className="relative text-4xl font-bold py-8 px-8">Skills</h2>
          </motion.div>
          <Skills />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...slideIn} className="relative mb-12">
            <div className="absolute inset-0 bg-yellow-300 transform -skew-y-3" />
            <h2 className="relative text-4xl font-bold py-8 px-8">Education</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mb-1">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interest Section */}
      <motion.section {...fadeIn} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...slideIn} className="relative mb-12">
            <div className="absolute inset-0 bg-yellow-300 transform -skew-y-3" />
            <h2 className="relative text-4xl font-bold py-8 px-8">Interests</h2>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>
                  Always excited to explore emerging technologies and their
                  impact on the world
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>
                  Neuroscience – Curious about how the human brain works
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CV;
