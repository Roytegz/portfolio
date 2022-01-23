import React from "react";
import Typical from "react-typical";
import './Profile.css';
import ScrollService from "../../../Utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">

            <a href="https://github.com/Roytegz">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/itz_royy">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
              </div>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text"> Roy </span> 
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      
                      "Front-end dev 💻",
                      1000,
                      "Enthusiastic dev 💯",
                      1000,
                      "Reactjs dev 🤩",
                      1000,
                      "MERN stack dev 💎",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tag-line">
                  I build web applications with awesome operations
                </span>
              </span>
            </div>
            </div>
            <div className="profile-options">
                <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                > Hire Me </button>

                
              
                    
                <a href="#" download="CV.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
