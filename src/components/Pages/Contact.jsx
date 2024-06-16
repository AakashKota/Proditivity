import React, { useState } from 'react';
import './Contact.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 19.075314480255834,
  lng: 72.88153973865361
};

const ContactUs = () => {
  const [isInstitutionSelected, setIsInstitutionSelected] = useState(false);

  const handleRadioChange = (event) => {
    setIsInstitutionSelected(event.target.value === 'institution');
  };
  return (
    <div className="container">
      <div className="innerwrap">
        <div className='header_contact'>
          <p className='header_text_contact'>Contact us
          <p className='headertext_contact'>At Poditivity, we're dedicated to providing exceptional support and assistance to our users.<br/> Whether you have questions, feedback, or inquiries, our team is here to help.</p>
          </p>
        </div>
        <br/><br/><br/><br/>
        <div className='about_us_header'>
    <div className='location'>
    <img src="https://t4.ftcdn.net/jpg/02/54/62/25/360_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg" style={{width:'5rem', height:'5rem' , borderRadius:'50%'}} />
    <p className= 'location_text'>#25/9/164, Bapujinagar,Kazipet, <br/> Hanumakonda,Warangal-506003,Telangana</p>
   </div>
   <div className='mobile'>
   <img src="https://t4.ftcdn.net/jpg/04/76/40/09/360_F_476400933_A4gKwXtlgQFslfSuDvbV35eQcBIDlYjw.jpg"  style={{width:'5rem', height:'5rem' , borderRadius:'50%'}}/>


    <p className= 'mobile_text'>Email us: poditivity.company@gmail.com <br/> Phone no.: +91-8501967755</p>
   </div>
    

    </div>
    <br/><br/><br/><br/>

        <div className='header_footer'>
          
          <p className='headertext_contact'>For general inquiries, please email us at Poditivity.company@gmail.com or fill out the contact form below. <br/><br/> For press and media inquiries, please contact our PR team at info@poditivity.com</p>
          
        </div>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3795.1434677963516!2d79.502943!3d17.972061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU4JzE5LjQiTiA3OcKwMzAnMTAuNiJF!5e0!3m2!1sen!2sin!4v1718048381516!5m2!1sen!2sin"
    width="100%"
    height="600"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
          </div>
          <div className="col2 column2 last">
      <div className="sec2contactform">
        <p className="sec2frmtitle">Have questions or inquiries? We're here to help!</p>
        <form>
          <div className="form-group" style={{marginBottom:'3rem'}}>
            <label style={{padding:"0px"}}>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={!isInstitutionSelected}
                onChange={handleRadioChange}
              />
              Student
            </label>
            <label style={{padding:"10rem", border:'1px'}}>
              <input
                type="radio"
                name="userType"
                value="institution"
                checked={isInstitutionSelected}
                onChange={handleRadioChange}
              />
              Institution
            </label>
          </div>
          <div className="form-group">
            <div className="input-pair">
              <div className="input-group">
                <label className="text_col">Your Name*</label>
                <input className="col2 first" type="text" placeholder="Enter your Name"  required/>
              </div>
              <div className="input-group">
                <label className="text_col">Your college name*</label>
                <input className="col2 last" type="text" placeholder="Enter your college name"  required/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-pair">
              <div className="input-group">
                <label className="text_col">Email*</label>
                <input className="col2 first" type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <label className="text_col">Contact Number*</label>
                <input className="col2 last" type="text" placeholder="Contact Number" required />
              </div><br/>
              </div>
              <div className='form-group'>
              <div className="input-group">
                <label className="text_col">College Location*</label>
                <input className="col2 last" type="text" placeholder="Enter your college city" required />
              </div>
            </div>
          </div>
          {isInstitutionSelected && (
            <div className="form-group">
              <label className="text_col">Institute Name*</label>
              <input className="col2 first" type="text" placeholder="Institute Name" required />
            </div>
          )}
          <div className="form-group">
            <label className="text_col">Your Message*</label>
            <textarea name="textarea" cols="30" rows="7" placeholder="Your message here..." required></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit " />
          </div>
        </form>
      </div>
    </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
