import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 👉 Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 Smooth scroll
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`z-50 sticky top-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`container mx-auto flex items-center justify-between py-6 px-4 ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
      >
        <Link className="text-2xl font-medium" to={""}>
          logo
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </a>

          <a
            href="#services"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
          </a>

          <a
            href="#team"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "team")}
          >
            Team
          </a>

          <a
            href="#blog"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "blog")}
          >
            Blog
          </a>

          <a
            href="#contact"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
