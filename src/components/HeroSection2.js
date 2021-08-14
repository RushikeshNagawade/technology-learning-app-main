import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection2.css';

function HeroSection2() {
  return (
    <div className='hero-container2'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Contact Us</h1>
       <p>Contact Number : 9999888810</p>  <p>Email : UpMasters@gmail.com</p>  <p>Instagram : TheUpMaster's</p> <p>Twitter: @TheUpMasters</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > */}
          {/* LOG IN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Take a Glance <i className='far fa-play-circle' />
        </Button> */}
      {/* </div> */}
    </div>
  );
}

export default HeroSection2;