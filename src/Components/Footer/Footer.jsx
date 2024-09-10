import React from 'react';
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>

      

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by 404 Brain Not Found<a href="https://github.com/mrinnnmoy" target="_blank" rel='noreferrer'></a></p>
      </div>

    </div>
  )
};

export default Footer;