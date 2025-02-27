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

const interests = [
  "Always excited to explore emerging technologies and their impact on the world",
  "Neuroscience – Curious about how the human brain works",
];

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <Nav />

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
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out for
              collaborations or just a friendly chat.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* GitHub */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                href="https://github.com/abishek5225"
                className="flex items-center p-4 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-indigo-400 text-sm">GitHub</div>
                  <div className="font-medium text-indigo-500">
                    View my projects
                  </div>
                </div>
              </motion.a>

              {/* X (Twitter) */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                href="https://x.com/Abishek_098"
                className="flex items-center p-4 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div>
                  <div className="text-indigo-400 text-sm">X</div>
                  <div className="font-medium text-indigo-500">Follow me</div>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                href="https://www.facebook.com/abishek.chaulagain5225"
                className="flex items-center p-4 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-400 text-sm">Facebook</div>
                  <div className="font-medium text-blue-500">Follow me</div>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                href="https://x.com/Abishek_098"
                className="flex items-center p-4 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <div className="text-pink-400 text-sm">Instagram</div>
                  <div className="font-medium text-pink-500">Follow me</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} | Full-Stack Developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CV;
