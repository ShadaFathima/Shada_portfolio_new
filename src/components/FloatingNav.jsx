import {
  Home,
  User,
  Hammer,
  Folder,
  Mail,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Hammer, label: "Skills" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const SectionCornerNav = () => {
  const [hovered, setHovered] = useState(false);
  const [radius, setRadius] = useState(120);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Disable nav below 480px
      if (width < 480) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      // Adjust radius responsively
      if (width < 500){
        setRadius(80);
      } else if (width < 768) {
        setRadius(100);
      } else {
        setRadius(120);
      }
    };

    handleResize(); // Run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showNav) return null;

  return (
    <div
      className="hidden lg:block absolute top-1/2 right-0 z-50 translate-y-[-50%] overflow-visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: radius + 80, height: radius + 80 }}
    >
      {/* Trigger Button */}
      <div className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-1/2">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all duration-300">
          <Menu size={24} />
        </div>
      </div>

      {/* Radial Icons */}
      <div
        className={`absolute right-0 top-1/2 transition-all duration-500 origin-center pointer-events-none ${
          hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transform: "translateY(-50%)" }}
      >
        {navItems.map((item, index) => {
          const total = navItems.length;
          const angle = Math.PI * (index / (total - 1)) - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              title={item.label}
              className="absolute pointer-events-auto"
              style={{
                right: `${x}px`,
                top: `${y}px`,
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md">
                <Icon size={24} className="sm:size-[28px]" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SectionCornerNav;
