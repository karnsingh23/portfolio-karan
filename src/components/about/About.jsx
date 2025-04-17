import React, { useEffect } from "react";
import "./About.css";
import board from "../../assets/board.png";
import AOS from "aos";
import { ReactTyped } from "react-typed";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div id="About" className="about-container">
      <h1 data-aos="fade-right">About Me</h1>
      <div data-aos="fade-left" className="image-container">
        <img className="board" src={board} alt="" />
        <div className="about" id="about">
          <span className="typed-about">
            <ReactTyped
              strings={[
                "I'm a <span class='highlight-purple'>passionate</span> and <span class='highlight-blue'>dedicated</span> <span class='highlight-green'>MERN Stack Developer</span>.<br/>" +
                "I love building <span class='highlight-yellow'>dynamic</span> and <span class='highlight-orange'>responsive</span> web applications.<br/>" +
                "Experienced with <span class='highlight-sky'>React</span>, <span class='highlight-green'>Node.js</span>, <span class='highlight-yellow'>Express</span>, and <span class='highlight-purple'>MongoDB</span>.<br/>" +
                "Also skilled in <span class='highlight-blue'>CSS</span>, <span class='highlight-orange'>Tailwind</span>, <span class='highlight-sky'>JavaScript</span>, and <span class='highlight-purple'>Git</span>.<br/>" +
                "Let's build something <span class='highlight-green'>awesome</span> together!"
              ]}
              typeSpeed={45}
              backSpeed={20}
              startDelay={300}
              loop
              smartBackspace
              showCursor={false}
              contentType="html"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;