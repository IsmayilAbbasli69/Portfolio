import React,{Component,useState} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  
  async function Login(event){
event.preventDefault();
const response =await fetch('/api/login',{
  method:'POST',
headers:{
'Content-Type':'application/json'

}
,
body:JSON.stringify({

email,
password,

})

})
const data= await response.json();
console.log(data.user);
if(data.user && data.status==='ok'){
  localStorage.setItem('token',data.user);
  
  navigate('/home')
}else{
  alert("Email or password is false");
  navigate('/register')
}

  }
  return (
    
      <form id='login_form' onSubmit={Login}>
        <div id='login'>
    <div>
      <MdEmail size={21} color="#3EC70B" />
      <input type="email" placeholder="Email" value={email} required onChange={(e)=>setEmail(e.target.value)} /></div>
    <div>
      <AiFillLock size={21} color="#3EC70B" />
      <input type="password" placeholder='Password' value={password} maxLength={10} minLength={5} onChange={(e)=>setPassword(e.target.value)} required /></div>

   
    <div>
      <button type='submit'>Login</button>
    </div>
    </div>
      </form>
     
     


  )
}

export default Login
