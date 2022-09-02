import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Year working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 30+ Completed </small>
            </article>
          </div>
          <p>
            Software engineer graduate with experience building REST websites
            front and backend using JavaScript and JavaScript framework like
            react ,looking for an opportunity to grow my skills in an innovative
            environment.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
