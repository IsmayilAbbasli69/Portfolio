import React,{useState} from 'react'
import {navbarLinks}  from './index.js'
import menu from './menu.svg'
import close from './close.svg'
import contact from './contact.jpg'
const Navbar = () => {
    const [toggle,setToggle]=useState(true);
    const [activate,setActivate]=useState('Home')
  return (
    <nav className='navbar'>
         <img src={toggle ? menu : close} onClick={()=>setToggle(!toggle)}/>
      <div className='desktop_nav'>
      {
        navbarLinks.map((item,index)=>(
            <div key={index} style={{margin:10+'px'}}>
                <a href={`#${item.id}`} style={{fontSize:23+'px',color:'white',fontStyle:'normal',textDecoration:'none',fontFamily:'Jura'}}>{item.title}</a>
            </div>
        ))
      }
    </div> 
    <div className='mobile_nav' style={toggle?{display:'none'}:{display:'flex'}}>
       
      {
        navbarLinks.map((item,index)=>(
            <div key={index} style={{marginBottom:5+'px'}}>
                <a href={`#${item.id}`} style={{fontSize:17+'px',color:'white',fontStyle:'normal',textDecoration:'none',fontFamily:'Jura'}}>{item.title}</a>
            </div>
        ))
      }
    </div> 
    </nav>
  )
}

export default Navbar
