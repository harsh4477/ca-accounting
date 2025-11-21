import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionIds = ["about", "services", "team", "blog", "contact"];

  // 👉 Intersection Observer for active section
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;
    
    observer.current = new IntersectionObserver((entries) => {
      // Clear active section when at the very top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }
      
      // Find the section closest to the top of the viewport
      let closestSection = null;
      let closestDistance = Infinity;
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const distance = Math.abs(rect.top);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = entry.target.id;
          }
        }
      });
      
      if (closestSection) {
        setActiveSection(closestSection);
      }
    }, {
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    });

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  // 👉 Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen(false);
    };

    // Set initial active section based on URL hash
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash);
    } else {
      setActiveSection('about'); // Default to first section
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 Check if section is active
  const isActive = (section: string) => {
    return activeSection === section ? 'text-green-500 font-semibold' : '';
  };

  // 👉 Smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL and active section
      window.history.pushState({}, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`z-50 sticky top-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`md:container md:mx-auto flex items-center justify-between py-4 px-4 ${
          isScrolled ? "text-gray-900" : "text-white"
        } ${isMenuOpen ? 'backdrop-blur-xs md:backdrop-blur-none bg-black/40 md:bg-transparent':''}`}
      >
        <Link className="text-2xl font-medium" to={""}>
          logo
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className={`text-lg font-medium hover:text-green-500 transition-colors cursor-pointer ${isActive('about')}`}
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </a>

          <a
            href="#services"
            className={`text-lg font-medium hover:text-green-500 transition-colors cursor-pointer ${isActive('services')}`}
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
          </a>

          <a
            href="#team"
            className={`text-lg font-medium hover:text-green-500 transition-colors cursor-pointer ${isActive('team')}`}
            onClick={(e) => handleSmoothScroll(e, "team")}
          >
            Team
          </a>

          <a
            href="#blog"
            className={`text-lg font-medium hover:text-green-500 transition-colors cursor-pointer ${isActive('blog')}`}
            onClick={(e) => handleSmoothScroll(e, "blog")}
          >
            Blog
          </a>

          <a
            href="#contact"
            className={`text-lg font-medium hover:text-green-500 transition-colors cursor-pointer ${isActive('contact')}`}
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md focus:outline-none w-10 h-5 relative"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all absolute ${
              isScrolled ? "bg-gray-900" : "bg-white"
            } ${isMenuOpen ? "rotate-45 translate-y-1.5 top-[9px]" : "top-0"}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all ${
              isScrolled ? "bg-gray-900" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all absolute ${
              isScrolled ? "bg-gray-900" : "bg-white"
            } ${isMenuOpen ? "-rotate-45 -translate-y-1.5 top-5" : "bottom-0"}`}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xs ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        } ${isScrolled ? "bg-white text-gray-900" : "bg-black/40 text-white"}`}
      >
        <div className="md:container md:mx-auto flex flex-col gap-4 py-4 px-4">
          <a
            href="#about"
            className="text-base font-medium"
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#services"
            className="text-base font-medium"
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
          </a>
          <a
            href="#team"
            className="text-base font-medium"
            onClick={(e) => handleSmoothScroll(e, "team")}
          >
            Team
          </a>
          <a
            href="#blog"
            className="text-base font-medium"
            onClick={(e) => handleSmoothScroll(e, "blog")}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-base font-medium"
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
