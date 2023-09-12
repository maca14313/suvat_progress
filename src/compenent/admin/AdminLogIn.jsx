import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {hostVar} from '../reg/VarImportes'


function AdminLogIn() {
    const navigate = useNavigate()

    
    const [id,setId]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
   
    const [regData,setRegData]=useState('');
    const registerMember=async(e)=>{
        e.preventDefault()
                if (id=='4247tofa' && phoneNumber=='0931323035') {
                      localStorage.setItem('auth',JSON.stringify('okk'))
                      setRegData('loged in')
                      navigate('/admin_edit')
                     
                } else {
                    console.log('false')
                    localStorage.setItem('auth',JSON.stringify('noo'))
                    setRegData('incorrect')

                }
                     }
    useEffect(() => {
     if (JSON.parse(localStorage.getItem('auth'))=='okk') {
        navigate('/admin_edit')

     }

    },[])

  return (
<div className='regCon'>

<form action="" className='formCon' onSubmit={registerMember}>

     <div > <span style={{color:regData=='loged in'?'green':'red'}}>{regData}</span> </div>

     <input className='row' type="text" onChange={(e)=>setId(e.target.value)} placeholder='id'  required/>
     <input className='row' type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='phone Number'  required/>
 
     <button className='row regBtn' type="submit">Log In</button>



</form>
</div>
)
}

export default AdminLogIn