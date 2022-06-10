import React from 'react'
import './Education.css'
import School_1 from "../../img/school_1.png";
import School_2 from "../../img/school_2.png";
import Graduation from "../../img/graduation.png";
import Card from '../Card/Card';
import Resume from "../Education/resume.pdf";

const Education = () => {
  return (
    <div className='education' id='Education'>
        {/* left-side */}
        <div className="awesome">
            <span>Education</span>
            <span>“Education is not the filling of a Pail, But the Lighting of a Fire”</span>
            <a href={Resume}download>
            <button className='button s-button'>Download Resume</button>
            </a>
            <div className='blur s-blur1'style={{background:"#ADD8E6"}}></div>
        </div>
        {/* right-side */}
        <div className="cards">
           <div style={{left:'17rem',top:'-1rem'}}>
               <Card
            //    first-card
                pic = {School_1}
                heading = {'Matriculation '}
                detail1 = {'Board : CBSE'}
                detail2=   {'Year  : 2017'}
                detail3=   {' CGPA : 9.2/10'}
                detail4=   {'School : A.V.International'}
                detail5=   {'Public School ,Sirsa'}
                />
           </div>
           <div style={{left:'-9rem',top:'10rem'}}>
               <Card
            //    second-card
                pic = {School_2}
                heading = {'Intermediate'}
                detail1 = {'Board : CBSE'}
                detail2=   {'Year  : 2019'}
                detail3=   {' % :   68%'}
                detail4=   {'School : A.V.International'}
                detail5=   {'Public School ,Sirsa'}
                />
           </div>

           <div style={{left:'11rem',top:'18rem'}}>
               <Card
            //    Third-card
                pic = {Graduation}
                heading = {'Engineering'}
                detail2=   {'Year  : 2023'}
                detail3=   {' CGPA : 7.86/10(78.6)'}
                detail4=   {'Uni: Chandigarh University'}
                />
           </div>
           <div className='blur s-blur2'style={{background:"var(--purple)"}}></div>



        </div>

    </div>
  )
}

export default Education