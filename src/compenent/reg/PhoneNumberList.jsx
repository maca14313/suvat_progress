import React, { useEffect, useState } from 'react'
import './reg.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {hostVar} from './VarImportes'


function PhoneNumberList() {
  

  return (
    <div className='regCon'>

     <h1>Welcom To Suvat Progress</h1>
     <h3 className='margin'> This is admin page</h3>

    <form action="" className='formCon formConIntroCon' >
    <Link className='formCon formConIntro ' to={'/listofphonenumber'}>show list of phone number</Link>
    <Link className='formCon formConIntro' to={'/listofmembers'}>show list of members</Link>
    





        



    </form>
    <div></div>
 </div>

  )
}

export default PhoneNumberList