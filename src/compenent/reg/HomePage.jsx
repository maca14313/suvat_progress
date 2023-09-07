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

         <div className='aboutCon'>
               <div className='aboutConSub'>
                <h3 className='aboutConSubTitle'>About Suvat Progress</h3>
                <p className='aboutConSubTitleText'>It is true that when we work together, we learn more. Learning and growing together would be an effective method to build strong relationships and foster a healthy, supportive environment. This type of environment promotes people to collaborate, trust one another, and treat one another with dignity. 
                  It also assists people in being creative, coming up with new ideas, and solving issues. Everyone contributes to the group’s wisdom and shares their thoughts and feelings, ideas, and talents in a place where people learn and grow together. This makes people feel like they are a member of a group because everyone has a role to play in contributing to the overall learning process.
                  Growing is a continuous process that necessitates the integration of new skills and insights received from new data. I believe that knowledge and skills are gained through a joint effort between the teacher and the learner. 

Creating a sense of belonging and unity also helps with the process of learning and growing together. While everyone contributes their skills and knowledge to a project while working together, the environment develops a sense of belonging to something larger and more significant than oneself. Individuals can learn to support and rely on one another as a result, which can lead to increasing levels of collaboration and teamwork.
                  </p>
               </div>
               <div className='aboutConSub'>
                <h3 className='aboutConSubTitle'>About Suvat Progress</h3>
                <p className='aboutConSubTitleText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum exercitationem dolorum quisquam iure rerum nobis, hic iste repellendus est esse cum dignissimos cumque nam pariatur similique, tenetur, aspernatur eaque dicta adipisci at sed! Magni aut dolore nihil labore architecto aperiam, doloremque totam? Minus minima corporis iure ea tempora eveniet quod quia, illum sit voluptate fugit est id vitae beatae sequi dolorem rerum numquam, sapiente ipsa placeat magnam fuga consequatur sint? Fuga maiores modi laboriosam voluptate ducimus odit, enim vero tempore dolores molestiae facere veritatis assumenda ad mollitia voluptatum officiis soluta aliquid repellat beatae quam alias! Sequi cupiditate tempore aliquid ab.</p>
               </div>
         </div>

         
         

        </div>
    </div>
  )
}

export default HomePage