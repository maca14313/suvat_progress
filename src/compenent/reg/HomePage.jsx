import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import {hostVar} from './VarImportes'

function HomePage() {
  const regInfo=JSON.parse(localStorage.getItem('regInfo')) 
  const [openModal,setOpenModal]=useState(0)

  const logOut=()=>{
    localStorage.removeItem('regInfo')
    window.location.reload(true)
  }
  return (
    <div className='homeCon'>
        <div className='welcomPage'>

        

         <div className='navCon' >

        

          <div className="navLogo">Suvat Progress
          
          <div className='navConOpener' onClick={()=>setOpenModal(1)}>
            <div className='navConOpenerLine'></div>
            <div className='navConOpenerLine'></div>
            <div className='navConOpenerLine'></div>
          </div> 
          
          </div>

          <div className="navLinksConMiddle">
           
            <div className="navLinksConMiddleItem">Home</div>
            <div className="navLinksConMiddleItem">About Us</div>
            <div className="navLinksConMiddleItem">Contact Us</div>
            <div className="navLinksConMiddleItem" style={{display:regInfo==undefined?'none':'block'}}>Payment</div>
            
           
          </div>

          <div className="navLinksCon">
          <Link to={'/memberprofile'} style={{display:regInfo==undefined?'none':'block'}}  className='navLink'>You</Link>
          <Link to={''} style={{display:regInfo==undefined?'none':'block'}} onClick={logOut}  className='navLink'>Log Out</Link>
          <Link to={'/loginmember'} style={{display:regInfo!=undefined?'none':'block'}} className='navLink'>Log In</Link>
          <Link to={'/registretion'} style={{display:regInfo!=undefined?'none':'block'}}  className='navLink'>Sign Up</Link>
          </div>

         </div>


         <div className='navConM' style={{display:openModal==1?'block':'none'}} >
                
                <div className='navConMCloser' onClick={()=>setOpenModal(0)}>
                  X
                </div>

<div className="navLogoM">Suvat Progress</div>

<div className="navLinksConMiddleM">
 
  <div className="navLinksConMiddleItemM">Home</div>
  <div className="navLinksConMiddleItemM">About Us</div>
  <div className="navLinksConMiddleItemM">Contact Us</div>
  <div className="navLinksConMiddleItemM" style={{display:regInfo==undefined?'none':'block'}}>Payment</div>
 
</div>

<div className="navLinksConM">
<Link to={'/memberprofile'} style={{display:regInfo==undefined?'none':'block'}}  className='navLinkM'>You</Link>
<Link to={''} style={{display:regInfo==undefined?'none':'block'}} onClick={logOut}  className='navLinkM'>Log Out</Link>
<Link to={'/loginmember'} style={{display:regInfo!=undefined?'none':'block'}}  className='navLinkM'>Log In</Link>
<Link to={'/registretion'} style={{display:regInfo!=undefined?'none':'block'}}  className='navLinkM'>Sign Up</Link>
</div>

</div>





         <div className='introCon'>
           <div className='introConIntro'>
            <div className='introConIntroText'>Coming together is a beginning; keeping together is progress; working together is success.
           growing financially is a journey that requires time, effort, and patience. But with a plan, investment in ourself, calculated risks and discipline we can achieve our financial goals</div></div>
           <div className='introConImgCon'></div>
         </div>

         <div className='aboutCon'>
               <div className='aboutConSub'>
                <h3 className='aboutConSubTitle'>About Suvat Progress</h3>
                <p className='aboutConSubTitleText'>It is true that when we work together, we learn more. Learning and growing together would be an effective method to build strong relationships and foster a healthy, supportive environment. This type of environment promotes people to collaborate, trust one another, and treat one another with dignity. 
                  It also assists people in being creative, coming up with new ideas, and solving issues. Everyone contributes to the group’s wisdom and shares their thoughts and feelings, ideas, and talents in a place where people learn and grow together. This makes people feel like they are a member of a group because everyone has a role to play in contributing to the overall learning process.
                  Growing is a continuous process that necessitates the integration of new skills and insights received from new data.                  </p>
               </div>
               <div className='aboutConSub'>
                <h3 className='aboutConSubTitle'>Our Believes </h3>
                <p className='aboutConSubTitleText'>we believe that knowledge and skills are gained through a joint effort between the teacher and the learner. 

Creating a sense of belonging and unity also helps with the process of learning and growing together. While everyone contributes their skills and knowledge to a project while working together, the environment develops a sense of belonging to something larger and more significant than oneself. Individuals can learn to support and rely on one another as a result, which can lead to increasing levels of collaboration and teamwork.</p>
               </div>
         </div>

         
         

        </div>
    </div>
  )
}

export default HomePage