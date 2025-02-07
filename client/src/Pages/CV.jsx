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
    <div className="h-56 bg-gray-100 font-sans">
      <Nav />
      {/* Header Section */}
      <div className="w-full bg-gray-100 ">
        <div className=" w-52 h-24 bg-yellow-300 flex items-center pl-8 mt-10 lg:mt-20 lg:w-[700px] lg:h-40">
          <h1 className="text-6xl font-bold mb-24 lg:mb-36 lg:text-9xl">CV</h1>
        </div>
      </div>

      {/* Professional Summary Section */}
      <div className="max-w-4xl bg-gray-100 mx-auto mt-10 px-6 ">
        <h2 className="text-5xl font-bold">
          <span className="text-black">Professional</span>
          <span className="text-gray-700"> Summary</span>
        </h2>
        <div className="w-full lg:w-[550px] ">
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double-click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>

          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out.
          </p>
        </div>
      </div>
      <div className="w-full h-[650px]">
        <div className="w-full">
          <div className=" w-52 h-24 bg-yellow-300  items-center pl-8 mt-10 lg:w-[550px] lg:h-40">
            <h1 className="text-5xl pl-10 font-bold">Skills</h1>
          </div>
          <div className="w-full h-24 justify-center">
            <Skills />
          </div>
        </div>
      </div>
      <div>
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
      <div>
        <div className=" w-52 h-24 bg-yellow-300  items-center pl-8 mt-10 lg:w-[550px] lg:h-40">
          <h1 className="text-5xl pl-10 font-bold">Interest</h1>
        </div>
        <section className="py-10 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              I have a deep passion for technology, always eager to explore and
              experiment with the latest advancements in software development,
              blockchain, and artificial intelligence. Beyond tech, I am
              fascinated by neuroscience, intrigued by how the human brain
              functions and the potential of mind-machine interfaces. I also
              have a strong inclination toward spirituality, appreciating the
              philosophical perspectives that unify different beliefs and
              emphasize the idea of a universal energy. Additionally, my
              curiosity extends to various scientific domains, where I enjoy
              learning about the mysteries of the universe, quantum mechanics,
              and the fundamental principles that govern our reality.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CV;
