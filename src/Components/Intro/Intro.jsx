import React from "react";
import './Intro.css'
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Gmail from "../../img/gmail.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";

const Intro = () => {
 
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Gazal</span>
          <span>
            I am committed to learning and self development so that I can
            consistently achieve better results
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
       <div className="i-icons">
         <a href="https://github.com/Gazal0828">
         <img src={GitHub} alt="" />
         </a>
         <a href="https://www.linkedin.com/in/gazal-monga-4400a71b2/">
         <img src={LinkedIn} alt="" />
         </a>
         <Link to="contact" smooth={true} spy={true}>
         <img src={Gmail} alt="" />
          </Link>
       </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl} alt="" />
        <img src={glassesimoji} 
         alt=""
          />
        <div style={{top:'4%',left:'65%'}}>
          <FloatingDiv image={Crown} txt1='CSE' txt2='Student'/>
        </div>
        <div style={{top:'18rem',left:'-2rem'}}>
          <FloatingDiv image={thumbup} txt1='Become' txt2='Developer'/>
        </div>
        {/* blur-divs */}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:'# C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>

        
      </div>
    </div>
  );
};

export default Intro;
