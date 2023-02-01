import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';



const Blogs = (props) => {
const navigate=useNavigate();


  return (
    <form id="blog_navbar" onSubmit={props.func}>
      <div id='title'>{props.title}
      </div>
      <div id='owner'>by {props.owner}</div>
    </form>
  )
}

export default Blogs
