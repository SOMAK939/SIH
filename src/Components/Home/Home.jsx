import React from 'react';
import "./Home.scss";
import Video from "../../assets/video.mp4";


import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Revolutionize brain insights with our fNIRS headband!</h1>
      </div>

      <div className="homeImages flex" data-aos='fade-down' data-aos-duration='2500'>
        <div className="videoDiv">
          <video src={Video} autoPlay muted loop className='video'></video>
        </div>

        
      </div>
    </div>
  )
};

export default Home;