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
    const [batch,setBatch]=useState('2015')

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
                  batch,
                  phoneNumber,
                  city,
                  email,
                  campus,
                 department,
  
                  
                })
                const memberDataReg=await axios.post(`${hostVar}/membersdata/registermemberreg`,{
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
            navigate('/memberprofile')
           } else {
            
           }
    },[regData]);

    console.log()
                     
  return (
 

 <div className='regCon'>
    <form action="" className='formCon' onSubmit={registerMember}>
         <div style={{color:'red'}}>{regData?.response} <span style={{color:'green'}}>{regData?.registerd}</span> </div>
        <input className='row' type="text" onChange={(e)=>setName(e.target.value)}  placeholder='First Name' minlength='4'  required/>
        <input className='row' type="text" onChange={(e)=>setFatherName(e.target.value)}  placeholder='Middle Name' required/>
        <input className='row' type="text" onChange={(e)=>setGrandFatherName(e.target.value)} placeholder='Last Name' required/>
        <input className='row' type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Phone Number'  required/>
        <input className='row' type="text" onChange={(e)=>setCity(e.target.value)}  placeholder='City'  required/>
        <input className='row' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'  required/>
        <input className='row' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder='Department'  required/>
        <input className='row' type="text" onChange={(e)=>setCampus(e.target.value)} placeholder='Campus'  required/>
        
        <div className='row updateRow'>
        <label style={{color:'gray'}} className='' htmlFor="Batch">Batch</label>
        <select className='margin_left10' onChange={(e) =>setBatch(e.target.value)}   name="Batch" id="Batch">
            <option value="2015" >2015</option>
            <option value="2014" >2014</option>
            <option value="2013" >2013</option>
            <option value="2012" >2012</option>
            <option value="2011" >2011</option>
            <option value="2010" >2010</option>
            <option value="2009" >2009</option>
            <option value="Others" >Others</option>

        </select>
        </div>

        <div className='row updateRow'>
        <label style={{color:'gray'}} className='' htmlFor="Gender">Gender</label>
        <select className='margin_left10' onChange={(e) =>setGender(e.target.value)}   name="Gender" id="Gender">
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