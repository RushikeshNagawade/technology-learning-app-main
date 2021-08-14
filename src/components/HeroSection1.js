import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection1.css';

function HeroSection1() {
  return (
    <div className='hero-container1'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>About Us</h1>
      <p>UpMaster's is a platform that allows instructors to build online courses on their preferred topics.</p>
          <p> Using UpMaster's course development tools, they can upload videos and live classes to create courses. </p>
          <p>Instructors can also engage and interact with users via online discussion boards.</p>
          
          <p>It is a massive open online course provider for learners, and its learning experience arranges coursework</p>  <p> into a series of modules and lessons that can include videos, text notes and assessment tests.</p>
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

export default HeroSection1;