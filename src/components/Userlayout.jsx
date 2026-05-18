import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Userlayout = ({children}) => {
  return (
   <div>
    <Nav/>
    <main>{children}</main>
    <Footer/>
  </div>
  )
}

export default Userlayout