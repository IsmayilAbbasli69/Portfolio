import './portfolio.css'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated }  from '@react-spring/web'
import contact from './contact.jpg'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Portfolio = () => {

  return (
    <div>
    <div className='portfolio'>
      <div>
      <Navbar/>
   <About/>
   </div>
   <div>
   <Projects/>
   </div>
   <div>
    <Contact/>
   </div>
    </div>
    </div>
    
  )
}

export default Portfolio
