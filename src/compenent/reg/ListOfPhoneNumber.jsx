import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {hostVar} from './VarImportes'


function ListOfPhoneNumber() {
    //const regInfo=JSON.parse(localStorage.getItem('regInfo')) 

    const [membersInfo,setMembersInfo]=useState([])
    const [info,setInfo]=useState('')
    const [searchText,setSearchText]=useState('')
    const [openModal,setOpenModal]=useState(false)


    const searchByPhoneNumber=async()=>{
      try {
        const searchMembers=await axios.get(`${hostVar}/membersdata/searchphonenumber/${searchText}`)
         setMembersInfo(searchMembers.data)

      } catch (error) {
        
      }
    }
    const navigate=useNavigate()

    const deleteMember=async(phone_number)=>{

      try {
        const deleteData=await axios.get(`${hostVar}/membersdata/deletephonenumber/${phone_number}`)

        if (deleteData.data=='ok') {
          setOpenModal(false)
          window.location.reload(true)
          }
      } catch (error) {
        //window.location.reload(true)
      }
     
     }



    const [phoneNumber,setPhoneNumber]=useState('')

    const [regData,setRegData]=useState('')


    const addPhoneNumber=async(e)=>{
        e.preventDefault()
                try {
                      const memberData=await axios.post(`${hostVar}/membersdata/addphonenumber`,{
                
                  phoneNumber,
                  
  
                  
                })
                setRegData(memberData.data)
                window.location.reload(true)
  
                    } catch (error) {
                        console.log(error)
  
                     }
    }


    useEffect(()=>{
      try {
          const fetchData=async()=>{
              const ListOfMembers=await axios.get(`${hostVar}/membersdata/listofphonenumber`)
              setMembersInfo(ListOfMembers.data)
          }
         fetchData()
      } catch (error) {
          console.log(error)
      }
      
      },[])
  //deleteMember,addPhoneNumber
  

   

         
  return (
    <div className='regCon regConList'>

<form action="" className='formCon numberInputCon' onSubmit={addPhoneNumber}>

<input className='row listCon numberInput' type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Add Phone Number'  required/>
<div className='searchByBtn margin' onClick={addPhoneNumber}>Add</div>
</form>
<h3 className='margin5' style={{color:regData=='Duplicated entry'?'red':'green'}}>{regData}</h3>


       
    <h3 className='titleOfProfile'><h5>List Of Members</h5> <span className='membersLength'>{membersInfo.length}</span> </h3> 

    <div className='formCon listOfMembersCon regConDelete numberInputCon'>
             <input className='row listCon numberInput' type="text" placeholder='type some ting' onChange={(e)=>setSearchText(e.target.value)} />
            <div className="searchByCon searchByConNumber margin" style={{marginBottom:'12px'}} > <div className='searchByBtn' onClick={searchByPhoneNumber}>Search</div></div>
             </div>

           

    {membersInfo.map((m)=>(
<>
<div className='regConDeleteModal' style={{display:openModal==true?'block':'none'}}><div className='regConDeleteModalTitle'>Are sure you want to delete this phone number </div>
<div className='regConDeleteModalBtnCon' key={m.id}>      <div className='regConDeleteModalYes' onClick={()=>(deleteMember(m.phone_number),setOpenModal(false))}>Yes</div>  <div className='regConDeleteModalNo' onClick={()=>setOpenModal(false)}>No</div> </div>
</div>

  
<div  className='formCon listOfMembersCon' key={m.id}>
 <div className='row listCon' key={m.id}><span className='spanOfList'>{m.phone_number}</span> <div><div className="deleteClick" onClick={()=>setOpenModal(true)}>Delete</div></div>  </div>    
  

</div>

</>
))}

</div>   
  )
}

export default ListOfPhoneNumber