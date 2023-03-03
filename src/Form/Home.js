import React,{useState,useEffect} from 'react'
import {CiSettings} from 'react-icons/ci'
import { BsPlus } from 'react-icons/bs'
import jwt from 'jwt-decode'
import Navigate, { useNavigate,Link } from 'react-router-dom'
import Blogs from './Blogs'
import jwtDecode from 'jwt-decode'
import {setID, setTotalID} from '../Store'
import { useDispatch,useSelector } from 'react-redux'
const Home = () => {


const [name,setName]=useState('');
const [blog,setBlog]=useState([]);
const [title,setTitle]=useState();
const [owner,setOwner]=useState();
const [id,setId]=useState('');
const dispatch = useDispatch();
async  function getHome(user){
const req=await fetch('https://ismayilabbasli-api.onrender.com/api/data',{ 
  method:'POST',
headers:{ 
  
  'Content-Type':'application/json'
},

body:JSON.stringify({
  email:user,
})

})
 const name_req=await req.json()
setName(name_req.data)
console.log(name_req.data)
}
const navigate=useNavigate();



useEffect(() => { 
getBlog()
const token=localStorage.getItem('token');
if(token){
const user=jwtDecode(token)
console.log('token'+{user})
getHome(user.email);

}else{
  navigate('/register')
}

}, [])


 

async function getBlog(){
const data=await fetch('https://ismayilabbasli-api.onrender.com/api/get_blog',{
  method:'POST',
  headers:{
  'Content-Type':'application/json'
  
  },
  body:JSON.stringify({
    title:'',
    blog:''
  })

})
const res=await data.json();

setBlog(res.data)



}




async function get_specific_blog(title){
  const data=await fetch('https://ismayilabbasli-api.onrender.com/api/get_specific_blog',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    
    },
    body:JSON.stringify({
      title:title,
   
    })
  
  })
  const blog=await data.json();
  console.log(blog.data._id)
  setId(blog.data._id)
  navigate('/'+blog.data._id)
  dispatch(setID(blog.data._id))
  
  
  
  }




async function resBlog(title){
  setTitle(title)
  localStorage.setItem('title',title);



  
  
  }


function displayBlog(e){
  get_specific_blog(e)
resBlog(e);

}

  return (
   <div>
    <div id='Home'>
       <div id='navbar'>
        <div id='header'>
        <div id='greet'>Hi, {name}</div>
      
       <div id='buttons'>
        <form onSubmit={()=>navigate('/create')}>
          <button>
        <BsPlus color='#3EC70B' fontSize={40} />
        </button></form>
       </div></div>
       </div>
       { 
        blog.map((item)=>(
          <div>
    <form id="blog_navbar" name={item.title} onClick={()=>displayBlog(item.title)}>
    <div id='title'>{item.title}
    </div>
    <div id='owner'>by {item.name}</div>
  </form>
  </div>
     ))

     }
    </div>

    </div>
  )
}

export default Home
