import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-stone-50">
       <h1 className="text-5xl font-extrabold text-purple-900 text-center mt-16">Let's Connect</h1>
      <div className="min-h-screen bg-black py-10 mt-32">
        {/* Contact Information */}
        <div className="max-w-7xl mx-auto bg-black shadow-md rounded-lg p-6 md:flex">
          <div className="md:w-1/2 w-full p-4">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-white mb-4">
              I'd love to hear from you! Whether you have a question, proposal, or just want to say hello, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="flex items-center text-lg mb-4">
              <FaPhoneAlt className="text-lime-600 mr-3" />
              <p className="text-white">+92 3258230870</p>
            </div>
            <div className="flex items-center text-lg mb-4">
              <FaEnvelope className="text-cyan-300 mr-3" />
              <p className="text-white">
              tayyabashoukat20@gmail.com</p>
            </div>
            <div className="flex items-center text-lg mb-4">
              <FaMapMarkerAlt className="text-red-600 mr-3" />
              <p className="text-white">Hazrat Bilal Colony Korangi Karachi,Pakistan</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100093137517955" className="hover:text-lime-800">
                <FaFacebook size={25} className="text-purple-500" />
              </a>
              <a href="https://github.com/Tayyaba124" className="hover:text-cyan-500">
                <FaGithub size={25} className="text-purple-500" />
              </a>
              <a href="https://www.linkedin.com/in/tayyaba-shoukat-2102612bb/" className="hover:text-red-800">
                <FaLinkedin size={25} className="text-purple-500" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0 p-4">
            <form action="#" method="POST" className="space-y-6 bg-gray-800 p-6 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lime-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-lime-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-cyan-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-red-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-600"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-lime-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
