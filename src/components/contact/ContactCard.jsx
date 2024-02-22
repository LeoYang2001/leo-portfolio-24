import React from 'react'

const ContactCard = ({contactItem}) => {

  return (
    <>
          <div className='border contactItem flex flex-col items-center justify-center mt-10 rounded-xl bg-white'>
        {contactItem.iconSvg}
              <h2>{contactItem.contactMethod}</h2>
              <span className=' text-sm mt-2 mb-6'>{contactItem.contactAddr}</span>
          </div>
       </> 
  )
}

export default ContactCard