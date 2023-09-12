import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {hostVar} from '../reg/VarImportes'
import '../reg/reg.css'
import AdminLogIn from './AdminLogIn'



function PhoneNumberList() {
  const auth=JSON.parse(localStorage.getItem('auth'))


  return auth=='okk'?  (
    <div className='regCon' >

     

    <form style={{display:auth?'':'none'}} action="" className='formCon formConIntroCon' >
    <h1>Welcom To Suvat Progress</h1>
     <h3 className='margin'> This is admin page</h3>
    <Link className='formCon formConIntro ' to={'/listofphonenumber'}>show list of phone number</Link>
    <Link className='formCon formConIntro' to={'/listofmembers'}>show list of members</Link>
    





        



    </form>
    <div></div>
 </div>

  ):<AdminLogIn/>
}

export default PhoneNumberList