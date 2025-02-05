import React from 'react'
import Nav from '../components/Navbar'
import SkillsSlider from '../components/SkillsSlider'

function CV() {
  return (
    <div className="h-56 bg-white font-sans">
        <Nav className='' />
      {/* Header Section */}
      <div className='w-full'>
        <div className=" w-52 h-24 bg-yellow-300 flex items-center pl-8 mt-10 lg:mt-20 lg:w-[700px] lg:h-40">
        <h1 className="text-6xl font-bold mb-24 lg:mb-36 lg:text-9xl">CV</h1>
      </div>
      </div>
      
      {/* Professional Summary Section */}
      <div className="max-w-4xl mx-auto mt-10 px-6">
        <h2 className="text-5xl font-bold">
          <span className="text-black">Professional</span>
          <span className="text-gray-700"> Summary</span>
        </h2>
        <div className='w-[300px] lg:w-[550px]'>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double-click me to add your own content and
          make changes to the font. Feel free to drag and drop me anywhere you
          like on your page. I’m a great place for you to tell a story and let
          your users know a little more about you.
        </p>

        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          This is a great space to write a long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out.
        </p>
        </div>
      </div>
      <div className="h-[500px]">
    <div className='w-full '>
        <div className=" w-52 h-24 bg-yellow-300  items-center pl-8 mt-10 lg:w-[550px] lg:h-40">
        <h1 className="text-5xl pl-10 font-bold">Skills</h1>
      </div>
      <div className='w-full h-24 justify-center'>
        <SkillsSlider />
      </div>
      </div>
      </div>
    </div>
  )
}

export default CV