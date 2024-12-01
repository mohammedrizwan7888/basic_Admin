import { useState } from 'react'
// import {Header} from './Header'
import './App.css'
import Home from './Home'
import Header from './Header'
import Sidebar from './Sidebar'


function App() {
  const  [openSidebarToggle, setOpenSidebarToggle] = useState (false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Home />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Header OpenSidebar={OpenSidebar}/>
     
    </div>
  )
}

export default App
