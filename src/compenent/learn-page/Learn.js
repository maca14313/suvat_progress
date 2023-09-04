import React from 'react'
import './learn.css';
import SideBar from '../learn/side-bar/SideBar';
import MainLearn from '../learn/learn-main/MainLearn';
function Learn() {
  return (
    <div className='learn-con'>
        
        <SideBar/>
        <MainLearn/>
      

    </div>
  )
}

export default Learn