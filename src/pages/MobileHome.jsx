import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import cvImage from "../assets/cv.png";
import projects from "../assets/project.png";
import Card, { LogoCard } from "../components/ui/Card";
import LeetCodeCalendar from "leetcode-calendar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiFlutter, SiDart, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMysql, SiMongodb, SiCss3, SiPostman,
} from "react-icons/si";
import { ArrowRight, Handshake } from "lucide-react";

const MobilePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

  const socials = [
    { icon: <FaGithub size={28} />, label: "GitHub", link: "https://github.com/AROR4" },
    { icon: <FaLinkedin size={28} />, label: "LinkedIn", link: "https://linkedin.com/in/raghav-arora-470928261" },
    { icon: <FaTwitter size={28} />, label: "Twitter", link: "https://x.com/a09807230_arora" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 space-y-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <Card className="h-full p-4 sm:p-6 bg-gray-900/50 border border-white/5">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-white">
              <img
                src={profile}
                alt="Raghav Arora"
                className="w-full sm:w-48 h-auto sm:h-64 rounded-tl-3xl rounded-br-3xl object-cover"
              />
              <div className="text-center sm:text-left">
                <p className="text-indigo-500 text-sm uppercase mb-1">A Software Engineer</p>
                <h1 className="text-2xl sm:text-4xl font-bold uppercase tracking-wide mb-1">RAGHAV ARORA</h1>
                <p className="text-sm sm:text-base text-slate-300 uppercase">Full Stack Developer</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6 bg-gray-900/50 border border-white/5 h-auto">
            <div className="text-lg sm:text-xl text-white font-semibold">
              I’m a passionate <span className="text-indigo-400">{currentText}</span>
            </div>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link to="/about">
              <Card className="h-full p-4 sm:p-6 bg-gray-900/50 border border-white/5 hover:border-indigo-500/20">
                <img src={cvImage} alt="Resume" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                <p className="text-gray-400 text-xs sm:text-sm mb-1">MORE ABOUT ME</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">Resume</h2>
              </Card>
            </Link>
            <Link to="/works">
              <Card className="h-full p-4 sm:p-6 bg-gray-900/50 border border-white/5 hover:border-indigo-500/20">
                <img src={projects} alt="Projects" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                <p className="text-gray-400 text-xs sm:text-sm mb-1">SHOWCASE</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">Projects</h2>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LogoCard className="aspect-square w-full h-auto p-0 flex items-center justify-center bg-black border border-white/5">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </LogoCard>
        <Link to="/resume">
          <Card className="p-4 sm:p-6 bg-gray-900/50 border border-white/5 hover:border-indigo-500/20">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 justify-items-center mb-4">
              {[SiFlutter, SiDart, SiJavascript, SiReact, SiNodedotjs].map((Icon, i) => (
                <Icon key={i} size={28} className="text-gray-400 hover:text-indigo-500 transition" />
              ))}
              {[SiExpress, SiMysql, SiMongodb, SiCss3, SiPostman].map((Icon, i) => (
                <Icon key={i + 5} size={28} className="text-gray-400 hover:text-indigo-500 transition" />
              ))}
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">SPECIALIZATION</p>
            <h2 className="text-lg sm:text-xl font-bold text-white">Tech Stack</h2>
          </Card>
        </Link>
        <Card className="p-4 sm:p-6 bg-gray-900/50 border border-white/5 hover:border-indigo-500/20">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-500 transition">
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm mb-1">STAY WITH ME</p>
              <h2 className="text-lg sm:text-xl font-bold text-white">Socials</h2>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-4 sm:p-6 bg-gray-900/50 border border-white/5">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-4">
              Days I <span className="text-indigo-500">LeetCode</span>
            </h2>
            <div className="overflow-x-auto">
              <LeetCodeCalendar
                username="raghavarora9899"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                style={{ width: "100%", maxWidth: "100%" }}
              />
            </div>
          </Card>
        </div>
        <Link to="/contact">
          <Card className="h-full p-4 sm:p-6 bg-indigo-600 hover:bg-indigo-700 group border-none transition duration-300 shadow-xl rounded-3xl flex flex-col justify-between text-white">
            <Handshake size={32} />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Let's</h2>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Work</h2>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Together</h2>
            </div>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition text-white" />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default MobilePage;
