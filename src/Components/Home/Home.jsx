import React from 'react';
import "./Home.scss";
import Video from "../../assets/video.mp4";
import Plane from "../../assets/takeoff.png";

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-Lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={Video} autoPlay muted loop className='video'></video>
        </div>

        <img src={Plane} alt="plane" className='plane' />
      </div>
    </div>
  )
};

export default Home;