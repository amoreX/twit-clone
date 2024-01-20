import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Nav from './Components/navbar'
import Rside from './Components/rightsidebar'
function App() {

  return (
    <>
      <div className='container'>
      <Sidebar />  
      <Nav />
      <Rside />
      </div>
        
    </>
  )
}

export default App
