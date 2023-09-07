import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {hostVar} from './VarImportes'


function UpdateMember() {
   // const regInfo=JSON.parse(localStorage.getItem('regInfo')) 

    const [name,setName]=useState('')
    const [fatherName,setFatherName]=useState('')
    const [grandFatherName,setGrandFatherName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [city,setCity]=useState('');
    const [email,setEmail]=useState('');
    const [campus,setCampus]=useState('');
    const [department,setDepartment]=useState('');

    const [regInfo,setRegInfo]=useState('')
    const [updateRes,setUpdateRes]=useState('')


    const {phone_number}=useParams()
    const effectRan = useRef(false);

   useEffect(() => {
       if (!effectRan.current) {
         const fetchData=async()=>{
           try {
             const fetchMember=await axios.get(`${hostVar}/membersdata/fetchmember/${phone_number}`)
             setRegInfo(fetchMember.data)
             
           } catch (error) {
             
           }
          
         } 

         fetchData()
       }
       return () => effectRan.current = true;

   },[]);

   const [gender,setGender]=useState(regInfo.gender)

       const updateInfo=async(e)=>{
        e.preventDefault()
        try {
            const updateData=await axios.put(`${hostVar}/membersdata/updatemember`,{
                name:name?name:regInfo.name,
                fatherName:fatherName?fatherName:regInfo.father_name,
                grandFatherName:grandFatherName?grandFatherName:regInfo.grand_father_name,
                gender:gender?gender:regInfo.gender,
                phoneNumber:phoneNumber?phoneNumber:regInfo.phone_number,
                city:city?city:regInfo.city,
                email:email?email:regInfo.email,
                campus:campus?campus:regInfo.campus,
               department:department?department:regInfo.dept,
            })
            setUpdateRes(updateData.data)
            window.location.reload(true)
        } catch (error) {
            
        }

       
       }
  
      

      console.log(regInfo)

  return (
    <div className='regCon'>
    <h3 className='titleOfProfile'>Update Your Profile</h3>
    <h4 className='titleOfProfile' style={{color:'green'}}>{updateRes}</h4>
<form  className='formCon regConDelete' onSubmit={updateInfo} >


 <label htmlFor="name" className='updatelabel'>Name</label>
 <input className='row listCon' id='name' type="text" onChange={(e)=>setName(e.target.value)} placeholder={regInfo.name} />
 <label htmlFor="Father_name" className='updatelabel'>Father_name</label>
 <input className='row listCon' id='Father_name' type="text" onChange={(e)=>setFatherName(e.target.value)} placeholder={regInfo.father_name} />
 <label htmlFor="Grand_father_name" className='updatelabel'> Grand_father_name</label>
 <input className='row listCon' id='Grand_father_name' type="text" onChange={(e)=>setGrandFatherName(e.target.value)} placeholder={regInfo.grand_father_name} />
<label htmlFor="Phone_number" className='updatelabel'>Phone_number</label>
 <input className='row listCon' id='Phone_number' type="text" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder={regInfo.phone_number} />
 <label htmlFor="Email" className='updatelabel'>Email</label>
 <input className='row listCon' id='Email' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder={regInfo.email} />
 <label htmlFor="City" className='updatelabel'>City</label>
 <input className='row listCon' id='City' type="text" onChange={(e)=>setCity(e.target.value)} placeholder={regInfo.city} />
 <label htmlFor="Campus" className='updatelabel'>Campus</label>
 <input className='row listCon' id='Campus' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder={regInfo.campus} />
 <label htmlFor="Dept" className='updatelabel'>Dept</label>
 <input className='row listCon' id='Dept' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder={regInfo.dept} />
 <label htmlFor="Gender" className='updatelabel'>Gender</label>
 <input className='row listCon' id='Gender' type="text"  placeholder={regInfo.gender} disabled />
 
 <div className='row'>
        <label className='' htmlFor="Gender">Gender</label>
        <select className='margin_left10 selectUpdate'  onChange={(e) =>setGender(e.target.value)} defaultValue={regInfo.gender}   name="Gender" id="n">
            <option ></option>
            <option value="male" >Male</option>
            <option value="female" >Female</option>


        </select>
        </div>


 <input className='row regBtn' type="submit" placeholder='Update' />

 <h6><Link to={'/'}>Go To Home Page</Link></h6>
 










</form>
</div>   
  )
}

export default UpdateMember