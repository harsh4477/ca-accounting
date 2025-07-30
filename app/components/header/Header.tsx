import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="relative z-50">
      <nav className="container mx-auto flex items-center justify-between py-8 px-4 text-white">
        <Link className=" text-2xl font-medium" to={""}>
          logo
        </Link>
        <div className="flex items-center gap-6">
          <Link className=" text-lg font-medium" to={"#home"}>
            Home
          </Link>
          <Link className=" text-lg font-medium" to={"#about"}>
            About
          </Link>
          <Link className=" text-lg font-medium" to={"#contact"}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
