import React, { useEffect, useRef, useState } from 'react'

const Modal = ({closeModal, modalContent}) => {

    const cardRatio = 2/3
    const [cardHeight, setCardHeight] = useState(0)
    const ModalCard = useRef(null)
    useEffect(() => {
      setTimeout(()=>{
        setCardHeight(ModalCard.current.clientWidth / cardRatio)
      },1)
    }, [])
    
    const {title, subTitle, des} = modalContent

  return (
        <>
         <div onClick={closeModal}   className=' absolute modal'></div>
           {
            (des && des !== "") ? (
                <>
                        <div style={{height: cardHeight}} ref={ModalCard} className='modalContent absolute bg-white flex flex-col gap-4 px-8 items-center'>
                            <header className='modalContentHeader'>
                            <span style={{color:'var(--title-color-dark)'}} className='modalTitle font-bold'>{title}</span>
                            <span className='modalSubTitle'>{subTitle}</span>
                            </header>
                        <p className='modalDes px-8' >
                            {des}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    
                        <div   style={{height: cardHeight}}  ref={ModalCard} className='modalContent absolute bg-white flex flex-col gap-4 px-8 justify-center items-center'>
                            <header className='modalContentHeader'>
                            <span style={{color:'var(--title-color-dark)'}} className='modalTitle font-bold mb-12'>{title}</span>
                            <span className='modalSubTitle'>{subTitle}</span>
                            </header>
                    </div>
                </>
            )
           }
        </>
  )
}

export default Modal