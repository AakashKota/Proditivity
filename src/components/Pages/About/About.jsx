// src/pages/About.js
import React from 'react';
import "./about.css";

const About = () => {
  return (<>
    <div className='center-heading12'><center><h2 className='h2'>For Students <br/>By Students!!</h2></center></div>
    <div className='offerings'>
    <div className='for_students_about'>
          <div className='mission-text'>
          
            <p className='our'>Our <h2>Mission</h2></p>
            <p className='text_student'>Empower every student to achieve their fullest potential through seamless access to upskilling,
               mentorship, and holistic support.</p>
          </div>
          <img src="https://i.ibb.co/txDNQZB/mission.png" alt="mission" border="0" className='mission-image'/>
        </div>

    <div className='for_students_about'>
      <div className='mission_text'>
        <p className='our'>Our<h2>Vision</h2></p> 
   <p className='text_student'>To bridge the communication gap between students and institutions, fostering an inclusive community that equips 
    students with essential skills, resources, and opportunities for success.</p>
   </div>
   <img src="https://i.ibb.co/GxGr65c/vision.png" alt="vision" border="0" className='mission-image'/>
</div>
    </div>
    <div className='poditivity'>
      <div className='heading_about'><h2 className='h2'>We are Poditivity</h2></div>
      <p className='text'>In a world where education often feels like an exclusive privilege, Poditivity is redefining the landscape. We believe that every student, 
   regardless of their background, should <br/>have access to quality upskilling, mentorship, and holistic support.</p>
   <p className='text'>Our goal? To revolutionize the educational experience by bridging the communication gap between students and institutions. Picture this: seamless access to essential skills, resources, and opportunities that empower students to achieve their fullest potential. Our platform connects students with industry experts, provides tailored workshops, and fosters a multi-college community that supports personal and professional growth.</p>
   <p className='text'>We're not just for students; we also empower educational institutions. By partnering with Poditivity, institutions can enhance communication, streamline management, and provide better resources and support to their students. Join us in creating an inclusive, empowering educational environment for everyone.</p>
    </div>
    <div className='recognitions'>
      <p className='heading2_about'><h2 className='h2'>Recognitions</h2></p>
      <div className='images'>
  <img src="https://i.ibb.co/Z2J5f8Q/DOC-20231003-WA0003-pages-to-jpg-0001.jpg" alt="DOC-20231003-WA0003-pages-to-jpg-0001" border="0"/>
  <img src="https://i.ibb.co/Mkw4WSn/DOC-20240223-WA0009-pages-to-jpg-0001.jpg" alt="DOC-20240223-WA0009-pages-to-jpg-0001" border="0"/>
</div>

    </div>
    </>
  );
}

export default About;
