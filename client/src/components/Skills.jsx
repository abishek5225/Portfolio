import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  
  { name: "Database", icon: <FaDatabase className="text-purple-500" /> },
  { name: "C#", icon: <TbBrandCSharp className="text-blue-700" /> },
];
function Skills() {
  return (
     <section className="py-10 h-auto bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-gray-700 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills