import React, { useEffect, useRef } from "react";

// Define skills with proper data and categories
const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "language" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Java", level: 70, category: "language" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "C#", level: 65, category: "language" },
];

function Skills() {
  // References for the skill sliders
  const sliderRow1Ref = useRef(null);
  const sliderRow2Ref = useRef(null);

  // Get proper color based on skill category
  const getCategoryColor = (category) => {
    const colorMap = {
      frontend: "bg-blue-100 border-blue-300 text-blue-800",
      backend: "bg-green-100 border-green-300 text-green-800",
      database: "bg-purple-100 border-purple-300 text-purple-800",
      language: "bg-yellow-100 border-yellow-300 text-yellow-800",
      tools: "bg-red-100 border-red-300 text-red-800",
    };
    return colorMap[category] || "bg-gray-100 border-gray-300 text-gray-800";
  };

  // Get correct logo URL for each skill
  const getLogoUrl = (skill) => {
    const logoMap = {
      React:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Node.js":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      Express:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      MySQL:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "Tailwind CSS":
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      HTML5:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      JavaScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      PostgreSQL:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    };

    return logoMap[skill] || `/api/placeholder/40/40`;
  };

  useEffect(() => {
    // Animation function to continuously move the sliders
    const animateSliders = () => {
      if (sliderRow1Ref.current) {
        sliderRow1Ref.current.scrollLeft += 0.5;
        // Reset position when it reaches the end
        if (
          sliderRow1Ref.current.scrollLeft >=
          sliderRow1Ref.current.scrollWidth / 2
        ) {
          sliderRow1Ref.current.scrollLeft = 0;
        }
      }

      if (sliderRow2Ref.current) {
        sliderRow2Ref.current.scrollLeft -= 0.5;
        // Reset position when it reaches the beginning
        if (sliderRow2Ref.current.scrollLeft <= 0) {
          sliderRow2Ref.current.scrollLeft =
            sliderRow2Ref.current.scrollWidth / 2;
        }
      }

      requestAnimationFrame(animateSliders);
    };

    // Start the animation
    const animationId = requestAnimationFrame(animateSliders);

    // Clean up the animation on component unmount
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-[#F9FBFA] text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
            Expertise
          </span>
          <h2 className="text-4xl font-bold">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A curated collection of technologies I've mastered throughout my
            journey
          </p>
        </div>

        <div className="relative">
          {/* First slider row - moves left to right */}
          <div
            ref={sliderRow1Ref}
            className="flex overflow-x-hidden py-6 mb-8 relative"
          >
            {/* Double the items to create seamless loop */}
            <div className="flex space-x-6 pr-6">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`row1-${index}`}
                  className={`flex-none w-44 rounded-2xl p-5 border-2 shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${getCategoryColor(
                    skill.category
                  )}`}
                >
                  <div className="mb-4 rounded-full bg-white p-3 w-16 h-16 flex items-center justify-center mx-auto shadow-sm">
                    <img
                      src={getLogoUrl(skill.name)}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {skill.name}
                  </h3>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second slider row - moves right to left */}
          <div
            ref={sliderRow2Ref}
            className="flex overflow-x-hidden py-6 relative"
          >
            {/* Double the items to create seamless loop */}
            <div className="flex space-x-6 pr-6">
              {[
                ...skills.slice(6),
                ...skills.slice(0, 6),
                ...skills.slice(6),
                ...skills.slice(0, 6),
              ].map((skill, index) => (
                <div
                  key={`row2-${index}`}
                  className={`flex-none w-44 rounded-2xl p-5 border-2 shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${getCategoryColor(
                    skill.category
                  )}`}
                >
                  <div className="mb-4 rounded-full bg-white p-3 w-16 h-16 flex items-center justify-center mx-auto shadow-sm">
                    <img
                      src={getLogoUrl(skill.name)}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {skill.name}
                  </h3>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for infinite effect */}
          <div className="absolute top-0 left-0 h-full w-24 "></div>
          <div className="absolute top-0 right-0 h-full w-24 "></div>
        </div>

        {/* Category legend */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Frontend
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Backend
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Database
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Language
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Tools
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
