import React, { useState, useEffect } from "react";
import mypic from '../assets/mypic.jpg';

export default function HeroSection() {
  const [shadowStyle, setShadowStyle] = useState({});
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const image = document.querySelector(".profile-image");
      if (!image) return;

      const rect = image.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const shadowX = offsetX / 15;
      const shadowY = offsetY / 15;
      const shadowSize = Math.abs(offsetY) / 10;

      setShadowStyle({
        boxShadow: `${shadowX}px ${shadowY + shadowSize}px 25px rgba(255, 255, 255, 0.3)`
      });
      setTransformStyle({
        transform: `translateY(${offsetY / 10}px)`
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="font-sans flex flex-col md:flex-row items-center justify-center py-12 xs:py-16 sm:py-20 px-4 sm:px-6 bg-black relative overflow-hidden min-h-screen"
    >
      <div className="flex-1 text-center md:text-left md:ml-10 px-2 sm:px-6">
        <p className="text-yellow-500 text-xs sm:text-sm md:text-lg uppercase tracking-wide">HELLO!</p>

        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold mt-2 leading-snug">
          I'm <span className="text-yellow-500 ">Shada<br className="hidden sm:block" /> Fathima</span>
        </h1>

        <p className="mt-3 text-xs xs:text-sm sm:text-lg md:text-xl text-gray-300">I am a Developer |</p>

        <div className="mt-6">
          <a
            href="#about"
            className="inline-block border border-yellow-500 text-yellow-500 px-4 py-1.5 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300 text-xs sm:text-sm"
          >
            ABOUT ME
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-8 md:mt-0 md:mr-10 w-full">
        <div className="relative">
          <img
            src={mypic}
            alt="profile"
            className="w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover animate-float profile-image"
            style={{ ...shadowStyle, ...transformStyle }}
          />

          <span className="outlined-text absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide opacity-50">
            SHADA
          </span>
        </div>
      </div>
    </section>
  );
}
