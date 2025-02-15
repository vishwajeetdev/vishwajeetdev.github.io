import React, { useEffect, useState, useRef } from "react";
import { experiences } from "../config/config";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(
      Array(experiences.length).fill(false)
  );
  const timelineRef = useRef(null);
  const lastCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".experience-card");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (timelineRef.current && lastCardRef.current) {
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const lastCardTop = lastCardRef.current.getBoundingClientRect().top;
      timelineRef.current.style.height = `${lastCardTop - timelineTop + 40}px`;
    }
  }, [isVisible]);

  return (
      <div id="experience" className="relative flex flex-col items-center py-2 md:px-8">
        <h2 className="text-3xl font-bold mb-16 text-gray-100">Experience</h2>

        <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500"
            style={{ top: "6rem" }}
        ></div>

        {experiences.map((exp, index) => (
            <div
                key={index}
                className={`experience-card relative flex flex-col items-center mb-12 md:mb-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl transition-all duration-700 ease-out ${
                    isVisible[index]
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-90"
                }`}
                ref={index === experiences.length - 1 ? lastCardRef : null}
            >
              <div
                  className="absolute -top-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex justify-center items-center font-bold text-lg sm:text-xl lg:text-2xl shadow-lg"
                  style={{ color: "#fff" }}
              >
                {exp.year}
              </div>

              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-center w-full">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-100">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-300">
                  {exp.role}
                </p>
                <p className="text-xs sm:text-sm lg:text-base italic text-sky-400">
                  {exp.duration}
                </p>
                <ul className="text-xxs sm:text-sm lg:text-base mt-2 text-gray-200 list-disc pl-5 space-y-2 text-justify">
                  {exp.description.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
        ))}
      </div>
  );
};

export default Experience;
