import React, { useEffect, useState } from 'react'
import './reg.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {hostVar} from './VarImportes'

function Reg() {

         const navigate = useNavigate()

    const [name,setName]=useState('')
    const [fatherName,setFatherName]=useState('')
    const [grandFatherName,setGrandFatherName]=useState('')
    const [gender,setGender]=useState('male')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [city,setCity]=useState('');
    const [email,setEmail]=useState('');
    const [campus,setCampus]=useState('');
    const [department,setDepartment]=useState('');

    const [regData,setRegData]=useState('');
    const [goToProfile,setGoToProfile]=useState('')


   
/*************************************************************************************************/

 
    const registerMember=async(e)=>{
        e.preventDefault()
                try {
                      const memberData=await axios.post(`${hostVar}/membersdata/registermember`,{
                  name,
                  fatherName,
                  grandFatherName,
                  gender,
                  phoneNumber,
                  city,
                  email,
                  campus,
                 department,
  
                  
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
            navigate('/memberprofile')
           } else {
            
           }
    },[regData]);

    console.log()
                     
  return (
 

 <div className='regCon'>
    <form action="" className='formCon' onSubmit={registerMember}>
         <div style={{color:'red'}}>{regData?.response} <span style={{color:'green'}}>{regData?.registerd}</span> </div>
        <input className='row' type="text" onChange={(e)=>setName(e.target.value)}  placeholder='Name' minlength='4'  required/>
        <input className='row' type="text" onChange={(e)=>setFatherName(e.target.value)}  placeholder='Father Name' required/>
        <input className='row' type="text" onChange={(e)=>setGrandFatherName(e.target.value)} placeholder='Grand Father Name' required/>
        <input className='row' type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Phone Number'  required/>
        <input className='row' type="text" onChange={(e)=>setCity(e.target.value)}  placeholder='City'  required/>
        <input className='row' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'  required/>
        <input className='row' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder='Department'  required/>
        <input className='row' type="text" onChange={(e)=>setCampus(e.target.value)} placeholder='Campus'  required/>
        <div className='row'>
        <label className='' htmlFor="Gender">Gender</label>
        <select className='margin_left10' onChange={(e) =>setGender(e.target.value)}   name="Gender" id="n">
            <option value="male" >Male</option>
            <option value="female" >Female</option>

        </select>
        </div>
       

        

        <input  className='row regBtn' type="submit" placeholder='Register' />



    </form>
 </div>

  )
}

export default Reg