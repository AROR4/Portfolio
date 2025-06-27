import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#111010] text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Let’s connect and build something great together.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/xrbkywya"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-fit bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Connect with me
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/AROR4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/raghav-arora-470928261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:raghavarora9899@gmail.com"
              className="text-gray-400 hover:text-indigo-500 transition"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://x.com/a09807230_arora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition"
            >
              <Twitter size={28} />
            </a>
            <a
              href="https://instagram.com/raghavarora9899"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
