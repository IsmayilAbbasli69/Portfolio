import React from 'react'
import Navbar from './Navbar'
import SkillTag from './SkillTag'
import { skills } from './index'
const About = () => {
  return (
    <selection  id='about' className='About'>
        <div className='image'></div>
  <div className='header'>
    <h1>Ismayil Abbasli</h1>
    <h2>MERN Developer</h2>
  </div>
  <div className='skills'>
    {
        skills.map((item)=>(
            <SkillTag skill={item}/>
        ))
    }
 
  </div>
    </selection>
  )
}

export default About
