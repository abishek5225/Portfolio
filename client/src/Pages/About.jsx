import React from "react";


export default function Home() {
  return (
    <div className="h-[800px] bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-400  text-black items-center w-[300px] h-[90px] mt-7 lg: ">
        <h1 className="text-5xl text-center justify-center items-center ">
          This is<span className="text-black font-bold"> me</span>
        </h1>
      </div>

      {/* About Me Section */}
      <div className="py-12 px-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
        Hi! I'm Abishek, a passionate full-stack developer from Dhulabari, Nepal. I specialize in creating responsive, user-friendly
         websites using technologies like React.js and Tailwind CSS. I enjoy solving coding problems, fixing front-end issues, and 
         turning creative ideas into functional designs. 
         I'm currently expanding my skills in back-end development with Node.js and exploring the 
         exciting world of blockchain. My goal is to deliver high-quality projects that leave a positive impact. Outside of coding, 
         I enjoy learning new concepts, exploring innovative ideas, and connecting with like-minded individuals.

Feel free to reach out—I’d love to collaborate or discuss new projects! 
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Content Strategy",
              "Writing",
              "Campaign Management",
              "Branding",
              "Social Media",
              "Events Content",
              "Fundraising",
              "Creative Initiatives",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-black text-white px-4 py-2 text-center rounded-lg hover:bg-gray-800 transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 bg-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4">
          I <span className="text-yellow-400">advise</span> companies and NGOs in initiatives and
          campaigns
        </h2>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          See Full CV
        </button>
      </div>
    </div>
  );
}
