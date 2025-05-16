import React from "react";
import pic from '../assets/pic2.jpg';
import resumePDF from '../assets/SHADAFATHIMA_RESUME.pdf';
import { Briefcase, Heart } from "lucide-react";
import FloatingNav from "./FloatingNav";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-12 sm:py-20  bg-black text-white relative min-h-screen">
      <FloatingNav />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 max-w-5xl mx-auto">

        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
          <img src={pic} alt="about" className="rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover shadow-lg" />
        </div>

        <div className="text-left w-full">
          <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-white">
            Who <span className="text-yellow-500">Am I..?!</span>
          </h2>
          <table className="w-full text-base sm:text-lg text-left table-auto">
            <tbody>
              {[
                ['Name:', 'Shada Fathima V'],
                ['Date of Birth:', 'November 17, 2003'],
                ['Address:', 'Vayalilkath House, Feroke, Calicut, Kerala, India.'],
                ['Pin Code:', '673631'],
                ['Email:', 'vshadafathima@gmail.com'],
              ].map(([label, value], index) => (
                <tr key={index} className="align-top">
                  <td className="pr-3 sm:pr-4 py-2 sm:py-3 font-semibold whitespace-nowrap">{label}</td>
                  <td className="py-2 sm:py-3 break-words">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6">
            <a href={resumePDF} download>
              <button className="ml-0 sm:ml-4 mt-4 sm:mt-0 border border-yellow-500 text-yellow-500 px-5 py-2 rounded hover:bg-yellow-600 hover:text-white transition-all duration-300">
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 max-w-6xl mx-auto bg-white/10 p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10 text-center">

          <div className="flex-1">
            <Briefcase className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 mb-2 mx-auto" />
            <h3 className="text-yellow-600 text-lg sm:text-xl font-semibold">The Professional Me</h3>
            <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
              I'm a tech enthusiast driven by curiosity and a love for solving real-world problems through technology. Whether it's building intelligent systems, experimenting with machine learning models, or developing clean and responsive user interfaces, I enjoy working across the full stack to bring ideas to life.
              <br /><br />
              My interests span across data science, AI, image processing, and full-stack development. I’m always exploring new tools, frameworks, and concepts to stay sharp and innovative.
              <br /><br />
              Outside of development, I enjoy deep dives into tech trends, contributing to open-source projects, and turning ideas into tangible results.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center">
              <Heart className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 mb-2" />
              <h3 className="text-yellow-600 text-lg sm:text-xl font-semibold">
                Soul Behind the <span className="text-white">CODE</span>
              </h3>
            </div>
            <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
              While technology fuels my professional journey, I find joy in the simple, meaningful experiences that shape who I am. I enjoy engaging with like-minded individuals, exchanging ideas, and growing through networking and collaboration. Creativity has always been a part of me—I love drawing, listening to music, and capturing inspiration from the world around me.
              <br /><br />
              Traveling offers me fresh perspectives, and spending time with loved ones keeps me grounded. These moments away from the screen energize me, allowing me to return to my work with renewed passion and insight.
            </p>
          </div>
        </div>
      </div>

      <br /><hr />
    </section>
  );
}
