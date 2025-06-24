import React from "react";
import profile from "../assets/profile-2.png";
import { Briefcase, Smile, Clock, Users } from "lucide-react";
import {
  MapPin,
  Mountain,
  Bike,
  Compass,
  Dumbbell,
  Activity,
  BookOpen,
  Code,
  Puzzle,
  Smartphone,
  UtensilsCrossed,
  Car
} from "lucide-react";

const About = () => {
  const interests = [
  { label: "Travelling", icon: MapPin, color: "text-sky-400" },
  { label: "Trekking", icon: Mountain, color: "text-emerald-400" },
  { label: "Cycling", icon: Bike, color: "text-cyan-400" },
  { label: "Exploring", icon: Compass, color: "text-blue-400" },
  { label: "Business", icon: Briefcase, color: "text-yellow-400" },
  { label: "Cricket", icon: Dumbbell, color: "text-orange-400" }, 
  { label: "Teaching", icon: BookOpen, color: "text-indigo-400" },
  { label: "Problem Solving", icon: Puzzle, color: "text-purple-400" },
  { label: "Web Development", icon: Code, color: "text-pink-400" },
  { label: "App Development", icon: Smartphone, color: "text-violet-400" },
  { label: "Food", icon: UtensilsCrossed, color: "text-red-400" },
  { label: "Cars", icon: Car, color: "text-lime-400" },
];


  return (
    <section id="about" className="bg-[#111010] text-white min-w-[calc(100vh-80px)]  py-15 px-55">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Learn More About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        </div>


        <div className="grid md:grid-cols-2 gap-6 items-center">
          
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className=" w-120  h-120 object-cover transform hover:scale-105 transition duration-500"
            />
          </div>


          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-400">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Hi, I’m Raghav Arora, a Full Stack Developer who loves building
              applications that are both useful and easy to use. With a strong
              foundation in computer science, I enjoy solving problems and
              bringing ideas to life through technology. I have experience
              working with tools and frameworks like Flutter, NodeJs, ReactJs,
              and more, which help me create modern, efficient, and scalable
              solutions. I’m always curious to learn new things and stay updated
              with the latest trends in web development, which keeps my work
              fresh and exciting.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              I enjoy working with teams where everyone collaborates to achieve
              great results. My communication skills and ability to adapt make
              it easy for me to work with different people and deliver projects
              on time. I take pride in owning my work and ensuring that the end
              result is something I’m proud of. Apart from coding, I believe in
              continuous learning and always look for ways to improve my skills.
              I’m passionate about taking on challenges that push me to grow and
              finding opportunities to make a meaningful impact through my work.
              I’m looking forward to new projects, meeting like-minded people,
              and contributing to the field of web development in any way I can.
            </p>

          
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <p>
                <span className="text-indigo-400 font-medium">
                  🎂 Birthday:
                </span>{" "}
                26 August 2004
              </p>
              <p>
                <span className="text-indigo-400 font-medium">🎓 Degree:</span>{" "}
                Undergraduate 2026
              </p>
              <p>
                <span className="text-indigo-400 font-medium">🌐 Website:</span>{" "}
                <a href="#" className="underline">
                  raghav-arora-5.vercel.app
                </a>
              </p>
              <p>
                <span className="text-indigo-400 font-medium">📧 Email:</span>{" "}
                raghavarora9899@gmail.com
              </p>
              <p>
                <span className="text-indigo-400 font-medium">📞 Phone:</span>{" "}
                +91 7988720509
              </p>
              <p>
                <span className="text-indigo-400 font-medium">🌍 City:</span>{" "}
                Sonipat → Chennai{" "}
              </p>
              <p>
                <span className="text-indigo-400 font-medium">
                  💼 Freelance:
                </span>{" "}
                Available
              </p>
              <p>
                <span className="text-indigo-400 font-medium">🧓 Age:</span> 20
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-[#1a1a1a] py-6 rounded-xl">
            <Smile className="mx-auto text-indigo-400 mb-2" />
            <h4 className="text-2xl font-bold">6+</h4>
            <p className="text-sm text-gray-400">Hackathons Attended</p>
          </div>
          <div className="bg-[#1a1a1a] py-6 rounded-xl">
            <Briefcase className="mx-auto text-indigo-400 mb-2" />
            <h4 className="text-2xl font-bold">15+</h4>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div className="bg-[#1a1a1a] py-6 rounded-xl">
            <Clock className="mx-auto text-indigo-400 mb-2" />
            <h4 className="text-2xl font-bold">1,500+</h4>
            <p className="text-sm text-gray-400">Hours of Coding</p>
          </div>
          <div className="bg-[#1a1a1a] py-6 rounded-xl">
            <Users className="mx-auto text-indigo-400 mb-2" />
            <h4 className="text-2xl font-bold">450+</h4>
            <p className="text-sm text-gray-400">Leetcode Problems Solved</p>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold ">INTERESTS</h3>
            
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300">
  {interests.map(({ label, icon: Icon, color }) => (
    <div
      key={label}
      className=" py-3 px-4 rounded-lg text-center hover:bg-[#232323] transition flex flex-col items-center gap-2"
    >
      <Icon size={20} className={color} />
      <span>{label}</span>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
