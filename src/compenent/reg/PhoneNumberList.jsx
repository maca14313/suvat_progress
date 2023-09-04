import React, { useEffect, useState } from 'react'
import './reg.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {hostVar} from './VarImportes'


function PhoneNumberList() {
  

  return (
    <div className='regCon'>
    <form action="" className='formCon' >

    
    
    <Link to={'/listofphonenumber'}>show list of phone number</Link>
    <Link to={'/listofmembers'}>show list of members</Link>





        



    </form>
    <div></div>
 </div>

  )
}

export default PhoneNumberList