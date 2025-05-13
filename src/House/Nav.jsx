import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Share2 } from 'lucide-react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <div
        className={`px-3 py-2 flex justify-between items-center fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          scrolled
            ? 'bg-white shadow-lg border-b-4 text-black'
            : 'bg-black/10 backdrop-blur-none text-white'
        }`}
      >
        {/* Logo */}
        <h3 className="font-bold text-2xl px-10">
          <img src={Logo} alt="Logo" className="w-32 h-auto p-2" />
        </h3>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 underline' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 underline' : ''
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 underline' : ''
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          className="md:hidden block"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-black shadow-2xl transform transition-transform duration-300 md:hidden z-40 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl font-bold"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <nav className="flex flex-col items-center justify-center p-6 h-full">
            <ul className="flex flex-col gap-6 font-bold text-lg text-center">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500 underline' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500 underline' : ''
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500 underline' : ''
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Fixed Share Button */}
      <div className="fixed bottom-8 right-8">
  <button
    onClick={() => setShowIcons(!showIcons)}
    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
  >
    <Share2 size={20} />
  </button>

        {/* Social Icons - Reveal on Toggle */}
        {showIcons && (
  <div className="top-12 flex flex-col items-center gap-3 bg-white text-black px-4 py-3 rounded-xl shadow-md">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={30} color="#1877F2" /> {/* Facebook Blue */}
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={30} color="#1DA1F2" /> {/* Twitter Blue */}
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} color="#E1306C" /> {/* Instagram Pink */}
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={30} color="#FF0000" /> {/* YouTube Red */}
    </a>
  </div>
)}
</div>
    </>
  );
};

export default Nav;
