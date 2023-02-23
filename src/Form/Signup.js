import React,{useState} from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  async function Register(event){ 
event.preventDefault();
const response =await fetch('https://ismayilabbasli-api.onrender.com/api/register',{
  method:'POST',
headers:{
'Content-Type':'application/json'

}
,
body:JSON.stringify({
name,
email,
password,

})


})
const data= await response.json();
if(data.status==='ok'){
  navigate('/login')
}
  }

function Go_login(){
  navigate('/login')
}


  return (
    <div>
        <form id='login_form' onSubmit={Register}>
        <div id='login'>
        <div>
      <BsFillPersonFill size={21} color="#3EC70B" />
      <input type="text" placeholder="Username"  minLength={5} maxLength={15} value={name} onChange={(e)=>setName(e.target.value)}  required /></div>
    <div>
      <MdEmail size={21} color="#3EC70B" />
      <input type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}  required /></div>
    <div>
      <AiFillLock size={21} color="#3EC70B" />
      <input type="password" placeholder='Password' maxLength={10} minLength={5}  value={password} onChange={(e)=>setPassword(e.target.value)} required /></div>

   
    <div>
      <button type='submit'>Sign Up</button> 
    </div>
    <div>
        Have already account?<a onClick={Go_login}>Login</a>
    </div>
    </div>
      </form>
     
    </div>
  )
}

export default Signup
