import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Counter } from './features/counter/Counter';


import HomePage from './compenent/reg/HomePage';
import MemberProfile from './compenent/reg/MemberProfile';
import Reg from './compenent/reg/Reg'
import LogInMember from 'compenent/reg/LogInMember';




function App() {
  // for admin git remote add origin https://github.com/maca14313/nameApp1.git
  const [routerAuth,setRouterAuth]=useState(true)

  return (
    <Router basename='/nameApp1'>

    <div className="App">
  
      <Routes>
        
        

       


        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registretion" element={<Reg/>}/>
        <Route path="/loginmember" element={<LogInMember/>}/>
        <Route path="/memberprofile" element={<MemberProfile/>}/>



     



     </Routes>

    </div>
    
    </Router>
  );
}

export default App;
