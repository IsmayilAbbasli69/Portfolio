import React,{useEffect,useState} from 'react'

const Blog = () => {
const [title,setTitle]=useState('');
const [blog,setBlog]=useState('')
async function get_blog(){
    const response =await fetch('https://ismayilabbasli.netlify.app/api/blog',{
        method:'POST',
      headers:{
      'Content-Type':'application/json'
      
      }
      ,
      body:JSON.stringify({
      title:localStorage.getItem('title'),
      blog:'',
    
      
      })
      
      
      })
      const data= await response.json();
     setTitle(data.title);
     setBlog(data.blog);
}

useEffect(() => {
get_blog();
}, [])
  return (
    <div id='article'>
      <div id='article_title'>{title}</div>
      <div id='article_blog'>
        
  <blockquote> {blog}</blockquote>

       </div>
      
    </div>
  )
}

export default Blog
