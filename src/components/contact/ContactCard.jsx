import React, {useRef} from 'react'
import { useState } from 'react';
import ClipBoard from '../clipBoard/ClipBoard';



const ContactCard = ({contactItem}) => {

    const [ifHover, setIfHover] = useState(false)
    const [ifCopy, setIfCopy] = useState(false)

    const handleCopy = async () => {
       try {
        await navigator.clipboard.writeText(contactItem.contactAddr)
        setIfCopy(true)
        setTimeout(()=>{
          setIfCopy(false)
        },3000)
       } catch (error) {
        console.log(error)
       }
      };

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
          <div onMouseEnter={()=>{setIfHover(true)}} onMouseLeave={()=>{setIfHover(false)}} className=' cursor-pointer border relative contactItem flex flex-col items-center justify-center mt-10 rounded-xl bg-white'
           onClick={!isMobile ? handleCopy : undefined}
           onTouchStart={isMobile ? handleCopy : undefined}
          >
            {/* FOR LAPTOP DEVICE  */}
            {
              !isMobile && (
                <div style={{opacity: ifHover ? 1 : 0 }} className=' absolute w-full h-full contactMask'>
                  <ClipBoard iconSize={32} color={"#fff"} ifCopied={ifCopy}/>
              </div>
              )
            }
            {/* FOR MOBILE DEVICE  */}
            {
              isMobile && (
                 <div style={{width:20, height:20}} className=' absolute right-2 top-2'>
                   <ClipBoard iconSize={20} color={"#0f0f0f"} ifCopied={ifCopy}/>
                  </div>
              )
            }

            {contactItem.iconSvg}
              <h2>{contactItem.contactMethod}</h2>
              <span className=' text-sm mt-2 mb-6'>{contactItem.contactAddr}</span>
          </div>
       </> 
  )
}

export default ContactCard