// src/pages/About.js
import React from 'react';
import "./about.css";

const About = () => {
  return (<>
    <div className='center-heading'><center><h2 className='h2'>What we offer at Poditivity</h2></center></div>
    <div className='offerings'>
    <div className='for_students'><p className='our'>Our</p><p className='mission'>Mission</p>
    <p>Empower every student to achieve their fullest potential through seamless access to upskilling, mentorship, and holistic support.</p>
   </div>
    <div className='for_institutions'><p className='our'>Our</p><p className='mission'>Vision</p> 
   <p>To bridge the communication gap between students and institutions, fostering an inclusive community that equips students with essential skills, resources, and opportunities for success.</p>
   
</div>
    </div>
    <div className='poditivity'>
      <div className='heading'><h2 className='h2'>We are Poditivity</h2></div>
      <p className='text'>In a world where education often feels like an exclusive privilege, Poditivity is redefining the landscape. We believe that every student, 
   regardless of their background, should    <br/>have access to quality upskilling, mentorship, and holistic support.</p>
   <p className='text'>Our goal? To revolutionize the educational experience by bridging the communication gap between students and institutions. Picture this: seamless access to essential skills, resources, and opportunities that empower students to achieve their fullest potential. Our platform connects students with industry experts, provides tailored workshops, and fosters a multi-college community that supports personal and professional growth.</p>
   <p className='text'>We're not just for students; we also empower educational institutions. By partnering with Poditivity, institutions can enhance communication, streamline management, and provide better resources and support to their students. Join us in creating an inclusive, empowering educational environment for everyone.</p>
    </div>
    <div className='recognitions'>
      <p className='heading2'><h2 className='h2'>Recognitions</h2></p>
    </div>
    </>
  );
}

export default About;
