import React, { useState, useEffect } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import logo from "../../assets/logo.png";
import { ImProfile } from "react-icons/im";
import { GiTargetPrize } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import "./Navbar.css";

function Navbar() {
  const [elevate, setElevate] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 0);

      const sections = ['Home', 'About', 'Skills', 'Work', 'Contact'];
      let current = 'Home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <div
      className='nav'
      style={{
        backgroundColor: elevate ? "#000" : "",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="logo-div">
        <a href="#Home"><img className='logo' src={logo} alt="Logo" /></a>
      </div>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li className={currentSection === 'Home' ? 'active' : ''} onClick={handleLinkClick}>
            <TiHomeOutline /><a href="#Home">Home</a>
          </li>
          <li className={currentSection === 'About' ? 'active' : ''} onClick={handleLinkClick}>
            <ImProfile /><a href="#About">About</a>
          </li>
          <li className={currentSection === 'Skills' ? 'active' : ''} onClick={handleLinkClick}>
            <GiTargetPrize /><a href="#Skills">Skills</a>
          </li>
          <li className={currentSection === 'Work' ? 'active' : ''} onClick={handleLinkClick}>
            <GoProjectSymlink /><a href="#Work">Work</a>
          </li>
          <li className={currentSection === 'Contact' ? 'active' : ''} onClick={handleLinkClick}>
            <LuPhoneCall /><a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={handleToggle}>
        {menuOpen ? <IoCloseSharp size={28} color="#fff" /> : <GiHamburgerMenu size={28} color="#fff" />}
      </div>
    </div>
  );
}

export default Navbar;
