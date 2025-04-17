import React from "react";
import "./Skills.css";
import html from "../../assets/html1.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react1.png";
import nodejs from "../../assets/nodejs.webp";
import expressjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";
import cplus from "../../assets/cplus.png";
import sql from "../../assets/sql.jpg";
import AOS from "aos"
import "aos/dist/aos.css"; 
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
        AOS.init({ duration: 1500, once: true });
      }, []);
  return (
    <>
      <div id="Skills" className="skills-container">
        <h1 data-aos="fade-up">Skills</h1>
        <div className="skill-images">
          <div className="part-one">
            <div data-aos="fade-right" className="skill-wrapper">
              <img className="skill-img html" src={html} alt="" />
              <span className="popup-msg">Markup</span>
            </div>
            <div data-aos="fade-down" className="skill-wrapper">
              <img className="skill-img css" src={css} alt="" />
              <span className="popup-msg">Styling</span>
            </div>
            <div data-aos="fade-left" className="skill-wrapper">
              <img className="skill-img js" src={js} alt="" />
              <span className="popup-msg">Language</span>
            </div>
            <div data-aos="fade-up" className="skill-wrapper">
              <img className="skill-img reactjs" src={react} alt="" />
              <span className="popup-msg">Framework</span>
            </div>
            <div data-aos="fade-right" className="skill-wrapper">
              <img className="skill-img nodejs" src={nodejs} alt="" />
              <span className="popup-msg">Backend Runtime</span>
            </div>
          </div>

          <div className="part-two">
            <div data-aos="fade-left" className="skill-wrapper">
              <img className="skill-img expressjs" src={expressjs} alt="" />
              <span className="popup-msg">Framework</span>
            </div>
            <div data-aos="fade-down" className="skill-wrapper">
              <img className="skill-img mongodb" src={mongodb} alt="" />
              <span className="popup-msg">Database</span>
            </div>
            <div data-aos="fade-up" className="skill-wrapper">
              <img className="skill-img cplus" src={cplus} alt="" />
              <span className="popup-msg">Language</span>
            </div>
            <div data-aos="fade-right" className="skill-wrapper">
              <img className="skill-img sql" src={sql} alt="" />
              <span className="popup-msg">Database</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
