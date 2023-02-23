import React from 'react'
import List from './components/List'
import API from './components/API'
import Login from './Form/Login'
import Home from './Form/Home'
import Signup from './Form/Signup'
import Create from './Form/Create'
import Blog from './Form/Blog'
import Portfolio from './portfolio/Portfolio'
import '../src/components/styles.css'
import '../src/Form/style_form.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'



const App = () => {
  const id=useSelector(state=>state.id)

  return ( 
    <div>
 <BrowserRouter>
      <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/todoapp' element={<List/>}/>
      <Route path='/api' element={<API/>}/>
      <Route path={`/${id.id}`}  element={<Blog/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
