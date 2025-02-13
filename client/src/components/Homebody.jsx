import React from 'react'


function Homebody() {
  return (
    <div class="min-h-screen bg-zinc-100 flex items-center justify-center ">
      
  <div class="max-w-screen-lg mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    <div>
      <h1 class="text-3xl lg:text-5xl font-bold mb-4">
        I'm <span class="text-black">Abishek Chaulagain</span>.
      </h1>
      <p class="text-2xl lg:text-3xl text-gray-600 mb-8">
        A <span class="bg-yellow-200 text-black px-1">Tech enthusiast</span>and Full Stack Developer.
      </p>
      <h2 class="text-2xl lg:text-3xl font-light mb-4">
        Looking <span class="italic">for</span> my next
        <span class="font-bold">opportunity</span> to make a <span class="font-bold">change</span>.
        <br />
        <span class="text-yellow-500 font-bold text-2xl">The digital way.</span>
      </h2>
    </div>

    
    <div class="flex justify-center lg:justify-end">
      <img 
        src="/images/img3.JPG"
        alt="my image"
        class="rounded-lg shadow-lg max-w-full w-64 lg:w-96 object-cover"
      />
    </div>
  </div>
</div>

  )
}

export default Homebody