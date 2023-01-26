import React, { useEffect, useState } from 'react'
import './Section2.scss';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import axios from 'axios'
import { get } from 'mongoose';

export default function Section2() {
  const [users,setUsers]=useState([])

  const getUsers=()=>{
    axios.get('http://localhost:2000/users')
    .then(res=>setUsers(res.data))
  }
  useEffect(()=>{
    getUsers()
  },[])

  const handleDelete=(id)=>{
    
    axios.delete(`http://localhost:2000/users/${id}`)
    .then(getUsers())
  }
  console.log(users);
  return (
    <div className='section1'>

    <div className='services'>
      <span></span><h1>Popular Courses</h1></div>

      <div className='apicards'>
        {
          users.map((item)=>(

        <div className='apicard' key={item._id}>
          <div className='topimage'><img src={item.productimage} /></div>
          <div className='about'><a>{item.about}</a>
          </div>
          <div className='authors'>
            <div>
              <img src={item.author_image}/></div>


            <div className='michael'>{item.author_name}
            </div>
            <div className='price'>${item.price} <button onClick={()=>handleDelete(item._id)}><RiDeleteBin6Fill/></button></div>
          </div>
        </div>
          ))
        }



        



      

      </div>
    </div>
    
  )
}
