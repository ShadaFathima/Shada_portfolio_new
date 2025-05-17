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
    <section id="home" className="font-sans flex flex-col md:flex-row items-center  justify-center  py-16 sm:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
 <div className="flex-1 text-left ml-2rem px-3 sm:px-4 md:px-4 lg:px-10">
  <p className="text-yellow-500 text-base sm:text-lg md:text-xl">HELLO!</p>

  <h1 className="text-5xl sm:text-xl md:text-3xl lg:text-5xl font-bold mt-2 leading-tight">
    I'm <span className="text-yellow-500">Shada<br className="hidden sm:block"/> Fathima</span>
  </h1>

  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
    I am a Developer |
  </p>

  <div className="mt-6">
    <a
      href="#about"
      className="inline-block border border-yellow-500 text-yellow-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
    >
      ABOUT ME
    </a>
  </div>
</div>


      <div className="flex-1 flex justify-center relative mt-10 md:mt-0 md:mr-20">
        <img
          src={mypic}
          alt="profile"
          className="w-60 sm:w-100 md:w-[27.5rem] h-60 sm:h-72 md:h-[27.5rem] rounded-full object-cover animate-float profile-image mr-10"
          style={{ ...shadowStyle, ...transformStyle }}
        />
        <div className="mt-6 "> 
          <span className="outlined-text absolute bottom-[-2rem] text-white font-bold tracking-wide opacity-50">
            SHADA
          </span>

        </div>
      </div>
    </section>
  );
}
