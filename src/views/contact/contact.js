import React from 'react'
import Nav from '../../component/Navbar/nav'
import Cont from './contact.png'
import Foot from './../../component/footers/footer'
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  return (
    <div>
        <Nav />

     <h2 className='title'>Contact</h2>
     <img src={Cont} className='imgs'/>
     <button className='btn' type='button' onClick={    ()=>{
        toast.success("msg you want…")
      }
     }>
      Click Me
     </button>

     <Foot />
<Toaster/>
    </div>
  )
}

export default Contact
