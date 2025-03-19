// src/components/About.js
import React from 'react';
import './About.css'; // You can create an About.css file for styling
import ScrollReveal from '../Reveal';

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <ScrollReveal
  baseOpacity={1}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
I am from Manipur and love to code. 
My ultimate goal is to attain a professional career in the fields of cyber security and software development,
with a focus on practical issues that are significant in people's lives. I am interested in how technology can enhance daily life. 
I have keen interest in acquiring knowledge and is willing to work on issues that have a positive impact on society.
</ScrollReveal>
        

        {/* Add more content as needed */}
      </div>
 

    </section>
  );
}

export default About;