import React from "react";
import { Mail, Instagram, Linkedin, Github, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          I’m always open to discussing new projects or opportunities. Reach out!
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto text-white">
        {[
          {
            href: "mailto:vshadafathima@gmail.com",
            icon: <Mail size={30} />,
            label: "Email",
          },
          {
            href: "https://www.linkedin.com/in/shadafathimav/",
            icon: <Linkedin size={30} />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/ShadaFathima",
            icon: <Github size={30} />,
            label: "GitHub",
          },
          {
            href: "https://www.instagram.com/_shada_v_/",
            icon: <Instagram size={30} />,
            label: "Instagram",
          },
          {
            href: "https://facebook.com/v.shada.79/",
            icon: <Facebook size={30} />,
            label: "Facebook",
          },
        ].map(({ href, icon, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group p-4 rounded-full bg-white/10 transition-all duration-300 hover:bg-yellow-400 hover:scale-110"
          >
            <div className="text-white group-hover:text-black">{icon}</div>
          </a>
        ))}
      </div>
    </section>
  );
}