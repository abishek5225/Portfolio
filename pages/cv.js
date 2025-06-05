import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import { FaDownload, FaUser, FaGraduationCap, FaHeart, FaBriefcase, FaCode, FaAward } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mechi Multiple Campus",
    year: "2021 - Present",
    description: "Focused on software development, database management, and web technologies.",
    icon: <FaGraduationCap className="text-indigo-500" />,
  },
  {
    degree: "Senior High School",
    institution: "Himalayan English Academy",
    year: "2019 - 2021",
    description: "Completed with distinction in Science stream with focus on Mathematics and Computer Science.",
    icon: <FaGraduationCap className="text-blue-500" />,
  },
  {
    degree: "High School",
    institution: "Parijat Public School",
    year: "2019",
    description: "Foundation in core subjects with early exposure to computer programming.",
    icon: <FaGraduationCap className="text-green-500" />,
  },
];

const interests = [
  {
    title: "Emerging Technologies",
    description: "Always excited to explore emerging technologies and their impact on the world",
    icon: <FaCode className="text-indigo-500" />,
  },
  {
    title: "Neuroscience",
    description: "Curious about how the human brain works and its applications in AI",
    icon: <FaHeart className="text-red-500" />,
  },
];

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2021 - Present",
    description: "Developing web applications using React.js, Node.js, and modern technologies. Focus on creating responsive, user-friendly interfaces and robust backend systems.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Web Developer",
    company: "Personal Projects",
    period: "2020 - 2021",
    description: "Built various personal projects to enhance skills in web development, including portfolio websites and small business applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const CV = () => {
  return (
    <>
      <Head>
        <title>CV - Abishek Chaulagain | Full-Stack Developer</title>
        <meta name="description" content="Comprehensive CV of Abishek Chaulagain - Full-Stack Developer with expertise in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="CV, Resume, Full-Stack Developer, React, Node.js, Web Development, JavaScript, Portfolio, Experience" />
        <meta name="author" content="Abishek Chaulagain" />
        <meta property="og:title" content="CV - Abishek Chaulagain | Full-Stack Developer" />
        <meta property="og:description" content="Comprehensive CV showcasing experience, skills, and education in web development" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-neutral-0 via-neutral-50 to-brand-50 font-sans">
        <Navbar />

      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-brand-900 text-white"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-300 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-accent-300 rounded-full opacity-40 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text content */}
            <div className="md:w-2/3 space-y-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 text-sm font-medium text-neutral-900 bg-brand-100 rounded-full mb-4">
                  <FaUser className="inline mr-2" />
                  CURRICULUM VITAE
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">
                  Abishek Chaulagain
                </h1>
                <p className="text-xl md:text-2xl text-brand-100 mb-6">
                  Full-Stack Developer & Technology Enthusiast
                </p>
                <p className="text-lg text-brand-200 max-w-2xl">
                  Passionate about creating impactful digital experiences through innovative web solutions and cutting-edge technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#summary"
                  className="px-6 py-3 rounded-full bg-white text-neutral-900 font-medium tracking-wide hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaBriefcase className="inline mr-2" />
                  Explore Profile
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-full bg-warning-500 border-2 border-warning-500 text-white font-medium tracking-wide hover:bg-warning-600 hover:border-warning-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaDownload className="inline mr-2" />
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Right side - Profile image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/3 mt-8 md:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full opacity-30 blur-lg"></div>
                <div className="relative w-64 h-64 mx-auto">
                  <img
                    src="/images/img3.JPG"
                    alt="Abishek Chaulagain"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(249, 250, 251)" />
                <stop offset="50%" stopColor="rgb(239, 246, 255)" />
                <stop offset="100%" stopColor="rgb(249, 250, 251)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,42.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Enhanced Professional Summary Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 relative"
        id="summary"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-brand-800 bg-brand-100 rounded-full mb-4">
              <FaUser className="inline mr-2" />
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Summary content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-brand-100">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-brand-100 to-accent-100 rounded-full opacity-70"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-br from-accent-100 to-brand-100 rounded-full opacity-70"></div>

                <div className="space-y-6 relative">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-neutral-700 text-lg leading-relaxed"
                  >
                    Results-driven <span className="font-semibold text-brand-600">Full-Stack Developer</span> with 3+ years of experience
                    in designing, developing, and maintaining scalable web
                    applications. Proficient in React.js, Node.js, Express.js,
                    MySQL, and Tailwind CSS.
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-neutral-700 text-lg leading-relaxed"
                  >
                    Passionate about <span className="font-semibold text-accent-600">problem-solving</span>, performance optimization, and
                    responsive design, with a keen eye for detail and a commitment
                    to delivering high-quality projects.
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-neutral-700 text-lg leading-relaxed"
                  >
                    Currently enhancing expertise in <span className="font-semibold text-success-600">new technologies</span> and advanced
                    back-end systems. Open to exciting projects and collaborations.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Stats and highlights */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">8+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="bg-gradient-to-br from-warning-500 to-warning-600 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Core Competencies</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    <span className="text-neutral-700">Full-Stack Web Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-neutral-700">Responsive UI/UX Design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                    <span className="text-neutral-700">Database Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-warning-500 rounded-full mr-3"></div>
                    <span className="text-neutral-700">API Development & Integration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-neutral-50 to-brand-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-brand-800 bg-brand-100 rounded-full mb-4">
              <FaBriefcase className="inline mr-2" />
              EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-brand-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-brand-500 to-accent-600 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-brand-800 bg-brand-100 rounded-full mb-4">
              <FaCode className="inline mr-2" />
              EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Technical Proficiency
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto"></div>
            <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-3xl p-8 shadow-xl border border-brand-100">
            <Skills />
          </div>
        </div>
      </motion.section>

      {/* Enhanced Education Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-neutral-50 to-accent-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-brand-800 bg-brand-100 rounded-full mb-4">
              <FaGraduationCap className="inline mr-2" />
              EDUCATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Academic Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto"></div>
            <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
              My educational foundation that shaped my technical expertise and problem-solving abilities.
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-300 via-accent-300 to-success-300 hidden md:block rounded-full"></div>

            <div className="space-y-12 relative">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative md:w-1/2 ${
                    index % 2 === 0
                      ? "md:ml-0 md:mr-auto md:pr-8"
                      : "md:ml-auto md:mr-0 md:pl-8"
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 group hover:scale-105">
                    {/* Enhanced Circle on timeline */}
                    <div className="absolute top-8 left-0 w-12 h-12 bg-gradient-to-br from-brand-500 to-accent-600 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white text-lg">
                        {edu.icon}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-brand-100 to-accent-100 text-brand-700 font-medium rounded-full text-sm">
                          {edu.year}
                        </span>
                        <div className="md:hidden text-2xl">
                          {edu.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-brand-600 transition-colors">
                        {edu.degree}
                      </h3>

                      <p className="text-lg text-brand-600 font-medium">
                        {edu.institution}
                      </p>

                      <p className="text-neutral-600 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-brand-400 to-accent-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-accent-400 to-brand-500 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Interests Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-success-800 bg-success-100 rounded-full mb-4">
              <FaHeart className="inline mr-2" />
              INTERESTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              What Drives Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-success-500 to-brand-500 mx-auto"></div>
            <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
              Beyond coding, these are the passions and interests that fuel my creativity and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 group-hover:scale-105">
                  <div className="h-2 bg-gradient-to-r from-success-500 via-brand-500 to-accent-500"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success-100 to-brand-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl">
                        {interest.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-brand-600 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-brand-400 to-accent-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-success-400 to-brand-500 rounded-full opacity-15 group-hover:opacity-25 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-neutral-900 via-brand-900 to-accent-900 text-white relative overflow-hidden"
        id="contact"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent-400 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-success-400 rounded-full opacity-20 animate-ping"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-brand-200 max-w-3xl mx-auto leading-relaxed">
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
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
    </>
  );
};

export default CV;
