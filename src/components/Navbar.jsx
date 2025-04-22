import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Container from "./Container";
import logo from "../assets/images/logo.png";

const navItems = [
  {
    label: "Phone Systems",
    subMenu: ["Cloud PBX", "On-Prem PBX", "VoIP Handsets"],
  },
  {
    label: "Products",
    subMenu: ["Hardware", "Software", "Accessories"],
  },
  {
    label: "Industries",
    subMenu: ["Retail", "Healthcare", "Education"],
  },
  {
    label: "AI Voice",
    subMenu: ["Voice Assistant", "Call Transcripts", "Analytics"],
  },
  {
    label: "About Us",
    subMenu: ["Company", "Team", "Careers"],
  },
  {
    label: "Contact",
    subMenu: [],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const mobileNavRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setOpenDropdowns({});
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="fixed w-full top-5 z-50">
      <Container>
        <nav className="bg-white shadow-md rounded-2xl px-6 py-4 flex items-center justify-between relative z-50">
          {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-md rounded-none px-6 py-4 flex items-center justify-between z-50"> */}
          {/* Logo */}
          <div className="flex items-center gap-2 text-black font-bold text-lg">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            {/* <span>EN-LINC</span> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex gap-8 text-black font-medium">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1">
                  {item.label}
                  {item.subMenu.length > 0 && <ChevronDown size={16} />}
                </button>
                {item.subMenu.length > 0 && (
                  <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top z-40">
                    {item.subMenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:1300952380"
            className="hidden xl:inline-block bg-gradient-to-r from-[#142462] to-[#2A6A9E] text-white font-semibold px-5 py-2 rounded-md"
          >
            1300 952 380
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav */}
          {menuOpen && (
            <div
              ref={mobileNavRef}
              className="absolute top-20 left-0 w-full bg-white shadow-md rounded-b-2xl px-6 py-4 flex flex-col gap-4 xl:hidden z-40"
            >
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <button
                    onClick={() =>
                      item.subMenu.length > 0 && toggleDropdown(item.label)
                    }
                    className="flex justify-between items-center font-medium w-full"
                  >
                    {item.label}
                    {item.subMenu.length > 0 &&
                      (openDropdowns[item.label] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </button>

                  {/* Mobile Submenu */}
                  {item.subMenu.length > 0 && openDropdowns[item.label] && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 text-sm text-gray-700 animate-fade-in">
                      {item.subMenu.map((sub, idx) => (
                        <a key={idx} href="#" className="hover:underline">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:1300952380"
                className="bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold px-5 py-2 rounded-md text-center"
              >
                1300 952 380
              </a>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
