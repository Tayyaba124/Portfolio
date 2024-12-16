import React from 'react'

import Home from './Home/page'
import About from './About/page'
import Contact from './Contact/page'

const page = () => {
  return (
    <div className='bg-black'>
    
    <Home/>
    <About/>
    <Contact/>
    </div>
  )
}

export default page