import React, { useEffect } from "react";
import Card from "../card/Card";
import momentily from "../../assets/momentily.mp4";
import codehub from "../../assets/codehub.mp4";
import movies from "../../assets/movies.mp4";
import getfit from "../../assets/getfit.mp4"
import "./Work.css"
import AOS from "aos"
import "aos/dist/aos.css"; 

function Work() {
   useEffect(() => {
        AOS.init({ duration: 1500, once: true });
      }, []);
  return (
    <>
      <div id="Work"  className="work-container">
        <h1 data-aos="fade-up">Works</h1>
        <div data-aos="fade-down-right" className="first-half">
          <Card
          
          video={momentily}
          heading="Social Media App"
          description="A MERN-based social media platform to post and share updates."
          technology={["MongoDB", "Express", "React", "Node.js"]}
          githubLink="https://github.com/karnsingh23/Social-Media"
          liveLink="https://momentily.netlify.app/login"
        />
        <Card
          video={codehub}
          heading="CodeHub – Your Dev Playground"
          description="A developer-focused platform built with the MERN stack, where users can explore programming documentation, take quizzes, and save their progress. CodeHub helps you learn HTML, CSS, JavaScript, and React all in one place — with an intuitive interface and MongoDB-backed authentication."
          technology={["MongoDB", "Express", "React", "Node.js"]}
          githubLink="https://github.com/karnsingh23/codeHub"
          liveLink="https://trycodehub.vercel.app/"
        /></div>

       <div data-aos="fade-up-left" className="second-half">
       <Card
          video={movies}
          heading="MoviesMania – Explore & Enjoy Cinema"
          description="A sleek movie browsing platform where users can explore trending films, view detailed info, and manage their favorites. Built with React, it offers a smooth UI for discovering your next watch — fast, responsive, and user-friendly."
          technology={["MongoDB", "Express", "React", "Node.js"]}
          githubLink="https://github.com/karnsingh23/Movies-Mania"
          liveLink="https://moviesmanias.vercel.app/"
        />

         <Card
          video={getfit}
          heading="GetFit – Your Fitness Companion"
          description="Get Fit is your go-to fitness platform offering personalized workout plans, nutrition tips, and progress tracking to help you achieve your health goals."
          technology={["MongoDB", "Express", "React", "Node.js"]}
          githubLink="https://github.com/karnsingh23/Get-Fit"
          liveLink="https://get-fit-nk.vercel.app/"
        />
      </div>
       </div>
    </>
  );
}

export default Work;
