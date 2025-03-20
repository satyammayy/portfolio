// src/components/About.js
import React from 'react';
//import './Achievement.css'; // You can create an About.css file for styling
import Carousel from '../Carousel';

function Achivement() {
  return (
    <section id="achievements" className="achieve-container">
      <div style= {{alignContent: 'center'}}>
        <Carousel
          baseWidth={600}
          autoplay={true}
          autoplayDelay={1000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
}

export default Achivement;
