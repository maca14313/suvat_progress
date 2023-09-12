import React, { useEffect, useState } from 'react'
import './reg.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {hostVar} from './VarImportes'

function LogInMember() {
    const navigate = useNavigate()

    
    const [id,setId]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
   
    const [regData,setRegData]=useState('');


   
/*************************************************************************************************/

 
    const registerMember=async(e)=>{
        e.preventDefault()
                try {
                      const memberData=await axios.post(`${hostVar}/membersdata//loginmember`,{
                  id,
                  phoneNumber,
                 
  
                  
                })
                 
                setRegData(memberData.data)
                
  
                    } catch (error) {
                        console.log(error)
  
                     }
                     }
        
/*************************************************************************************************/

    useEffect(() => {

        if (regData?.registerd!=undefined) {
            localStorage.setItem('regInfo',JSON.stringify(regData))
            navigate('/')
           } else {
            
           }
    },[regData]);

  return (
    <div className='regCon'>

    <form action="" className='formCon' onSubmit={registerMember}>

         <div style={{color:'red'}}>{regData?.response} <span style={{color:'green'}}>{regData?.registerd}</span> </div>

         <input className='row' type="text" onChange={(e)=>setId(e.target.value)} placeholder='id'  required/>
         <input className='row' type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='phone Number'  required/>
     
         <button className='row regBtn' type="submit">Log In</button>



    </form>
 </div>

  )
}

export default LogInMember