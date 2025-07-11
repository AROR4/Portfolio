import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LogoCard } from "../components/ui/Card";
import {
  Github,
  Instagram,
  Linkedin,
  X,
  Handshake,
  ArrowRight,
  Newspaper,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Card from "../components/ui/Card";
import { Smartphone, ClipboardList, Globe } from "lucide-react";
import LeetCodeCalendar from "leetcode-calendar";
import "./home.css";
import cvImage from "../assets/cv.png";
import projects from "../assets/project.png";
import profile from "../assets/profile.jpg";

import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiCss3,
  SiPostman,
} from "react-icons/si";

const DesktopPage = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const socials = [
    {
      icon: <FaGithub size={28} />,
      label: "GitHub",
      link: "https://github.com/AROR4",
    },
    {
      icon: <FaLinkedin size={28} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/raghav-arora-470928261",
    },
    {
      icon: <FaTwitter size={28} />,
      label: "Twitter",
      link: "https://x.com/a09807230_arora",
    },
  ];

  const toggleSocials = () => {
    setShowSocials(!showSocials);
  };

  const texts = ["Full Stack Developer", "Tech Enthusiast", "App Developer"];
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = texts[wordIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prev) => currentWord.slice(0, charIndex + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      } else {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }
    };


    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, texts, wordIndex, charIndex, typingSpeed]);

  return (
    <div className="min-w-[calc(100vh-80px)]  py-15 px-62">
      <div className="grid  grid-cols-4 gap-6">
        <div className="col-span-2 row-span-2">
          <Card className="h-full p-6 relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-6 mt-6 text-white ">
    
              <div className="w-full ">
                <img
                  src={profile}
                  alt="Raghav Arora"
                  className="w-72 h-64 rounded-tl-3xl rounded-br-3xl object-cover"
                />
              </div>

       
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-indigo-500 text-sm md:text-base uppercase  mb-1">
                  A Software Engineer
                </p>
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
                  RAGHAV ARORA
                </h1>
                <p className="text-sm md:text-lg uppercase text-slate-300">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          </Card>
        </div>

        <div className="h-full row-span-2 col-span-2 grid grid-rows-[0.8fr_3fr] gap-6">
          {/* Top Card */}
          <Card className="p-6 flex items-center bg-gray-900/50 backdrop-blur-sm border border-white/5">
            <div className="typing-container font-white ">
              <span className="tagline font-white">I'm a passionate </span>
              <span className="animate">{currentText}</span>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          </Card>

          {/* Bottom Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Link to="/about" className="h-full">
              <Card className="h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 hover:bg-gray-800/80 group hover:border-indigo-500/20 transition-all duration-300">
                <div className="h-full flex flex-col justify-between">
                  {/* Top Image */}
                  <img
                    src={cvImage}
                    alt="Resume Preview"
                    className="w-25 h-25 object-cover rounded-md mb-4 mx-auto"
                  />

                  {/* Bottom Text and Icon */}

                  <div className="flex justify-between items-end mt-6 ">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">
                        MORE ABOUT ME
                      </p>
                      <h2 className=" text-xl font-bold">Resume</h2>
                    </div>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/works" className="h-full">
              <Card className="h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 hover:bg-gray-800/80 group hover:border-indigo-500/20 transition-all duration-300">
                <div className="h-full flex flex-col justify-between">
                  <img
                    src={projects}
                    alt="projects"
                    className="w-35 h-30 object-cover rounded-md mb-4 mx-auto"
                  />
                  <div className="flex justify-between items-end mt-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">SHOWCASE</p>
                      <h2 className=" text-xl font-bold">Projects</h2>
                    </div>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="grid grid-cols-4 gap-6 h-[250px] auto-rows-[minmax(150px,auto)] ">
        <div className="col-span-1">
          <LogoCard className=" bg-black aspect-square w-56 h-full p-0 flex items-center justify-center">
  <img
    src={logo}
    alt="Raghav Arora Logo"
    className="w-full h-full object-contain"
  />
</LogoCard>

        </div>

        <Link to="/resume" className="col-span-2">
          <Card className="h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5 hover:bg-gray-800/80 group hover:border-indigo-500/20 transition-all duration-300">
            <div className="py-5 space-y-10 relative bg-transparent">
              {/* Top Row */}
              <div className="flex flex-wrap justify-center gap-10 mb-10">
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiFlutter size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiDart size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiJavascript size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiReact size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiNodedotjs size={40} />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiExpress size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiMysql size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiMongodb size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiCss3 size={40} />
                </div>
                <div className="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition">
                  <SiPostman size={40} />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end ">
              <div>
                <p className="text-gray-400 text-sm mb-1">SPECIALIZATION</p>
                <h2 className="text-xl font-bold">Tech Stack</h2>
              </div>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
            </div>
          </Card>
        </Link>

        <Card
          className={`
    h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5
    hover:bg-gray-800/80 cursor-pointer group hover:border-indigo-500/20
    transition-all duration-300 ${showSocials ? "relative z-20" : ""}
  `}
        >
          <div className="h-full flex flex-col justify-between">
            {/* Header */}

            {/* Icons Container */}
            <div className="relative flex items-center justify-center pt-5">
              <div className="flex gap-0 group transition-all duration-500">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            bg-grey/30 text-white border border-white/10 shadow-md backdrop-blur-sm
            rounded-xl w-20 h-24 flex flex-col items-center justify-center
            mx-[-10px] group-hover:mx-4
            transition-all duration-500
            hover:shadow-lg hover:border-white/20
            `}
                  >
                    {social.icon}
                    <span className="text-sm mt-2">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">STAY WITH ME</p>
              <h2 className="text-xl font-bold">Socials</h2>
            </div>
          </div>
        </Card>
      </div>

      <div className="h-6"></div>
      <div className="grid grid-cols-4 gap-6 h-[300px] auto-rows-[minmax(150px,auto)] ">
        <div className="col-span-3">
          <Card className="h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-white/5">
            <div style={{ width: '100%', border: '2px solid transparent', boxSizing: 'border-box' }}>
  <img
    src="https://leetcard.jacoblin.cool/raghavarora9899?theme=transparent&font=baloo&ext=activity"
    alt="LeetCode stats"
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      border: '2px solid transparent',
    }}
  />
</div>

           

          </Card>
        </div>

        <Link to="/contact">
          <Card className="h-full p-5 bg-indigo-600 hover:bg-indigo-700 group border-none transition-all duration-300 shadow-2xl rounded-3xl">
            <div className="h-full flex flex-col justify-between items-start gap-2">
              <Handshake size={36} className="text-white mb-2" />
              <div>
                <h2 className="text-4xl font-extrabold text-white leading-tight group-hover:tracking-wider transition-all duration-300">
                  Let's
                </h2>
                <h2 className="text-4xl font-extrabold text-white leading-tight group-hover:tracking-wider transition-all duration-300">
                  Work
                </h2>
                <h2 className="text-4xl font-extrabold text-white leading-tight group-hover:tracking-wider transition-all duration-300">
                  Together
                </h2>
              </div>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          </Card>
        </Link>
      </div>

      {showSocials && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleSocials}
          ></div>
          <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-xl shadow-2xl animate-fade-in-up max-w-md w-full mx-4 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-white/5 hover:border-indigo-500/20 group"
                >
                  <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-lg">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopPage;

