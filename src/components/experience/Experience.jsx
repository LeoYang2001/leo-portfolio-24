import React from 'react'
import '../about/about.css'
import Timeline from './Timeline';

const Experience = ({openModal, closeModal, ShowModal}) => {

   const  experienceList = [
      {
          title:'Tianjin Polytech University',
          subTitle:"Mechanical Engineering",
          period:{
              startTime:{
                  year:2019,
                  month:9
              },
              endTime:{
                  year:2022,
                  month:6
              }
          },
          des:``
      },
      {
          title:'University of Kentucky',
          subTitle:"Computer Science",
          period:{
              startTime:{
                  year:2022,
                  month:8
              }
          }
      },
      {
          title:'Kentucky Energy And Envionment Cabinet',
          subTitle:"Software intern",
          period:{
              startTime:{
                  year:2023,
                  month:5
              },
              endTime:{
               year:2023,
               month:12
           }
          },
          des:`During my internship at the Energy & Environment Cabinet, I honed
          skills in Leaflet for interactive mapping and ASP.NET MVC project development, deepening
          my grasp of software architecture and programming. Additionally, I gained valuable
          experience in Oracle database management, experiencing the utilization of PL/SQL to
          enhance my understanding of database systems and contribute to efficient data
          management practices.`
      },
      {
         title:'University of Kentucky',
         subTitle:"Ios developer",
         period:{
             startTime:{
                 year:2024,
                 month:1
             }
         },
         des:`I collaborate with a professor on an iOS sports prediction app for University of Kentucky
         students, focusing on real-time games from leagues like NBA, NFL, NCAA. The project uses
         Swift for frontend and AWS for backend. While Toptal professionals handle major tasks, I
         master and implement technologies, contributing to ongoing app maintenance. This
         experience highlights my adaptability, collaboration, and active involvement in a researchdriven mobile app development initiative.`
     }
  ]

      

  return (
   <section className="about section" id="experience">
    <h2 className="section__title">
        Experience
      </h2>
      <span className="section__subtitle">
        My journey
      </span>
      <main>
         <div className='flex justify-center gap-4'>
            <span style={{color:'var(--title-color)'}} className=' font-bold text-2xl'>Education & Work</span>
         </div>
         <section>
            <Timeline ShowModal={ShowModal} openModal={openModal} closeModal={closeModal} experienceList={experienceList}/>
         </section>
      </main>
   </section>
  )
}

export default Experience