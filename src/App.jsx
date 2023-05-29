import { useState } from 'react'
import './App.css'
import Acordeon from './components/Acordeon'
import Card from './components/Card'
import Proyecto3 from './components/Proyecto3'
import ListButton from './components/ListButton'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    
      <Navbar />
    
      
     <div className='ejercicio1'>
        <Acordeon />
      </div>
      <div className='ejercicio2'>  
         <Card />
      </div>
      <div className='ejercicio3'>
        <Proyecto3 />
      </div>
      <div >
        <ListButton/>
      </div>  
      <div className="ejercicio4">
        <Banner />
      </div>
     
     <Footer/>
    </>
  )
}

export default App
