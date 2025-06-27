import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import useIsMobile from "../hook/useIsMobile"; // hook
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/works" },
  ];

  const handleClick = (item) => {
    setActive(item.name);
    setMenuOpen(false); // close menu on mobile
    navigate(item.path);
  };

  return (
    <nav className="bg-[#111010] mx-auto flex w-[90%] max-w-5xl items-center justify-between rounded-xl px-6 py-4 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </a>
      </div>

      {/* Desktop Links */}
      {!isMobile && (
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
      )}

      {/* Let's Talk Button (Always visible) */}
      <div
        onClick={() => navigate("/contact")}
        className="ml-6 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer"
      >
        Let's Talk
      </div>

      {/* Mobile Menu Icon */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4 text-white z-50">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Mobile Menu Drawer */}
      {isMobile && menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-[#111010] rounded-xl shadow-lg border border-white/10 py-4 px-6 space-y-4 text-white text-base font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={`block w-full text-left px-2 py-1 rounded-md transition-colors ${
                active === item.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
