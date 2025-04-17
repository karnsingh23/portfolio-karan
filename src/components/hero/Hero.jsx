import React from "react";
import { useEffect } from "react";
import profile from "../../assets/profile.png";
import laptop from "../../assets/laptop.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <div id="Home" className="hero-container">
        <div className="left-part">
          <div className="greet">
            <span className="mesg">Hii,</span>

            <span className="mesg">
              I'm <span id="highlight">KARAN</span>,
            </span>

            <div className="mesg">
              <ReactTyped
                strings={[
                  "a MERN Stack Developer",
                  "a Tech Enthusiast",
                  "a Frontend Developer",
                ]}
                typeSpeed={60}
                backSpeed={30}
                loop
              />
            </div>
          </div>
          <a href="#Contact" className="connect-btn">
            Let's Connect
          </a>
        </div>
        <div data-aos="fade-left" className="right-part">
          <img className="hero-img" src={profile} alt="profile-image" />
        </div>
      </div>
      <div className="hero-two">
        <div data-aos="fade-right" className="connect">
          <img className="laptop" src={laptop} alt="" />
          <div className="accounts">
            <a
              target="https://github.com/karnsingh23"
              href="https://github.com/karnsingh23"
            >
              <FiGithub className="acc" />
            </a>
            <a
              target="https://www.instagram.com/karnsingh_23/"
              href="https://www.instagram.com/karnsingh_23/"
            >
              <BsInstagram className="acc" />
            </a>
            <a
              target="https://www.linkedin.com/in/karan-singh23/"
              href="https://www.linkedin.com/in/karan-singh23/"
            >
              {" "}
              <FaLinkedinIn className="acc" />
            </a>
            <a href="#">
              <FaTwitter className="acc" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="code-block">
          <span className="keyword">const</span>{" "}
          <span className="variable">HelloWorld</span> = {"{\n"}
          <span className="indent key"> "_id"</span>:{" "}
          <span className="string">"127.0.0.1"</span>,{"\n"}
          <span className="indent key"> "name"</span>:{" "}
          <span className="string">"Karan Singh"</span>,{"\n"}
          <span className="indent key"> "developer"</span>:{" "}
          <span className="boolean">true</span>,{"\n"}
          <span className="indent key"> "technologies"</span>: [
          <span className="string">"js"</span>,{" "}
          <span className="string">"react"</span>,{" "}
          <span className="string">"node"</span>,{" "}
          <span className="string">"express"</span>,{" "}
          <span className="string">"..."</span>],{"\n"}
          <span className="indent key"> "interests"</span>: [
          <span className="string">"MERN"</span>,{" "}
          <span className="string">"AI"</span>,{" "}
          <span className="string">"DevOps"</span>,{" "}
          <span className="string">"Aws"</span>,{" "}
          <span className="string">"..."</span>]{"\n"}
          {"}"}
          <div className="blinker"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
