"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const menuItems = [
  { title: "Home", id: "home" },
  { title: "Story", id: "story" },
  { title: "Process", id: "process" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      90; // Navbar height

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center">
              SC
            </div>

            <div className="text-left">
              <h2
                className={`font-bold text-xl ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Skyline
              </h2>

              <p
                className={`text-xs tracking-[4px] ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                CONSTRUCTION
              </p>
            </div>
          </button>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {menuItems.map((item) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition hover:text-orange-600 font-medium ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.title}
              </button>

            ))}

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-5">

            <div
              className={`flex items-center gap-2 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <Phone size={18} />

              <span className="font-medium">
                +91 8626034157
              </span>
            </div>

            <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
              Get Quote
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-20 left-0 w-full bg-white z-40 overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">

          {menuItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-xl font-semibold hover:text-orange-600"
            >
              {item.title}
            </button>

          ))}

          <button className="bg-orange-600 text-white py-4 rounded-xl mt-4">
            Get Quote
          </button>

        </div>
      </div>
    </>
  );
}