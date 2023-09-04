import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import {hostVar} from './VarImportes'

function HomePage() {
  return (
    <div className='homeCon'>
        <div className='welcomPage'>
         <div className='navCon'>
          <div className="navLogo">Suvat Progress</div>

          <div className="navLinksCon">
           
            <Link to={'/registretion'} className='navLink'>Sign In</Link>
           
          </div>

         </div>

         <div className='introCon'>
           <div className='introConIntro'>
            <div className='introConIntroText'>Coming together is a beginning; keeping together is progress; working together is success.
           growing financially is a journey that requires time, effort, and patience. But with a plan, investment in ourself, calculated risks and discipline we can achieve our financial goals</div></div>
           <div className='introConImgCon'></div>
         </div>


         

        </div>
    </div>
  )
}

export default HomePage