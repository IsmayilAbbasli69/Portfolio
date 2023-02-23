import React from 'react'
import { contact } from './index'

const Contact = () => {
  return (
    <selection className='Contact' id='contact'>
    <div className='image'></div>
    <div className='header'>
    <h1>Contact</h1>
    </div>
    <div className='contact'>
      {
        contact.map((item)=>(
          <a href={`${item.url}`}>{item.title}</a>
        ))
      }
    </div>
    </selection>
  )
}

export default Contact
