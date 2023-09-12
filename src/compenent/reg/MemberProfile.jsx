import React from 'react'
import { Link } from 'react-router-dom'
import {hostVar} from './VarImportes'


function MemberProfile() {
  const regInfo=JSON.parse(localStorage.getItem('regInfo')) 
  return (
<div className='regCon'>
          <h3 className='titleOfProfile'>Your Profile</h3>
          <h4 className='titleOfProfile' >Don`t forget to save your id</h4>
    <div  className='formCon' >
       <div className='row listCon idColor'><span>Id</span> <span>{regInfo?.id}</span></div>    
          <div className='row listCon'><span>First Name</span> <span>{regInfo?.name}</span></div>
          <div className='row listCon'><span>Middle Name</span> <span>{regInfo?.father_name}</span></div>
          <div className='row listCon'><span>Last Name</span> <span>{regInfo?.grand_father_name}</span></div>
          <div className='row listCon'><span>Gender</span> <span>{regInfo?.gender}</span></div>
          <div className='row listCon'><span>Batch</span> <span>{regInfo?.batch}</span></div>
          <div className='row listCon'><span>Phone_number</span> <span>{regInfo?.phone_number}</span></div>
          <div className='row listCon'><span>Email</span> <span>{regInfo?.email}</span></div>
          <div className='row listCon'><span>City</span> <span>{regInfo?.city}</span></div>
          <div className='row listCon'><span>Dept</span> <span>{regInfo?.dept}</span></div>
         <div className='row listCon'><span>Date</span> <span>{regInfo?.register_date}</span></div>

          <Link className='margin' to={`/updatemember/${regInfo?.phone_number}`}>Update Your Profile</Link>








    </div>
 </div>    
  )
}

export default MemberProfile