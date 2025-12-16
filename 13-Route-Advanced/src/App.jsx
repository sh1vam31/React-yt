import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'
import Police from './Pages/Police.jsx'
import Medical from './Pages/Medical.jsx'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}> 
        <Route path= 'police' element={<Police/>}/>
        <Route path= 'medical' element={<Medical/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />

      </Routes>

      

      <Footer />
    </div>
  )
}

export default App