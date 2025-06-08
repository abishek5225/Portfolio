import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import { FaDownload, FaUser, FaGraduationCap, FaHeart, FaBriefcase, FaCode } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mechi Multiple Campus",
    year: "2021 - Present",
    description: "Focused on software development, database management, and web technologies.",
  },
  {
    degree: "Senior High School",
    institution: "Himalayan English Academy",
    year: "2019 - 2021",
    description: "Completed with distinction in Science stream with focus on Mathematics and Computer Science.",
  },
  {
    degree: "High School",
    institution: "Parijat Public School",
    year: "2019",
    description: "Foundation in core subjects with early exposure to computer programming.",
  },
];

const interests = [
  {
    title: "Emerging Technologies",
    description: "Always excited to explore emerging technologies.",
    icon: <FaCode className="text-indigo-500" />,
  },
  {
    title: "Neuroscience",
    description: "Curious about how the human brain works.",
    icon: <FaCircleCheck className="text-indigo-500" />,
  },
];

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2021 - Present",
    description: "Developing web applications using React.js,Next.js, Node.js, and modern technologies. Focus on creating responsive, user-friendly interfaces and robust backend systems.",
    technologies: ["React.js","Next.js" ,"Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Web Developer",
    company: "Personal Projects",
    period: "2020 - 2021",
    description: "Built various personal projects to enhance skills in web development.",
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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
        <Navbar />

        {/* Clean Hero Section */}
        <div className="relative overflow-hidden bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side - Text content */}
              <div className="md:w-2/3 space-y-6">
                <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 rounded-full">
                  <FaUser className="inline mr-2" />
                  CURRICULUM VITAE
                </span>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Abishek Chaulagain
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100">
                  Full-Stack Developer & Technology Enthusiast
                </p>
                <p className="text-lg text-indigo-200 max-w-2xl">
                  Passionate about creating impactful digital experiences through innovative web solutions and cutting-edge technologies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#summary"
                    className="px-6 py-3 rounded-lg bg-white text-indigo-900 font-medium hover:bg-gray-100 transition-colors"
                  >
                    <FaBriefcase className="inline mr-2" />
                    View Profile
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    <FaDownload className="inline mr-2" />
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right side - Profile image */}
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="relative w-64 h-64 mx-auto">
                  <img
                    src="img3.JPG"
                    alt="Abishek Chaulagain"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
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
        </div>

        {/* Professional Summary Section */}
        <section className="py-20" id="summary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-4">
                <FaUser className="inline mr-2" />
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Summary
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Summary content */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Results-driven <span className="font-semibold text-indigo-600">Full-Stack Developer</span> with 3+ years of experience
                      in designing, developing, and maintaining scalable web
                      applications. Proficient in React.js, Node.js, Express.js,
                      MySQL, and Tailwind CSS.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Passionate about <span className="font-semibold text-indigo-600">problem-solving</span>, performance optimization, and
                      responsive design, with a keen eye for detail and a commitment
                      to delivering high-quality projects.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Currently enhancing expertise in <span className="font-semibold text-indigo-600">new technologies</span> and advanced
                      back-end systems. Open to exciting projects and collaborations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Stats and highlights */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-indigo-500 rounded-xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-indigo-600 rounded-xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="bg-indigo-700 rounded-xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <div className="text-sm opacity-90">Technologies</div>
                  </div>
                  <div className="bg-indigo-800 rounded-xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Competencies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Full-Stack Web Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Responsive UI/UX Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Database Management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">API Development & Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-4">
                <FaBriefcase className="inline mr-2" />
                EXPERIENCE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Journey
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-lg text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-4">
                <FaCode className="inline mr-2" />
                EXPERTISE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technical Proficiency
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-indigo-100">
              <Skills />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-4">
                <FaGraduationCap className="inline mr-2" />
                EDUCATION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Academic Journey
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                My educational foundation that shaped my technical expertise and problem-solving abilities.
              </p>
            </div>

            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300 hidden md:block rounded-full"></div>

              <div className="space-y-12 relative">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative md:w-1/2 ${
                      index % 2 === 0
                        ? "md:ml-0 md:mr-auto md:pr-8"
                        : "md:ml-auto md:mr-0 md:pl-8"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                      {/* Circle on timeline */}
                      <div className="absolute top-8 left-0 w-12 h-12 bg-indigo-500 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg">
                        <FaGraduationCap className="text-white text-lg" />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-medium rounded-full text-sm">
                            {edu.year}
                          </span>
                          <div className="md:hidden text-2xl">
                            <FaGraduationCap className="text-indigo-500" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>

                        <p className="text-lg text-indigo-600 font-medium">
                          {edu.institution}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full mb-4">
                <FaHeart className="inline mr-2" />
                INTERESTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Drives Me
              </h2>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                      <div className="text-2xl">
                        {interest.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CV;
