// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Make sure this is imported
import ShinyText from '../ShinyText';

function Hero() {
    return (
        <section id="hero" className="hero-container">
            <div className="hero-content">
                <ShinyText text="My Name is Satyam Mayengbam" disabled={false} speed={6} className='custom-class' />
                <ShinyText text="ꯈꯨꯔꯨꯝꯖꯔꯤ" disabled={false} speed={3} className='custom-class' />
            </div>
            <div className="hero-footer">
                <p className="explore-text">Explore more about me</p> 
                <div className="scroll-down-arrow">↓</div>
            </div>
        </section>
    );
}

export default Hero;