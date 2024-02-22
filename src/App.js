import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { useState,useRef, useEffect } from 'react'
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Modal from './components/modal/Modal';


function App() {
  const [ShowMenu, setShowMenu] = useState(false)
  const [ShowModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const appRef = useRef(null);
  const [appHeight, setAppHeight] = useState(0)
  useEffect(() => {
    //set the height for the mask
    setTimeout(()=>{
      setAppHeight(appRef.current.clientHeight)
    },10)
    
  }, [])
  
  
  const closeMenu = ()=>{setShowMenu(false)}
  const openMenu = ()=>{setShowMenu(true)}

  const openModal = (expItem)=>{
    setShowModal(true)
    console.log(expItem);
    setModalContent(expItem)
    
  }
  const closeModal = ()=>{setShowModal(false)}


  return (
    <div  ref={appRef} className="App">
       {ShowMenu && (<div onClick={closeMenu} style={{height:appHeight}}  className=' modal_nav bg-transparent-500'></div>)}
       {ShowModal && (<>
          <Modal closeModal={closeModal} modalContent={modalContent} />
       </>)}
      <Header ShowMenu={ShowMenu} closeMenu={closeMenu} openMenu = {openMenu} />
      <main className='main flex flex-col mb-20'>
        <Home/>
        {/* <About/> */}
        <Skill/>
        <Experience ShowModal={ShowModal} openModal={openModal} closeModal={closeModal} />
        <Testimonials ShowModal={ShowModal} openModal={openModal} closeModal={closeModal} />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
