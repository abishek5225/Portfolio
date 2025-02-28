import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// Import React Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaTools,
  FaLayerGroup,
  FaServer,
  FaJs,
  
} from "react-icons/fa";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";


// Define skills with proper data and categories
const skills = [
  {
    name: "React",
    level: 90,
    category: "frontend",
    description: "Building interactive UIs with React and its ecosystem",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    name: "Node.js",
    level: 85,
    category: "backend",
    description: "Server-side JavaScript for scalable applications",
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    name: "Express",
    level: 80,
    category: "backend",
    description: "Fast, unopinionated web framework for Node.js",
    icon: <SiExpress className="text-gray-700" />,
  },
  {
    name: "MySQL",
    level: 75,
    category: "database",
    description: "Relational database management system",
    icon: <DiMysql className="text-blue-800" />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "frontend",
    description: "Utility-first CSS framework for rapid UI development",
    icon: <SiTailwindcss className="text-blue-400" />,
  },
  {
    name: "HTML5",
    level: 95,
    category: "frontend",
    description: "Structure and semantic markup for modern web",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    level: 90,
    category: "frontend",
    description: "Styling and layout for responsive designs",
    icon: <FaCss3Alt className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "language",
    description: "Core language for web and application development",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "Git",
    level: 80,
    category: "tools",
    description: "Version control system for team collaboration",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "Java",
    level: 80,
    category: "language",
    description: "Object-oriented programming for enterprise apps",
    icon: <FaJava className="text-red-700" />,
  },
  {
    name: "Csharp",
    level: 85,
    category: "language",
    description: "Object-oriented programming ",
  },
  {
    name: "C",
    level: 80,
    category: "language",
    description: "A procedural language",
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "database",
    description: "Advanced open source relational database",
    icon: <DiPostgresql className="text-blue-600" />,
  },
];

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {});

// Category information with icons
const categories = {
  frontend: {
    name: "Frontend",
    color: "blue",
    icon: <FaLayerGroup className="w-5 h-5" />,
  },
  backend: {
    name: "Backend",
    color: "green",
    icon: <FaServer className="w-5 h-5" />,
  },
  database: {
    name: "Database",
    color: "purple",
    icon: <FaDatabase className="w-5 h-5" />,
  },
  language: {
    name: "Languages",
    color: "yellow",
    icon: <FaCode className="w-5 h-5" />,
  },
  tools: { name: "Tools", color: "red", icon: <FaTools className="w-5 h-5" /> },
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);

  // Get proper color based on skill category
  const getCategoryColor = (category) => {
    const colorMap = {
      frontend: {
        bg: "bg-blue-500",
        bgLight: "bg-blue-100",
        border: "border-blue-300",
        text: "text-blue-800",
        hover: "hover:bg-blue-600",
      },
      backend: {
        bg: "bg-green-500",
        bgLight: "bg-green-100",
        border: "border-green-300",
        text: "text-green-800",
        hover: "hover:bg-green-600",
      },
      database: {
        bg: "bg-purple-500",
        bgLight: "bg-purple-100",
        border: "border-purple-300",
        text: "text-purple-800",
        hover: "hover:bg-purple-600",
      },
      language: {
        bg: "bg-yellow-500",
        bgLight: "bg-yellow-100",
        border: "border-yellow-300",
        text: "text-yellow-800",
        hover: "hover:bg-yellow-600",
      },
      tools: {
        bg: "bg-red-500",
        bgLight: "bg-red-100",
        border: "border-red-300",
        text: "text-red-800",
        hover: "hover:bg-red-600",
      },
    };
    return (
      colorMap[category] || {
        bg: "bg-gray-500",
        bgLight: "bg-gray-100",
        border: "border-gray-300",
        text: "text-gray-800",
        hover: "hover:bg-gray-600",
      }
    );
  };

  // Handle filter change
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSkill(null); // Reset selected skill when changing category
  };

  // Handle skill selection
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Get level description based on percentage
  const getLevelDescription = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  // Filter skills based on selected category
  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My expertise spans across various technologies in web development,
            programming languages, and databases.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all 
                ${
                  selectedCategory === category
                    ? getCategoryColor(category).bg + " text-white"
                    : "bg-white border " +
                      getCategoryColor(category).border +
                      " " +
                      getCategoryColor(category).text
                }
                ${getCategoryColor(category).hover}`}
            >
              <span className="text-lg">{categories[category].icon}</span>
              <span>{categories[category].name}</span>
            </button>
          ))}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            >
              Show All
            </button>
          )}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all hover:shadow-md
                ${
                  selectedSkill === skill
                    ? getCategoryColor(skill.category).bgLight
                    : "bg-white"
                }
                ${getCategoryColor(skill.category).border}`}
              onClick={() => handleSkillClick(skill)}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{skill.name}</h3>
                  <span
                    className={`text-sm ${
                      getCategoryColor(skill.category).text
                    }`}
                  >
                    {getLevelDescription(skill.level)}
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div
                  className={`h-2.5 rounded-full ${
                    getCategoryColor(skill.category).bg
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {selectedSkill === skill && (
                <motion.div
                  className="mt-3 text-sm text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p>{skill.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Category Section */}
        {!selectedCategory && (
          <div className="mt-16">
            {Object.keys(categories).map((category) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-lg ${getCategoryColor(category).text}`}
                  >
                    {categories[category].icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {categories[category].name}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedSkills[category]?.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-lg border ${
                        getCategoryColor(category).border
                      } bg-white shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-xl">{skill.icon}</div>
                        <h4 className="font-medium text-gray-800">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${
                            getCategoryColor(category).bg
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
