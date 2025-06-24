import React from "react";
import { Github } from "lucide-react";

const TimelineItem = ({ title, children }) => (
  <div className="pl-6 relative ">
    <div className="absolute left-0 top-2 w-3 h-3 bg-white border-1 border-indigo-500 rounded-full shadow-md" />
    <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
    {children}
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="bg-[#111010] text-white min-w-[calc(100vh-80px)]  py-15 px-55">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Resume</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Flutter', percent: 90 },
              { name: 'Dart', percent: 85 },
              { name: 'Node.js', percent: 80 },
              { name: 'Express.js', percent: 75 },
              { name: 'MongoDB', percent: 80 },
              { name: 'Oracle SQL', percent: 70 },
              { name: 'Firebase', percent: 85 },
              { name: 'Java Core', percent: 85 },
              { name: 'Javascript', percent: 80 },
              { name: 'JWT Auth ', percent: 80 },
              { name: 'Git ', percent: 85 },
              { name: 'Power BI', percent: 70 }
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
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column – Summary & Education */}
          <div>
            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">Summary</h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="Raghav Arora">
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    <span className="font-bold text-white">Raghav Arora</span>
                    <br />A passionate full stack developer with interest in
                    building scalable mobile and web apps.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                    <li>From Sonipat, Haryana</li>
                    <li>raghavarora9899@gmail.com</li>
                  </ul>
                </TimelineItem>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">Education</h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="COMPUTER SCIENCE AND ENGINEERING (B-Tech) ">
                  <p className="mb-2 text-lg">2022-2026</p>
                  <p className="mb-2 text-lg">
                    {" "}
                    <i>Vellore Institute of Technology, Chennai</i>
                  </p>
                  <p className="mb-2 text-lg">CGPA-9.54/10</p>
                </TimelineItem>
                <TimelineItem title="HIGHER SECONDARY">
                  <p className="mb-2 text-lg">2022</p>
                  <p className="mb-2 text-lg">
                    {" "}
                    <i>DAV Multipurpose Public School, Sonipat</i>
                  </p>
                  <p className="mb-2 text-lg">Percentage-97.4%</p>
                </TimelineItem>
                <TimelineItem title="HIGH SCHOOL">
                  <p className="mb-2 text-lg">2020</p>
                  <p className="mb-2 text-lg">
                    {" "}
                    <i>DAV Multipurpose Public School, Sonipat</i>
                  </p>
                  <p className="mb-2 text-lg">Percentage-95.8%</p>
                </TimelineItem>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">Work Experience</h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="Technical Intern ">
                  <p className="text-lg mb-2"> ICF INDIA</p>
                  <p className="text-lg mb-2"> May 2025 - June 2025</p>
                  <p className="mb-8 text-s">
                    <i>
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
                    </i>
                  </p>
                </TimelineItem>
                <TimelineItem title="Technical Intern at ICF India">
                  <p className="text-lg mb-2"> SpectoV Assistive Pvt. Ltd. </p>
                  <p className="text-lg mb-2"> May 2024 - July 2024</p>
                  <p className="mb-8 text-s">
                    <i>
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
                    </i>
                  </p>
                </TimelineItem>
              </div>
            </div>
          </div>

          {/* Right Column – Projects */}
          <div>
            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">
                  Position of Responsibility
                </h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="PRESIDENT AT NEWTON SCHOOL CODING CLUB VIT">
                  <p className="text-lg mb-2"> July 2024 - May 2025</p>
                  <p className="mb-8 text-s">
                    <i>
                      As President, I organized technical and community events
                      including Byte Battles (coding contest), LaTeX and GitHub
                      workshops, and fun activities like FunWin. I led planning,
                      coordination, and execution, helping foster a strong
                      coding culture on campus.
                    </i>
                  </p>
                </TimelineItem>
                <TimelineItem title="APP DEV LEAD AT MICROSOFT INNOVATIONS CLUB VIT">
                  <p className="text-lg mb-2"> March 2024 - September 2024</p>
                  <p className="mb-8 text-s">
                    <i>
                      As the App Development Lead , I guided a team of
                      developers in building impactful mobile applications and
                      participated in club-led tech initiatives. I was
                      responsible for mentoring junior members, overseeing
                      project architecture, and ensuring timely delivery of app
                      features aligned with user needs and club goals.
                    </i>
                  </p>
                </TimelineItem>
                <TimelineItem title="Overall Co-ordinator of Solveathon 2025">
                  <p>
                    <i>
                      As the Coordinator of SolveThon, the largest hackathon at
                      VIT, I played a key role in organizing and executing the
                      event, which saw the participation of 800+ students. I
                      collaborated with teams across logistics, outreach, and
                      content, and helped secure sponsorship from major brands
                      like Pepsi. I was also part of the evaluation team,
                      contributing to the shortlisting and judging process. My
                      efforts ensured a seamless and high-impact experience for
                      all participants.
                    </i>
                  </p>
                </TimelineItem>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">
                  ACHIEVEMENTS 
                </h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="APP FUSION MOBILE APP CONTEST BY SCOPE VIT CHENNAI">
                  <p className="text-l mb-2">
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
                  <p className="mb-8 text-s">
                    <i>Our team won the FIRST Prize.</i>
                  </p>
                </TimelineItem>
                
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h4 className="text-3xl font-bold">CERTIFICATIONS</h4>
              </div>
              <div className="mb-8 relative before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500">
                <TimelineItem title="AI-900: AZURE AI FUNDAMENTALS">
                  <p className="mb-5">
                    <button
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1wRFzMChhIJeqG2oShHHUsCJeouJ6u3K3/view?usp=sharing",
                          "_blank"
                        )
                      }
                      style={{
                        color: "#4F46E5",
                        background: "none",
                        border: "none",
                        fontSize: "14px",
                        textDecoration: "underline",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Click here
                    </button>{" "}
                    to view details.
                  </p>
                </TimelineItem>

                <TimelineItem title="SQL FOR DATA SCIENCE">
                  <p className="mb-5">
                    <button
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1_tv06vDiXiipVTkLEKrgEAx4hYkB_XtR/view?usp=sharing",
                          "_blank"
                        )
                      }
                      style={{
                        color: "#4F46E5",
                        background: "none",
                        border: "none",
                        fontSize: "14px",
                        textDecoration: "underline",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Click here
                    </button>{" "}
                    to view details.
                  </p>
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
