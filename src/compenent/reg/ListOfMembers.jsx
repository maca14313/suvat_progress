import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {hostVar} from './VarImportes'


function ListOfMembers() {
    const regInfo=JSON.parse(localStorage.getItem('regInfo')) 

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
        
  return (
    <div className='regCon regConList'>
       
          <h3 className='titleOfProfile'><h3>List Of Members</h3> <span className='membersLength'>{membersInfo.length}</span> </h3> 
            
             <div className='formCon listOfMembersCon'>
             <input className='row listCon' type="text" placeholder='type some ting' onChange={(e)=>setSearchText(e.target.value)} />
            <div className="searchByCon"> <div>Search by :-</div> <div className='searchByBtn' onClick={searchByName}>Name</div> <div className='searchByBtn' onClick={searchByPhoneNumber}>Phone Number</div></div>
             </div>

          {membersInfo.map((m)=>(

       
  <Link to={`/adminupdatemember/${m.phone_number}`} key={m.id}>
     <div  className='formCon listOfMembersCon' >
       <div className='row listCon' ><span>Name</span> <div><span className='spanOfList'>{m.name}</span> <span >{m.father_name}</span></div>  </div>    
        

    </div>
  </Link> 
  
    ))}

 </div>    
  )
}

export default ListOfMembers