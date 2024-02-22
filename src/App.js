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
        <div onClick={closeModal} style={{height:appHeight + 72}}  className=' absolute w-full modal'></div>
        <div className='modalContent absolute bg-white w-40 h-40 flex flex-col gap-4 px-8 items-center'>
          <header className='modalContentHeader'>
          <span style={{color:'var(--title-color-dark)'}} className='modalTitle font-bold'>{modalContent.title}</span>
          <span className='modalSubTitle'>{modalContent.subTitle}</span>
          </header>
          <p className='modalDes px-8' >
            {modalContent.des}
          </p>
        </div>
       </>)}
      <Header ShowMenu={ShowMenu} closeMenu={closeMenu} openMenu = {openMenu} />
      <main className='main'>
        <Home/>
        {/* <About/> */}
        <Skill/>
        <Experience ShowModal={ShowModal} openModal={openModal} closeModal={closeModal} />
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
