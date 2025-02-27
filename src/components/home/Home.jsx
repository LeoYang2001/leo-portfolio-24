import React from "react";
import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home = () => {
  const profileImg =
    "https://media.licdn.com/dms/image/v2/D5635AQGnk_Wsk_goTA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1708949504278?e=1741197600&v=beta&t=jQNB-1v5w0edeHIQ1_1bUQs7qvwGrOIH6QZOXfyms8U";

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img flex justify-center items-center">
            <img width={300} height={300} src={profileImg} alt="" />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
