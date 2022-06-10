import React from 'react'
import "./Skills.css"
import Cplusplus from "../../img/cplusplus.png";
import Java from "../../img/java.png";
import Reactjs from "../../img/reactjs.png";
import Html from "../../img/html-5.png";
import CSSE3 from "../../img/css-3.png";
import JS from "../../img/js.png";
import Link from 'react-scroll/modules/components/Link';

const Skills = () => {
  return (
    <div className='skills' id='Skills'>
         {/* left-side */}
         <div className="awesome">
            <span>Skills</span>
            <span>“Programming is a skill best acquired by practice and example rather than from books.”</span>
            <Link to="contact" smooth={true} spy={true}>
            <button className='button s-button'>Hire Me</button>
           </Link>
            
            <div className='blur s-blur1'style={{background:"#ADD8E6"}}></div>
        </div>
        {/* right-side */}
        <div className="s-right">
          <div className="s-maincircle">
            <div className="seccircle">
              <img src={Cplusplus} alt="" />
            </div>
            <div className="seccircle">
              <img src={Java} alt="" />
            </div>
            <div className="seccircle">
              <img src={Reactjs} alt="" />
            </div>
            <div className="seccircle">
              <img src={Html} alt="" />
            </div>
            <div className="seccircle">
              <img src={CSSE3} alt="" />
            </div>
            <div className="seccircle">
              <img src={JS} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills