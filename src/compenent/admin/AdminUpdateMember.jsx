import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import {hostVar} from '../reg/VarImportes'
import '../reg/reg.css'
import AdminLogIn from './AdminLogIn';



function AdminUpdateMember() {
  const auth=JSON.parse(localStorage.getItem('auth'))

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
    const [openModal,setOpenModal]=useState(false)

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
   const [batch,setBatch]=useState(regInfo?.batch)


       const updateInfo=async(e)=>{
        e.preventDefault()
        try {
            const updateData=await axios.put(`${hostVar}/membersdata/updatemember`,{
                name:name?name:regInfo.name,
                fatherName:fatherName?fatherName:regInfo.father_name,
                grandFatherName:grandFatherName?grandFatherName:regInfo.grand_father_name,
                gender:gender?gender:regInfo.gender,
                batch:batch?batch:regInfo.batch,
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

       const navigate=useNavigate()
       
       const deleteMember=async()=>{
        const deleteData=await axios.get(`${hostVar}/membersdata/delete/${phone_number}`)
        if (deleteData.data=='ok') {
          console.log(deleteData.data)
          navigate('/listofmembers')
        }
       }
  
      
  return auth=='okk'? (
    <div className='regCon'>

      

    <h3 className='titleOfProfile'>Update Member Profile</h3>
    <h4 className='titleOfProfile' style={{color:'green'}}>{updateRes}</h4>
<form  className='formCon regConDelete' onSubmit={updateInfo} >

<div className='regConDeleteModal' style={{display:openModal==true?'block':'none'}}><div className='regConDeleteModalTitle'>Are sure you want to delete this member </div>
       <div className='regConDeleteModalBtnCon'>      <div className='regConDeleteModalYes' onClick={()=>(deleteMember(),setOpenModal(true))}>Yes</div>  <div className='regConDeleteModalNo' onClick={()=>setOpenModal(false)}>No</div> </div>
      </div>
 <div className='row listCon idColor'><span>Id</span> <span>{regInfo?.id}</span></div>  
 <label htmlFor="name" className='updatelabel'>Frist Name</label>
 <input className='row listCon' id='name' type="text" onChange={(e)=>setName(e.target.value)} placeholder={regInfo.name} />
 <label htmlFor="Father_name" className='updatelabel'>Middle Name</label>
 <input className='row listCon' id='Father_name' type="text" onChange={(e)=>setFatherName(e.target.value)} placeholder={regInfo.father_name} />
 <label htmlFor="Grand_father_name" className='updatelabel'>Last Name</label>
 <input className='row listCon' id='Grand_father_name' type="text" onChange={(e)=>setGrandFatherName(e.target.value)} placeholder={regInfo.grand_father_name} />
 <label htmlFor="Phone_number" className='updatelabel'>Phone Number</label>
 <input className='row listCon' id='Phone_number' type="text" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder={regInfo.phone_number} />
 <label htmlFor="Email" className='updatelabel'>Email</label>
 <input className='row listCon' id='Email' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder={regInfo.email} />
 <label htmlFor="City" className='updatelabel'>City</label>
 <input className='row listCon' id='City' type="text" onChange={(e)=>setCity(e.target.value)} placeholder={regInfo.city} />
 <label htmlFor="Campus" className='updatelabel'>Campus</label>
 <input className='row listCon' id='Campus' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder={regInfo.campus} />
 <label htmlFor="Dept" className='updatelabel'>Dept</label>
 <input className='row listCon' id='Dept' type="text" onChange={(e)=>setDepartment(e.target.value)} placeholder={regInfo.dept} />

 <label htmlFor="Batch" className='updatelabel'>Batch</label>
 <input className='row listCon' id='Batch' type="text"  placeholder={regInfo?.batch} disabled />

 <div className='row updateRow '>
        <label  style={{color:'gray'}} className='' htmlFor="batch">Batch</label>
        <select className='margin_left10 selectUpdate'  onChange={(e) =>setBatch(e.target.value)} defaultValue={regInfo?.batch}   name="Batch" id="Batch">
            <option></option>
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

 <label  htmlFor="Gender" className='updatelabel'>Gender</label>
 <input className='row listCon' id='Gender' type="text"  placeholder={regInfo.gender} disabled />

 <div className='row updateRow'>
        <label style={{color:'gray'}} className='' htmlFor="Gender">Gender</label>
        <select className='margin_left10 selectUpdate'  onChange={(e) =>setGender(e.target.value)} defaultValue={regInfo.gender}   name="Gender" id="Gender">
            <option></option>
            <option value="male" >Male</option>
            <option value="female" >Female</option>


        </select>
        </div>
        <button className='row regBtn' type="submit">Update</button>
 <div className='deleteMemberCon' onClick={()=>setOpenModal(true)}><div>Delete member</div></div>











</form>
</div>
  ):<AdminLogIn/>
}

export default AdminUpdateMember