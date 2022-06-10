import React from 'react'
import './Achievement.css'
import Problem_solving from '../../img/Problem_sol_badge.png';
import CBadge from '../../img/c++_badge.png';
import Java_Badge from '../../img/java_badge.png';
import Leetcode from '../../img/leetcode.png'
const Achievement = () => {
  return (
    <div className='myachievement'id='Achievements'>
         {/* for problem solving */}
        <div className="achievement">
            <div className="circle"></div>
            <a href="https://www.hackerrank.com/gazalmonga2204">
               <img src={Problem_solving}alt="" />
               </a>
               <span>4 star</span>
               <span>Hackerrank</span>
               <a href='https://www.hackerrank.com/gazalmonga2204'/>
            
        </div>
         {/* for c++ */}
        <div className="achievement">
            <div className="circle"> </div>
            <a href="https://www.hackerrank.com/gazalmonga2204">
               <img src={CBadge}alt="" />
               </a>
               <span>5 star</span>
               <span href ="https://www.hackerrank.com/gazalmonga2204">Hackerrank</span>
           </div>
       
        
         <div className="achievement">
            <div className="circle"></div>
            <a href="https://www.hackerrank.com/gazalmonga2204">
               <img src={Java_Badge}alt="" />
               </a>
               <span>4 star</span>
               <span>Hackerrank</span>
            
        </div>
         
        <div className="achievement">
            <div className="circle"> </div>
            <a href="https://leetcode.com/Gazal_08/">
               <img src={Leetcode}alt="" />
               </a>
               <span>Solved 200+ Problems</span>
               <span>Leetcode</span>
        </div>
    </div>
  )
}

export default Achievement;