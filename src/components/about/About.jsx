import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile-pic (2).png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="Jyoti Verma" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2+ years <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>B.E. in Information Science and Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            A go-getter with a knack for problem-solving and a love for web
            development. After graduating in 2018, my journey to find my place
            in the professional world began. Those early years were a whirlwind
            of uncertainty and self-discovery. Navigating through support roles
            in the initial years, I felt a lack of fulfillment, pushing me to
            seek a more rewarding path.
          </p>
          <p>
            In 2022, I entered the world of Frontend Developement with a focus
            on React JS. This journey has been about turning ideas into
            solutions, one React component at a time.
          </p>
          <p>
            <ul>
              <span>What Defines Me: </span>
              <li>
                Versatility: From support roles to React development, I've
                embraced diverse challenges.
              </li>
              <li>
                Passion for Learning: Every coding challenge is an opportunity
                to grow, and I thrive on the excitement of constant improvement.{" "}
              </li>
              <li>
                Problem Solver: Breaking down complex issues into manageable
                solutions is where I find my stride.
              </li>
            </ul>
          </p>
          <p>
            With each setback, I see an opportunity to learn and evolve. My
            heart lies in creating seamless user experiences through coding.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
