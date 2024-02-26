import React from 'react'
import Data from './Data'
import "./home.css"
import ScrollDown from './ScrollDown'
import Social from './Social'

const Home = () => {

  const profileImg = "https://myprofilepicture-leoyang.s3.us-east-2.amazonaws.com/profileImage.jpg"

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                <div  className='home__img flex justify-center items-center'>
                  <img width={300} height={300} src={profileImg} alt="" />
                </div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home