import React from "react";
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
    institution: "Himalayan English Acedemy",
    year: "2019 - 2021",
  },
  { degree: "High School", institution: "Parijat public School", year: "2019" },
];
function CV() {
  return (
    <div className="h-56  bg-gray-100 font-sans">
      <Nav />
      {/* Header Section */}
      <div className="w-full bg-gray-100 ">
        <div className=" w-52 h-24 bg-yellow-300 flex items-center pl-8 mt-10 lg:mt-20 lg:w-[700px] lg:h-40">
          <h1 className="text-6xl  font-bold mb-24 lg:mb-36 lg:text-9xl">CV</h1>
        </div>
      </div>
      <div className="bg-gray-100 h-[980px] lg:h-[700px]">
        {/* Professional Summary Section */}
        <div className="max-w-4xl   mx-auto  px-6 ">
          <h2 className="text-5xl font-bold">
            <span className="text-black">Professional</span>
            <span className="text-gray-700"> Summary</span>
          </h2>
          <div className="w-80  lg:w-[550px] ">
            <p className="text-gray-700 mt-4 text-justify text-lg leading-relaxed">
              Results-driven Full-Stack Developer with 3+ years of experience in
              designing, developing, and maintaining scalable web applications.
              Proficient in React.js, Node.js, Express.js, MySQL, and Tailwind
              CSS, with a strong focus on creating efficient, secure, and
              user-friendly solutions. Skilled in both front-end and back-end
              development, ensuring seamless integration between UI/UX and
              server-side functionalities.
            </p>

            <p className="text-gray-700 mt-6 text-lg text-justify leading-relaxed">
              Passionate about problem-solving, performance optimization, and
              responsive design, with a keen eye for detail and a commitment to
              delivering high-quality projects. Experienced in working with
              international clients, troubleshooting technical issues, and
              implementing best practices for SEO-friendly and high-performance
              web applications.
            </p>
            <p className="text-gray-700 mt-6 text-justify text-lg leading-relaxed">
              Currently enhancing expertise in new technologies and advanced
              back-end systems. Open to exciting projects, collaborations, and
              continuous learning opportunities to stay ahead in the
              ever-evolving tech industry.
            </p>
          </div>
        </div>
      </div>
      {/* Skills Section */}

      <div className="w-full bg-gray-100 h-auto">
        <div className="w-full">
          <div className=" w-52 h-24 bg-yellow-300  items-center pl-8  lg:w-[550px] lg:h-40">
            <h1 className="text-5xl pl-10 font-bold">Skills</h1>
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
      {/*education section */}
      <div className="w-full h-auto">
        <div className=" w-52 h-24 bg-yellow-300  items-center pl-8 mt-10 lg:w-[550px] lg:h-40">
          <h1 className="text-5xl pl-10 font-bold">Education</h1>
        </div>
        <div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-left"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Interest Section */}
      <div>
        <div className=" w-52 h-24 bg-yellow-300  items-center pl-8 mt-10 lg:w-[550px] lg:h-40">
          <h1 className="text-5xl pl-10 font-bold">Interest</h1>
        </div>
        <div>
          <section className="py-10 bg-gray-100 h-auto flex items-center justify-center">
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  Always excited to explore emerging technologies
                and how they impact the world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Neuroscience – Curious about how human brain works
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CV;
