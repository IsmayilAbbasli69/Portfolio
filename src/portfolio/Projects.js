import React from 'react'
import { links } from './index'

const Projects = () => {
  return (
<selection className='Projects' id='projects'>
<div className='image'>

</div>
<div className='links'>
  {
    links.map((item)=>(
      <a href={`${item.url}`} target='_blank'>{item.title}</a>
    ))
  }
</div>

<div className='header'>
<h1>Projects</h1>
</div>


</selection>
  )
}

export default Projects
