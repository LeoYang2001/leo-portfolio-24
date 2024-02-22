import React, { useEffect, useRef, useState } from 'react'
import './skills.css'
import SkillBox from './SkillBox'


const skillSets = [
    {
        skillTitle:'Frontend',
        skillList:[
                "Javascript",
                "React",
                "Jquery",
                "Vue",
                "NextJS",
                "LeafletJS"]
    },
    {
        skillTitle:'Backend',
        skillList:[
                "AWS",
                "NodeJS",
                "C#",
                "Firebase"]
    },
    {
        skillTitle:'Database',
        skillList:[
                "DynamoDB",
                "Firestore",
                "MongoDB",
                "Mysql",
            "PL/SQL",
        ]
    },
    {
        skillTitle:'Mobile Development',
        skillList:[
                "React Native",
                "Swift",
        ]
    },
    {
        skillTitle:'Data Science',
        skillList:[
                "R Language",
                "Matlab"
        ]
    },
    {
        skillTitle:"Architectural Patterns",
        skillList:[
            "MVC",
            "MVVM"
        ]
    }
]


const Skill = () => {
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
        height: sectionHeight
    }} className="skills section" id="skills">
         <h2 className="section__title">
       Skills
      </h2>
      <span className="section__subtitle">
        My technique stack
      </span>
      <div ref={containerRef} className="skills__container container grid">
        {
            skillSets.map(skillItem => (
                <SkillBox key={skillItem.skillTitle} skillItem={skillItem}/>
            ))
        }
      </div>
    </section>
  )
}

export default Skill