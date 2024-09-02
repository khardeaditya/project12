import React from 'react'
import Nav from '../../component/Navbar/nav'
import HomeImg from "./home.png"
import Foot from './../../component/footers/footer'
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  return (
    <>
      <Nav />
      <div>
      <h2 className='title'> Home Hello</h2>
      <img src={HomeImg} className='imgs'/>
      </div>
      <button className='btn' type='button' onClick={    ()=>{
        toast.success("Welcome")
      }
     }>
      Click Here
     </button>
      <Foot />
      <Toaster/>

    </>
  )
}


export default Home
