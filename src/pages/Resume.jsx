import React from "react";
import { Github } from "lucide-react";

const TimelineItem = ({ title, children }) => (
  <div className="pl-6 relative">
    <div className="absolute left-0 top-2 w-3 h-3 bg-white border border-indigo-500 rounded-full shadow-md" />
    <h3 className="text-white font-bold text-base sm:text-lg mb-1">{title}</h3>
    {children}
  </div>
);

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-[#111010] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Resume</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Flutter", percent: 90 },
              { name: "Dart", percent: 85 },
              { name: "Node.js", percent: 80 },
              { name: "Express.js", percent: 75 },
              { name: "MongoDB", percent: 80 },
              { name: "Oracle SQL", percent: 70 },
              { name: "Firebase", percent: 85 },
              { name: "Java Core", percent: 85 },
              { name: "Javascript", percent: 80 },
              { name: "JWT Auth", percent: 80 },
              { name: "Git", percent: 85 },
              { name: "Power BI", percent: 70 },
            ].map(({ name, percent }) => (
              <div key={name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{name}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded h-2">
                  <div
                    className="h-2 rounded bg-indigo-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Summary */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">Summary</h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="Raghav Arora">
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    A passionate full stack developer with interest in building
                    scalable mobile and web apps.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                    <li>Sonipat, Haryana</li>
                    <li>raghavarora9899@gmail.com</li>
                  </ul>
                </TimelineItem>
              </div>
            </div>


            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">Education</h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="B.Tech - Computer Science and Engineering">
                  <p className="text-sm text-gray-400 mb-1">2022–2026</p>
                  <p className="text-sm italic mb-1">VIT Chennai</p>
                  <p className="text-sm">CGPA: 9.54/10</p>
                </TimelineItem>
                <TimelineItem title="Higher Secondary">
                  <p className="text-sm text-gray-400 mb-1">2022</p>
                  <p className="text-sm italic mb-1">
                    DAV Multipurpose Public School, Sonipat
                  </p>
                  <p className="text-sm">Percentage: 97.4%</p>
                </TimelineItem>
                <TimelineItem title="High School">
                  <p className="text-sm text-gray-400 mb-1">2020</p>
                  <p className="text-sm italic mb-1">
                    DAV Multipurpose Public School, Sonipat
                  </p>
                  <p className="text-sm mb-1">Percentage: 95.8%</p>
                </TimelineItem>
              </div>
            </div>


            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">Work Experience</h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="Technical Intern – ICF India (May 2025 - June 2025)">
                  <p className="text-sm text-gray-400 leading-relaxed italic">
                    During my internship, I worked on building an internal
                      analytics platform using Power BI to help the team
                      effectively track project progress and key performance
                      indicators. The primary objective was to design and
                      develop a centralized dashboard that consolidated data
                      from various sources and visualized team-wise
                      contributions, project statuses, and overall business
                      impact. I collaborated closely with team members to gather
                      requirements and transformed raw data into actionable
                      insights through interactive reports. This tool
                      significantly reduced manual tracking efforts and enhanced
                      transparency within the organization. Through this
                      project, I gained hands-on experience in data handling,
                      visualization, internal tool development, and
                      understanding how software solutions can drive operational
                      efficiency.
                  </p>
                </TimelineItem>
                <TimelineItem title="App Dev Intern – SpectoV (May 2024 - July 2024)">
                  <p className="text-sm text-gray-400 leading-relaxed italic">
                    During my internship at SpectoV Assistive Pvt. Ltd., I was
                      part of the app development team responsible for building
                      the company’s first mobile application. The app showcased
                      SpectoV’s assistive technology products, featured a news
                      and updates section about the company, highlighted newly
                      filed patents, and included a detailed “About” section. I
                      worked primarily on the frontend using Flutter, ensuring a
                      smooth and responsive user interface. This experience
                      helped me strengthen my mobile development skills,
                      understand product-driven design, and contribute to
                      launching a real-world application that enhanced user
                      engagement and brand visibility.
                  </p>
                </TimelineItem>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* POR */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">
                Positions of Responsibility
              </h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="President – Newton School Coding Club (2024–2025)">
                  <p className="text-sm text-gray-400 italic">
                    As President, I organized technical and community events
                      including Byte Battles (coding contest), LaTeX and GitHub
                      workshops, and fun activities like FunWin. I led planning,
                      coordination, and execution, helping foster a strong
                      coding culture on campus.
                  </p>
                </TimelineItem>
                <TimelineItem title="App Dev Lead – Microsoft Innovations Club (2024)">
                  <p className="text-sm text-gray-400 italic">
                    As the App Development Lead , I guided a team of
                      developers in building impactful mobile applications and
                      participated in club-led tech initiatives. I was
                      responsible for mentoring junior members, overseeing
                      project architecture, and ensuring timely delivery of app
                      features aligned with user needs and club goals.
                  </p>
                </TimelineItem>
                <TimelineItem title="Coordinator – Solveathon 2025">
                  <p className="text-sm text-gray-400 italic">
                    As the Coordinator of SolveThon, the largest hackathon at
                      VIT, I played a key role in organizing and executing the
                      event, which saw the participation of 800+ students. I
                      collaborated with teams across logistics, outreach, and
                      content, and helped secure sponsorship from major brands
                      like Pepsi. I was also part of the evaluation team,
                      contributing to the shortlisting and judging process. My
                      efforts ensured a seamless and high-impact experience for
                      all participants.
                  </p>
                </TimelineItem>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">Achievements</h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="1st Place – App Fusion Contest by SCOPE">
                  <p className="text-sm text-gray-400 italic">
                    We developed a Garbage Locator App aimed at promoting
                    cleaner urban spaces by helping users locate and report
                    garbage dump sites in their locality. The app allowed users
                    to mark dump locations on a map, upload images, and send
                    real-time reports to municipal authorities. It featured a
                    clean user interface, location-based services using maps
                    API, and a community-driven reporting system. This project
                    demonstrated my skills in mobile app development,
                    geolocation integration, and user-centric design.
                  </p>
                </TimelineItem>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">Certifications</h4>
              <div className="relative pl-4 border-l-2 border-indigo-500 space-y-6">
                <TimelineItem title="AI-900: Azure AI Fundamentals">
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1wRFzMChhIJeqG2oShHHUsCJeouJ6u3K3/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="text-indigo-500 underline text-sm"
                  >
                    View Certificate
                  </button>
                </TimelineItem>
                <TimelineItem title="SQL for Data Science">
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1_tv06vDiXiipVTkLEKrgEAx4hYkB_XtR/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="text-indigo-500 underline text-sm"
                  >
                    View Certificate
                  </button>
                </TimelineItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
