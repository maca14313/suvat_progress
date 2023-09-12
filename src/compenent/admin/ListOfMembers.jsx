import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {hostVar} from '../reg/VarImportes'
import '../reg/reg.css'
import AdminLogIn from './AdminLogIn'



function ListOfMembers() {
    const regInfo=JSON.parse(localStorage.getItem('regInfo')) 
    const auth=JSON.parse(localStorage.getItem('auth'))


    const [membersInfo,setMembersInfo]=useState([])
    const [info,setInfo]=useState('')
    const [searchText,setSearchText]=useState('')


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    try {
        const fetchData=async()=>{
            const ListOfMembers=await axios.get(`${hostVar}/membersdata/listofmembers`)
            setMembersInfo(ListOfMembers.data)
        }
       fetchData()
    } catch (error) {
        console.log(error)
    }
   
    
    },[])

    const searchByName=async()=>{
      try {
        const searchMembers=await axios.get(`${hostVar}/membersdata/searchbyname/${searchText}`)
         setMembersInfo(searchMembers.data)

      } catch (error) {
        
      }
    }

    const searchByPhoneNumber=async()=>{
      try {
        const searchMembers=await axios.get(`${hostVar}/membersdata/searchbyphonenumber/${searchText}`)
         setMembersInfo(searchMembers.data)

      } catch (error) {
        
      }
    }
        
  return auth=='okk'? (
    <div className='regCon regConList'>
       
          <h3 className='titleOfProfile'><h3>List Of Members</h3> <span className='membersLength'>{membersInfo?.length}</span> </h3> 
            
             <div className='formCon listOfMembersCon listOfMembersConSearch'>
             <input className='row listCon' type="text" placeholder='type some ting' onChange={(e)=>setSearchText(e.target.value)} />
            <div className="searchByCon"> <div>Search by :-</div> <div className='searchByBtn' onClick={searchByName}>Name</div> <div className='searchByBtn' onClick={searchByPhoneNumber}>Number</div></div>
             </div>
             
             
          {membersInfo.map((m,index)=>(

      
       
  <Link to={`/adminupdatemember/${m.phone_number}`} key={m?.id}>
     <div  className='formCon listOfMembersCon' >
       <div className='row listCon' ><div><span className='spanOfList'><div className='margin_right10' style={{color:'#1aadca'}}>{index+1}</div>{m?.name}  <span className='margin_left10'>{m.father_name}</span> </span> </div> <span>{m?.phone_number}</span>   </div>    
        

    </div>
  </Link> 
 
    ))}
 
 </div>    
  ):<AdminLogIn/>
}

export default ListOfMembers