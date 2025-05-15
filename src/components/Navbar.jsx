import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const hrefMap = {
    Home: '#home',
    About: '#about',
    Skills: '#skills',
    Projects: '#projects',
    Contact: '#contact',
  };

  return (
    <nav className="bg-black text-white px-6 py-4 ">
      <div className="flex justify-between items-center mt-8">
        <div className="text-3xl font-bold  ml-2 sm:ml-10">S H A D A</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-white font-semibold mr-10 sm:mr-20 text-lg">
          {menuItems.map((item) => (
            <a
              key={item}
              href={hrefMap[item]}
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden mr-2 sm:mr-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 font-semibold text-white bg-black py-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={hrefMap[item]}
              className="hover:text-yellow-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
