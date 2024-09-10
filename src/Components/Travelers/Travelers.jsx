import React from 'react';
import "./Travelers.scss";

// Import images
import Sagnik from "../../assets/sagnik.jpg";
import Somak from "../../assets/somak.jpg";
import Rajangshu from "../../assets/rajangshu.jpg";
import Hriddhi from "../../assets/hriddhi.png";
import Soumyajeet from "../../assets/soumyajeet.jpg";
import Vishu from "../../assets/vishu.jpg";
import vitian from "../../assets/vitlogo.png";

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

// Using Map method to display all data at once.
const travelers = [
  {
    id: 1,
    destinationImage: Somak,
    vitian: vitian,
    travelerName: 'Somak',
    socialLink:'Frontend/Backend Developer'
    
  },
  {
    id: 2,
    destinationImage:Soumyajeet,
    vitian: vitian,
    travelerName: 'Soumyajit',
    socialLink:'Product Developer'
    
  },
  
  {
    id: 3,
    destinationImage: Hriddhi,
    vitian: vitian,
    travelerName: 'Hriddhi',
     socialLink:'Product Developer'
   
  },
  {
    id: 4,
    destinationImage:Sagnik,
    vitian: vitian,
    travelerName: 'Sagnik',
    socialLink:"Product Developer"
   
  },
  {
    id: 5,
    destinationImage: Rajangshu,
    vitian: vitian,
    travelerName: 'Rajangshu',
    socialLink:"UI/UX Designer"
    
  },
  {
    id: 6,
    destinationImage: Vishu,
    vitian: vitian,
    travelerName: 'Vishwajeet',
    socialLink:"UI/UX Designer"
   
  },
]

const Travelers = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Our Team!</h2>

        <div className="travelersContainer grid" data-aos='fade-down' data-aos-duration='2500'>
          {travelers.map(({ id, destinationImage, vitian, travelerName, socialLink }) => {
            return (
              // Single Passenger Card
              <div key={id} className="singleTraveler">
                <img src={destinationImage} alt="destinationImage" className='destinationImage' />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={vitian} alt="travelerImage" className='travelerImage' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div >
  )
};

export default Travelers;