// src/pages/Home.js
import React from 'react';
import "./home.css"     ;
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg'>
    <p className='heading'>Welcome to Poditivity: Empowering Student <br/>Success
    <p className='heading2'>Revolutionize your learning journey with skill development,<br/> industry connections, and cutting-edge technology.</p>
    <p className='heading3'>Join us in bridging the gap between students and institutions, paving the way<br/> for a brighter future</p>
    </p>
    <div className='button1'>Sign In</div>
    <p className='heading4'>Already a member? <Link to="/login">Login here</Link></p>

    <div className='center-heading'><center>What we offer at Poditivity</center></div>
    <div className='offerings'>
    <div className='for_students'><h3>For Students</h3>
    <ul><li>Master new skills with our exciting workshops and courses designed just for you.</li>
    <li>Utilize AI-driven technology for personalized learning experiences and performance analytics.</li>
    <li>Engage in a secure, supportive social media platform designed for students.</li>
    <li>Join a thriving multi-college community of like-minded students.</li>
    <li>Benefit from better communication tools with your institution.</li>
    
    
    
    </ul>
    <div class="auth-container">
  <div class="Signup">Sign up now</div>
  <div class="KnowMore">Sign In</div>
</div></div>
    <div className='for_institutions'><h3>For Institutions</h3>
    <ul><li>Easy online college registration process.</li>
    <li>Free communication and management support. </li>
    <li>
Increase student engagement with our interactive and innovative learning tools.
</li>
    <li>Customized dashboard to monitor Faculty and Students.</li>
    <li>ONEST decentralized network integration.</li>
    </ul>
    <div class="auth-container">
  <div class="Signup">Sign up now</div>
  <div class="KnowMore">Sign In</div>
</div></div>
    </div>
  </div>
  
  );
}

export default Home;
