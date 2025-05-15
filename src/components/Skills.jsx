import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import { SiR } from 'react-icons/si';
import { MdGroups, MdPsychologyAlt, MdHandshake, MdPublic, MdLightbulb, MdAccessTimeFilled } from 'react-icons/md';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-black text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Tools, technologies & traits that define my work.
        </p>
      </div>

      {/* Technical Skills */}
      <h3 className="text-xl font-semibold mb-6 text-yellow-400 text-center">Technical Skills</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-5xl mx-auto mb-16">
        {[
          { icon: <FaHtml5 className="text-orange-500 text-7xl" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { icon: <FaCss3Alt className="text-blue-500 text-7xl" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          { icon: <FaReact className="text-cyan-400 text-7xl" />, link: "https://reactjs.org/" },
          { icon: <FaPython className="text-blue-300 text-7xl" />, link: "https://www.python.org/doc/" },
          { icon: <FaNodeJs className="text-green-500 text-7xl" />, link: "https://nodejs.org/en/docs" },
          { icon: <SiR className="text-indigo-400 text-7xl" />, link: "https://www.r-project.org/other-docs.html" },
        ].map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 flex justify-center items-center hover:scale-125 transition-transform duration-500  ease-in-out  shadow-lg w-full h-25 aspect-ratio-1/1"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Personal Skills */}
      <h3 className="text-xl font-semibold mb-6 text-yellow-400 text-center">Personal Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {[
          {
            icon: <MdGroups className="text-pink-400 text-5xl mb-2" />,
            name: "Teamwork",
            desc: "Thrives in group settings, contributing actively and harmoniously.",
            link: "https://en.wikipedia.org/wiki/Teamwork"
          },
          {
            icon: <MdPsychologyAlt className="text-blue-400 text-5xl mb-2" />,
            name: "Problem Solving",
            desc: "Approaches challenges analytically and creatively to find solutions.",
            link: "https://en.wikipedia.org/wiki/Problem_solving"
          },
          {
            icon: <MdHandshake className="text-green-400 text-5xl mb-2" />,
            name: "Collaboration",
            desc: "Enjoys co-creating with diverse minds to achieve shared goals.",
            link: "https://en.wikipedia.org/wiki/Collaboration"
          },
          {
            icon: <MdLightbulb className="text-yellow-300 text-5xl mb-2" />,
            name: "Creativity",
            desc: "Brings originality and unique ideas into technical and visual tasks.",
            link: "https://en.wikipedia.org/wiki/Creativity"
          },
          {
            icon: <MdPublic className="text-purple-400 text-5xl mb-2" />,
            name: "Adaptability",
            desc: "Quick to adjust and stay effective in new or shifting environments.",
            link: "https://en.wikipedia.org/wiki/Adaptability"
          },
          {
            icon: <MdAccessTimeFilled className="text-red-400 text-5xl" />,
            link: "https://en.wikipedia.org/wiki/Time_management",
            name: "Time Management",
            desc: "Organizing and planning how to divide time effectively across tasks."
          },
        ].map(({ icon, name, desc, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-5 rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-700 ease-in-out shadow-md"
          >
            {icon}
            <h4 className="text-white font-semibold mt-2">{name}</h4>
            <p className="text-gray-400 text-sm mt-1">{desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
