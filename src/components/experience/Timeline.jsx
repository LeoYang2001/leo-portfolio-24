import React, { useEffect, useRef, useState } from 'react'
import './timeline.css'

const Timeline = ({experienceList, closeModal, openModal}) => {


    const timelineRef = useRef(null)
    const [timelineItemsHeight, setTimelineItemsHeight] = useState([])

    const presentModal = (expItem)=>{
        openModal(expItem)
    }


    useEffect(() => {
        setTimeout(()=>{

            const timelineItems = document.getElementsByClassName('timelineItem');
            const heightList = []
            // Loop through each element with className 'timelineItem' to get its height
            for (let i = 0; i < timelineItems.length; i++) {
            const timelineItem = timelineItems[i];
            const height = timelineItem.clientHeight;
                heightList.push(height)
            }
            const transformedArray = heightList.reduce((accumulator, currentValue) => {
                const sum = accumulator.length > 0 ? accumulator[accumulator.length - 1] + currentValue : currentValue;
                return [...accumulator, sum];
              }, [0]);
            setTimelineItemsHeight(transformedArray)
        },1)
    }, [])
    

    const numToStr = (num)=>{
        const monStrs = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        return monStrs[num - 1]
    }   

 

  return (
    <div className='  w-full flex justify-center mt-10'>
        <div  style={{color:'var(--title-color)'}} className='timelineContainer mb-10 relative flex flex-col'>
            <div ref={timelineRef} style={{width:2}} className='timeLine absolute  bg-gray-500'>
                    {
                        timelineItemsHeight.map((item,index)=>(
                            <div 
                            key={index}
                            style={{
                                top: timelineItemsHeight[index]
                            }} className='timeline_dot absolute bg-gray-500'></div>  
                        ))
                    }                       
            </div>
            {
                experienceList.map((item,index)=>(
                   
                    <div onClick={()=>{presentModal(item)}}  key={`${item}-${index}`} className={`timelineItem p-2 left flex rounded-lg justify-between flex-col gap-1 items-start ${index%2 == 0 ? "timeLeft" : "timeRight"}`}>
                    <span className=' font-bold text-md '>
                        {
                            item.title
                        }
                    </span>
                    <span className=' text-gray-500'>
                    {
                            item.subTitle
                        }
                    </span>

                <span className=' mt-5 flex text-gray-500 justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>    
                    {
                        item.period.endTime?
                        (
                            `${item.period.startTime.year} ${numToStr(item.period.startTime.month)} - ${item.period.endTime.year} ${numToStr(item.period.endTime.month)}` 
                        ):
                        (
                            `${item.period.startTime.year} ${numToStr(item.period.startTime.month)} - present` 
                        )
                    }
                </span>
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Timeline