import React from 'react'
import './Project_cards.css'
const Project_cards = ({pic,heading,detail1,detail2,link}) => {
  return (
    <div className='projectcard'>
        <img src={pic} alt="" />
        <span>{heading}</span>
        <span>{detail1}</span>
        <span>{detail2}</span>
        <a href={link}>
        <button className='c-button1'>Github</button>
        </a>
        
        
        
       
    </div>
  )
}

export default Project_cards