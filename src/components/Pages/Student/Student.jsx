
import React from 'react';
import "./Student.css";
import { Button, ButtonToolbar } from 'rsuite';
import Features2 from '../Features2';



const Student = () => {
  return (<>
  <div className='student_header'>
    <h2 className='student_header_text'> Turn Your Vision Into Reality</h2>
    <h5 className='student_header_text2'>Welcome to PODITIVITY, where students thrive and dreams take flight</h5>
  </div>
   <div className='section_students'>
  <div className='section1'>
    <p className='section1_text'>Advantages <br/>for Students<br/>
    {/* <button className='register_student'>Register now</button> */}
    </p>
  </div>
  {/*
  <div className='section_card'>
  <div className='card1'><h2>Safe social media</h2>
  <p>Safe and secure environment 
for students of tomorrow</p></div>
  <div className='card'><h2>Strategic Guidance</h2>
  <p>Get guidance with world class
leaders from your industry</p></div>
</div>
<div className='section_card'>
  <div className='card'><h2>Easy communication </h2>
  <p>Seamless communication with 
Institutions faculty</p></div>
  <div className='card1'><h2>Community Support</h2>
  <p>Multi-college community with 
world leading colleges</p></div>
</div>


</div> */}
<Features2/><br/>
<section className="onest">
        <div className="video-container">
          
            <video src="https://drive.google.com/file/d/1yCLIaI_sUWyjmGYzoC3ELE4PnFJA7dwi/view?usp=sharing" autoplay loop muted>
            </video>
        </div>
    </section>
</div>
  
    <div className='student_footer'>
    <h2><a href='https://onest.network/' style={{ textDecoration: 'none', color: 'black' }}>Powered by onest</a>
    </h2>
      <h2 className='student_footer_text'>Ready for an exciting journey<br/>in modern education</h2>
      <Button className='student_register'>
       <p className='register_text'> Register Now</p>
      </Button>
    </div>
    </>
  );
}

export default Student;
