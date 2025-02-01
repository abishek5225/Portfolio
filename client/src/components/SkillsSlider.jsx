import React from 'react'

function SkillsSlider() {
  return (
    <div className="relative w-full h-40 overflow-hidden  flex items-center">
      <div className=" whitespace-nowrap flex space-x-6 animate-marquee">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">React.js</span>
        <span className="bg-green-500 text-white px-4 py-2 rounded-lg">Tailwind CSS</span>
        <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg">JavaScript</span>
        <span className="bg-purple-500 text-white px-4 py-2 rounded-lg">Node.js</span>
        <span className="bg-red-500 text-white px-4 py-2 rounded-lg">C#</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default SkillsSlider