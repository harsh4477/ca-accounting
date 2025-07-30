import React from "react";
import { Link } from "react-router";

const Header = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="relative z-50">
      <nav className="container mx-auto flex items-center justify-between py-8 px-4 text-white">
        <Link className="text-2xl font-medium" to={""}>
          logo
        </Link>
        <div className="flex items-center gap-6">
          {/* <a
            href="#home"
            className="text-lg font-medium"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Home
          </a> */}
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
