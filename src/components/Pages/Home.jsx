// src/pages/Home.js
import React, { useState } from 'react';
import "./home.css";
import FAQ from "./Faq";
import { Link } from 'react-router-dom';
import Features from './Features';

const Home = () => {
  const [faqs,setFaqs]= useState([
    {
      question: "Sign up and create an institutional profile on Poditivity.",
     
    },
    {
      question: "Seamlessly integrate all students and faculty members into the platform.",
      
    },
    {
      question:
        "Facilitate smooth and effective communication between students, faculty, and administration.",
     
    },
    {
      question:
        "Access and share a wide range of educational resources and tools.",
     
    },
    {
      question:
        "Benefit from continuous support from our dedicated team.",
      
    }
  ]);

  const [newFaqs, setNewFaqs] = useState([
    {
      question: "Who are we?",
      answer: "Poditivity is a platform that empowers student success by providing skill development, industry connections, and cutting-edge technology.",
      open: false
    },
    {
      question: "What opportunities do we have?",
      answer: "You can sign up by clicking the 'Sign Up' button and following the registration process.",
      open: false
    },
    {
      question: "What sets Poditivity apart from other social media platforms?",
      answer: "Yes, Poditivity offers free communication and management support for institutions and students.",
      open: false
    },
    {
      question: "How can we join Poditivity team?",
      answer: "Poditivity offers personalized learning experiences, performance analytics, a secure social media platform, and more.",
      open: false
    },
    {
      question: "What stage is poditivity app in",
      answer: "Poditivity offers personalized learning experiences, performance analytics, a secure social media platform, and more.",
      open: false
    },
    {
      question: "How can institutions benefit from Poditivity?",
      answer: "Institutions can benefit from easy online registration, interactive learning tools, a customized dashboard, and more.",
      open: false
    }
  ]);

  const toggleFAQ = (index, faqList, setFaqList) => {
    setFaqList(
      faqList.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div className='bg'>
      <div className="container_home">
  <div className="text-content">
    <p className="heading">
      Welcome to Poditivity: Empowering Student <br />Success
      <p className="heading2">
        Revolutionize your learning journey with skill development,<br /> industry connections, and cutting-edge technology.
      </p>
      <p className="heading3">
        Join us in bridging the gap between students and institutions, paving the way<br /> for a brighter future
      </p>
    </p>
    <div className="button1">Sign In</div>
    <p className="heading4">Already a member? <Link to="/login">Login here</Link></p>
  </div>
  <div className="image_container_home">
    <img src="https://i.ibb.co/NVRmM6L/main-page-image.png" alt="home image" style={{ height: '500px', width: '400px' }} />
  </div>
</div>

        <div className='center-heading'><center>What we offer at Poditivity</center></div>
        <div className='offerings'>
          <div className='for_students'>
            <h3>For Students</h3>
            <ul>
              <li>Master new skills with our exciting workshops and courses designed just for you.</li>
              <li>Utilize AI-driven technology for personalized learning experiences and performance analytics.</li>
              <li>Engage in a secure, supportive social media platform designed for students.</li>
              <li>Join a thriving multi-college community of like-minded students.</li>
              <li>Benefit from better communication tools with your institution.</li>
            </ul>
            <div className="auth-container">
              <div className="Signup">Sign up now</div>
              <div className="KnowMore">Sign In</div>
            </div>
          </div>
          <div className='for_institutions'>
            <h3>For Institutions</h3>
            <ul>
              <li>Easy online college registration process.</li>
              <li>Free communication and management support.</li>
              <li>Increase student engagement with our interactive and innovative learning tools.</li>
              <li>Customized dashboard to monitor Faculty and Students.</li>
              <li>ONEST decentralized network integration.</li>
            </ul>
            <div className="auth-container">
              <div className="Signup">Sign up now</div>
              <div className="KnowMore">Sign In</div>
            </div>
          </div>
        </div>
      </div>

      <div className='faqs_header'>
        <div className='center-heading1'>How Does It Work?</div>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={() => toggleFAQ(index, faqs, setFaqs)} />
          ))}
        </div>
      </div>
      {/* <div className='center-heading2'>Features</div>
      <div className='features'>
      <br/><br/>  
      <div class="main">
  
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div class="card_content">
          <h2 class="card_title">Podcasts</h2>
          <p class="card_text">Unleash your voice! Poditivity lets students create and share podcasts, fostering a vibrant space for expressive learning.</p>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
        <div class="card_content">
          <h2 class="card_title">Library Feature</h2>
          <p class="card_text">Collaborative learning simplified! Poditivity's library ensures seamless sharing and retrieval of notes for effective academic support.</p>
        
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=11"/></div>
        <div class="card_content">
          <h2 class="card_title">Uni Analytics</h2>
          <p class="card_text">Empower your institution! Poditivity offers analytics for universities, enhancing insights into student engagement and academic trends.</p>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=14"/></div>
        <div class="card_content">
          <h2 class="card_title">Connections</h2>
          <p class="card_text">Bridging the gap! Poditivity facilitates direct connections between students, universities, and corporates for seamless collaboration and growth</p>
         
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
        <div class="card_content">
          <h2 class="card_title">Secure Social Platform</h2>
          <p class="card_text">Connect with confidence! Poditivity prioritizes safety, providing a secure social media space for students to engage, share, and learn.</p>
        
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"/></div>
        <div class="card_content">
          <h2 class="card_title">Events and Workshops</h2>
          <p class="card_text"> Elevate your experience! Poditivity hosts exciting events and workshops, adding value to your academic journey.</p>
          
        </div>
      </div>
    </li>
  </ul>
</div>    
      </div> */}
      <div className="features-heading">
      Features
    </div>
      <Features/>


      <div className='faqs_header'>
        <div className='center-heading2'>FAQ</div>
        <div className="faqs">
          {newFaqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={() => toggleFAQ(index, newFaqs, setNewFaqs)} />
          ))}
        </div>
      </div>
      <div class="subscribe">
	<h2 class="subscribe__title">Let's keep in touch</h2>
	<p class="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
	<div class="form">
  <input type="email" class="form__email" placeholder="Enter your email address" />
  <button class="form__button">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
      </div>
    </div>
    <span>Send</span>
  </button>
</div>


</div>
    </>
  );
}

export default Home;
