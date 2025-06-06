import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
// Import video directly (move video to src/assets/videos folder first)
import videoSrc from '../assest/video/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={videoSrc} autoPlay loop muted playsInline></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button 
          buttonStyle='btn--outline' 
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;