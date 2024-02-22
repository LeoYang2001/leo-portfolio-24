import React, { useEffect, useRef, useState } from 'react'
import './testimonials.css'




const testimonialsList = [
  {
    name:'James Mattingly',
    company:'Kentucky Energy and Environment Cabinet',
    imgUrl:'https://media.licdn.com/dms/image/C4E03AQE1_7Pd1qenug/profile-displayphoto-shrink_200_200/0/1551794499451?e=1714003200&v=beta&t=rVHyy9sbKeWQ8JT04i8dAqlgMdpDpWBF0GG1_9JuLWA',
    reference:`Thank you for the kind words and all your hard work.  I heard many good things from Wayne Begin, our Systems Architect, about your time here.  I hope you will consider EEC and the Division of information Systems again when the summer internship opens up.  I know Wayne and the GIS team would enjoy working alongside you again.`
  },
  {
    name:'Jean Dobson',
    company:'Kentucky Energy and Environment Cabinet',
    imgUrl:'https://media.licdn.com/dms/image/D5603AQF15ydyPbn_Nw/profile-displayphoto-shrink_200_200/0/1684765613922?e=1714003200&v=beta&t=LV3IfSZAd4rjkrv40utqmMZcI8H9uecPveIIiDwHltQ',
    reference:`Leo,Thank you so much for the kind words. I know we didn't get to work a lot together but I saw what you were working on occasionally with Wayne and others and it seems like you really enjoy the IT Field. I know that in-between projects that you took your learning and training very seriously and I wish I had more time to discuss with you some of the things you have been studying. I am very happy to know that I made you feel welcome and I hope that you know that if you need help with anything or any recommendations in the future then I would be more than happy to oblige.I wish you much luck in your future endeavors and I know you will do great at whatever you put your mind to!`
  },
  {
    name:'Doug Mott',
    company:'Kentucky Energy and Environment Cabinet',
    imgUrl:'https://media.licdn.com/dms/image/C5603AQGyFkFv7BtK_A/profile-displayphoto-shrink_200_200/0/1516780647294?e=1714003200&v=beta&t=VLk4SUKGpMNSrEwPWoVYOEqAFav6seCHvuqraEY2lME',
    reference:`here is the message from Teams again. It has been a pleasure working with you!Dear Leo Yang,I appreciate your kind words. They mean a lot to me. I am confident you will succeed with anything you set your mind to do. I wish you the best in all things. `
  },
  {
    name:'Chris Lyons',
    company:'Kentucky Energy and Environment Cabinet',
    imgUrl:"https://media.licdn.com/dms/image/D5603AQEgc2GpT1bkpw/profile-displayphoto-shrink_200_200/0/1708619670022?e=1714003200&v=beta&t=GckbT3_LrNc-7HhqxmMdWnuzRtW6TPpB4DJFvfPBQOA",
    reference:'Leo is an exceptional young professional, and you can tell from first meeting him that he is passionate about being a team player. While I didn’t have the opportunity to work with Leo directly, I was always impressed to hear and witness his development skills. Adding Leo to your team would be a division you won’t regret. '
  }
]





const Testimonials = () => {
    const containerRef = useRef(null)
    const [sectionHeight, setSectionHeight] = useState(0)
    useEffect(() => {
        setTimeout(()=>{
            const containerHeight = containerRef.current.clientHeight
            const windowHeight = window.innerHeight
        setSectionHeight(containerHeight > windowHeight ? containerHeight : windowHeight)

        },0)
    }, [])

  return (
    <section style={{
      height: sectionHeight,
      paddingTop:60
  }} className="testimonials section" id="testimonials">
        <h2 className="section__title">
       Testimonials
      </h2>
      <span className="section__subtitle">
        My former colleagues
      </span>
      <div ref={containerRef} className="flex flex-wrap gap-20 justify-center px-20 pb-20">
            {
              testimonialsList.map((testItem, index)=>(
                <div className='border testItem flex-col  rounded-xl bg-white'>
                <div className='flex testHeader px-4 pt-4'>
                <img style={{
                    width:'3em',
                    height:'3em'
                }} className=' rounded-full mb-4' src={testItem.imgUrl} alt="" />
                <div className=' h-full w-full justify-start items-center ml-4'>
                <span  style={{color:'var(--title-color)'}} className="font-semibold block">{testItem.name}</span>
                <span className='text-sm mb-4 block'>{testItem.company}</span>
                </div>
                </div>
                <div className="px-4">
                    <p>
                      {testItem.reference}
                    </p>
                </div>
            </div>
              ))
            }
      </div>
    </section>
  )
}

export default Testimonials