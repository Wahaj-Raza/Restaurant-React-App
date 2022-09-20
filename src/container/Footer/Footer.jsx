import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
import { FooterOverlay,Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W, Karachi Street 10, Pakistan</p>
        <p className='p__opensans'>+22 210-222-111</p>
        <p className='p__opensans'>+22 210-111-333</p>
    </div>
    <div className='app__footer-links_logo'>
      <img src={images.gericht } alt="footer_logo"/>
      <p className='p__opensans'>"The best way to find your self is to loose your self in the service of others."</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}}/>
      <div className='app__footer-links_icons'>
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram/>
      </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00am - 12:00am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>07:00am - 11:00am</p>

    </div>
    </div>
    <div className='footer__copyright'><p className='p__opensans'>
      2021 Restaurant All Rights Reserved
      </p>
      </div>
  </div>
);

export default Footer;
