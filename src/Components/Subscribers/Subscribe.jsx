import React from 'react';
import "./Subscribe.scss";

const Subscribe = () => {

  return (
    <div className='subscribe section'>
      <div className="sectionContainer container">
        <h2>Subscribe Newsletter & get latest News!</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address.' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
};

export default Subscribe;