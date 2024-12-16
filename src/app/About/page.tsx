import React from 'react';

function About() {
  return (
    <div className="bg-black min-h-screen text-stone-50  border-b-2 border-purple-900 py-4">
        <h1 className="text-5xl font-extrabold text-purple-900 text-center mt-14">ABOUT ME</h1>
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center  px-10 space-y-6 lg:space-y-0">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start ml-24">
          <img 
            src="/istockphoto-1203226634-2048x2048.jpg"
            alt="Tayyaba Shoukat's Profile Icon"
            className="w-96 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-left space-y-4">
          <h1 className="text-4xl font-bold text-purple-900">TAYYABA</h1>
          <h2 className="text-xl">
            Enthusiastic Frontend Student at GIAIC, Exploring Web Development
          </h2>
          <p className="text-lg leading-relaxed">
            I'm TAYYABA, a passionate frontend development student at GIAIC. I've learned HTML, CSS, JavaScript, and Tailwind CSS, building several impressive projects. I've also participated in a hackathon, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I'm currently focused on mastering frontend technologies, preparing for more complex AI topics in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
