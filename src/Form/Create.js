
import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

const Create = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [title,setTitle]=useState();
    const [blog,setBlog]=useState();
    
    async function Create_Blog(event){ 
        event.preventDefault();
        const response =await fetch('https://ismayilabbasli-api.onrender.com/api/create',{
          method:'POST',
        headers:{
        'Content-Type':'application/json'
        
        }
        ,
        body:JSON.stringify({
        email,
        title,
        blog,
        
        })
        
        
        })
       const data=response.json();
      
          navigate('/home')
    
   
    }
    useEffect(() => {
    const token=localStorage.getItem('token');
    const user=jwtDecode(token);
    setEmail(user.email)

    }, [])
  return (
    <div id='create'>
        <form onSubmit={Create_Blog}>
    <input type='text' placeholder="Title..."  minLength={10} maxLength={60} value={title} onChange={(e)=>setTitle(e.target.value)} />
    <textarea placeholder='Blog...'  minLength={50} maxLength={2000}  value={blog} onChange={(e)=>setBlog(e.target.value)} ></textarea> 
    <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Create
