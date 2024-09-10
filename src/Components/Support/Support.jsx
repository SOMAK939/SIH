import React from 'react';
import "./Support.scss";
import gridImage from "../../assets/fnirs.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Support = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>product support</small>
          <h2>Key Features & Novelty</h2>
          <p>Why should you choose our product?</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className='number'>01</span>
              <h4>Low-cost and portable design using accessible components. </h4>
              <p></p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='3500'>
              <span className='number colorOne'>02</span>
              <h4>Soft & lightweight materials for comfort.</h4>
              <p></p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='4500'>
              <span className='number colorTwo'>03</span>
              <h4>Wireless data transmission for real-time analysis.</h4>
              <p></p>
            </div>

          </div>

          <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
            <img src={gridImage} alt="grid-img" />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Support;