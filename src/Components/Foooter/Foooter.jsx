import React from 'react'
import './Foooter.css'
import Wave from "../../img/wave.png";

import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

const Foooter = () => {
  return (
    <div className='footer'>
        <img src={Wave}alt="" 
        style={{width:'100%'}}/>
        <div className="f-content">
            <span>gazalmonga2204@gmail.com</span>
            <div className="f-icons">
            <a href="https://github.com/Gazal0828">
                <Github color='white' size="3rem"/>
            </a>
            <a href="https://www.linkedin.com/in/gazal-monga-4400a71b2/">
                <LinkedIn color='white' size="3rem"/>
            </a>
               
            </div>

        </div>

    </div>
  )
}

export default Foooter