
import React from 'react';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white border-b-2 border-purple-900 py-4">
            {/* Content Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-20 px-10 bg-black">
                {/* Text Section */}
                <div className="lg:w-1/2 text-left space-y-10 ml-24">
                    <h1 className="text-5xl font-extrabold">HI, I AM</h1>
                    <h1 className="text-5xl font-extrabold text-purple-900">TAYYABA SHOUKAT.</h1>
                    <h2 className="text-xl">
                        A passionate student of IT, Cloud Computing, Gen AI, Web 3.0, & Full Stack Development at Governor House Karachi.
                    </h2>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center mt-9 lg:mt-0">
                    <img 
                        src="/istockphoto-1203229178-2048x2048.jpg"
                        alt="Tayyaba Shoukat Profile Icon"
                        className="w-96 h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
