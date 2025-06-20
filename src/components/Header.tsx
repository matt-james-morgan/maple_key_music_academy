import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-around items-center py-4 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} style={{ maxHeight: "100px" }} />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Maple Key Music Academy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#programs"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Programs
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#instructors"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Instructors
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
          ></button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a
                href="#home"
                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#programs"
                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Programs
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="#instructors"
                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Instructors
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
