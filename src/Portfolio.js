import React from 'react'
import { useNavigate } from 'react-router-dom'
const Portfolio = () => {
    const navigate=useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/todoapp')}>ToDoList</button>
      <button onClick={()=>navigate('/api')}>API</button>
      <button onClick={()=>navigate('/register')}>Blog</button>
    </div>
  )
}

export default Portfolio
