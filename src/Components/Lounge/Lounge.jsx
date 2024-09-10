import React from 'react';
import "./Lounge.scss";
import Grid2 from "../../assets/collage.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Lounge = () => {

  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-up' data-aos-duration='2500'>
          <img src={Grid2} alt="lounge-img" />
        </div>

        <div className="textDiv" data-aos='fade-left' data-aos-duration='2500'>
          <h2>Customer Segments</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className='gridTitle'>
              Healthcare Providers
              </span>
              <p>
              Revolutionize brain health with our precise fNIRS device.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
              Psychology Researchers
              </span>
              <p>
              Get clear, real-time brain data for your research
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
              Educational Institutions
              </span>
              <p>
              Bring advanced brain imaging to your campus
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
              Wellness Centers 
              </span>
              <p>
              Enhance wellness programs with detailed brain insights
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Lounge;