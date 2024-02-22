import React from 'react'

const TestiItem = ({testItem, openModal}) => {
    const {company, imgUrl, name, reference} = testItem
    const modalItem = {
        title: company,
        subTitle: name,
        des: reference
    }
  return (
    <div onClick={()=>{openModal(modalItem)}} className='border testItem flex flex-col items-center justify-center rounded-xl bg-white'>
        <img style={{
            width:'3em',
            height:'3em'
        }} className=' rounded-full mb-4' src={imgUrl} alt="" />
        <span  style={{color:'var(--title-color)'}} className="font-semibold block">{name}</span>
        <span className='text-sm mb-4 block'>{company}</span>
    </div>
  )
}

export default TestiItem