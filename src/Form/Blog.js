import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import {useParams,useLocation} from 'react-router-dom'
const Blog = () => {
const [title,setTitle]=useState('');
const [blog,setBlog]=useState('')
 const {location}=useLocation().pathname
const {params}=useParams()
const id=useSelector(state=>state.id)
async function get_blog(){
    const response =await fetch(`https://ismayilabbasli-api.onrender.com/home/${params}`,{
        method:'POST',
      headers:{
      'Content-Type':'application/json'
      
      }
      
      
      })
      const data= await response.json();
     setTitle(data.data.title);
     setBlog(data.data.blog);
if(data==null){
  document.write("Fuck you")
}
    
}

useEffect(() => {
get_blog();
}, [])
  return (
    <div id='article'>
      <div id='article_title'>{title}</div>
      <div id='article_blog'>
        
  <blockquote>{blog}</blockquote>
       </div>
      
    </div>
  )
}

export default Blog
