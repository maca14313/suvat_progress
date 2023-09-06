import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import './app.css';
import Reg from './compenent/reg/Reg'
import PhoneNumberList from './compenent/reg/PhoneNumberList';
import MemberProfile from './compenent/reg/MemberProfile';
import ListOfMembers from './compenent/reg/ListOfMembers';
import ListOfPhoneNumber from './compenent/reg/ListOfPhoneNumber';
import UpdateMember from './compenent/reg/UpdateMember';
import AdminUpdateMember from './compenent/reg/AdminUpdateMember';
import HomePage from './compenent/reg/HomePage';

function App() {
  //        <Route path="/driverhome/:name/:id" element={<DriverHome/>}/>
  return (
    <Router>

    <div className="App">
  
      <Routes>
        
        <Route path="/registretion" element={<Reg/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin_edit" element={<PhoneNumberList/>}/>
        <Route path="/memberprofile" element={<MemberProfile/>}/>
        <Route path="/listofmembers" element={<ListOfMembers/>}/>
        <Route path="/listofphonenumber" element={<ListOfPhoneNumber/>}/>
        <Route path="/updatemember/:phone_number" element={<UpdateMember/>}/>
        <Route path="/adminupdatemember/:phone_number" element={<AdminUpdateMember/>}/>




     



     </Routes>

    </div>
    
    </Router>
  );
}

export default App;
