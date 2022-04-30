import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Avinash Kumar Singh</span>.<br /> I am a Java Springboot Developer and also love
          experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.JPG").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
