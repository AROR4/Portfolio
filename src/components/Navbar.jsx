import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  // All route-based navigation
  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/works" },
  ];

  const handleClick = (item) => {
    setActive(item.name);
    navigate(item.path);
  };

  return (
    <nav className="bg-[#111010] mx-auto flex w-[90%] max-w-5xl items-center justify-between rounded-xl px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-lg font-medium">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            className={`capitalize px-2 py-1 rounded-md transition-colors duration-200 ${
              active === item.name
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Let's Talk Button */}
      <div
        onClick={() => navigate("/contact")}
        className="ml-6 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer"
      >
        Let's Talk
      </div>
    </nav>
  );
};

export default Navbar;
