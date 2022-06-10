import React from 'react'
import './Projects.css'
import Basket from "../../img/basket.png";
import Online_Chat from "../../img/chat.png";

import Project_cards from '../Project_cards/Project_cards';

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <div className='awsome'>
            {/* heading */}
            <span>Projects</span>
           </div>
        
        {/* center-side */}
        
         <div className="card_project"> 
         <div style={{left:'27rem',top:'-1rem'}}>
               <Project_cards 
           //    first-card
                pic = {Online_Chat}
                heading = {'SkyBox'}
                detail1={  'A Chatting application including group and personal chats.'}
                detail2={'Technology Used: React.js, CSS, Express.js, MongoDB, Node.js, Socket.io'}
                link={'https://github.com/Gazal0828/myproject_skybox'}
                
                />
                
</div>
           <div style={{left:'4rem',top:'8rem'}}>
           
               <Project_cards
               //second-card
                pic = {Basket}
                heading = {'Local Basket'}
                detail1={'Developed a full stack online grocery shopping website using MERN stack.'}
                detail2={'Technology Used: React.js, CSS, Express.js, MongoDB, Node.js '}
                link={'https://github.com/Gazal0828/Local-Basket'}
                />
                
          </div>
           
           {/* <div style={{left:'37rem',top:'9.5rem'}}>
               <Project_cards
           //    Third-card
                pic = {Graduation}
                heading = {'Engineering'}
                detail2=   {'Year  : 2023'}
                detail3=   {' CGPA : 7.86/10(78.6)'}
                detail4=   {'Uni: Chandigarh University'}
                />
           </div>  */}
           <div className='blur s-blur2'style={{background:"var(--purple)"}}></div>
    </div>
    </div>      

   
  )
}

export default Projects 


  