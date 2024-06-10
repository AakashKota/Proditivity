import React from 'react';
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
  return (
    <div className="container">
      <div className="innerwrap">
        <div className='header_contact'>
          <p className='header_text_contact'>Contact us
          <p className='headertext_contact'>At Poditivity, we're dedicated to providing exceptional support and assistance to our users. Whether you have questions, feedback, or inquiries, our team is here to help.</p>
          </p>
        </div>
        <br/><br/><br/><br/>
        <div className='about_us_header'>
    <div className='location'>
    <img src="https://i.ibb.co/Y8vt0Fv/email.png" alt="email" border="0"/>
    <p className= 'location_text'>#25/9/164, Bapujinagar,Kazipet, <br/> Hanumakonda,Warangal-506003,Telangana</p>
   </div>
   <div className='mobile'>
   <img 
  src="https://i.ibb.co/Y8vt0Fv/email.png" 
  alt="email" 
  style={{
    background: '#FFB649',
    padding: '10px',
    borderRadius: '50%', // Use 50% for a circular shape
    width: '80px',      // Set the width and height to maintain the circular shape
    height: '80px',
    objectFit: 'cover' // or 'contain' to fit the image within the circular shape
  }}
/>


    <p className= 'mobile_text'>Email us: poditivity.company@gmail.com <br/> Phone no.: +91-9515110226</p>
   </div>
    

    </div>
    <br/><br/><br/><br/>

        <div className='header_footer'>
          
          <p className='headertext_contact'>For general inquiries, please email us at Poditivity.company@gmail.com or fill out the contact form below. <br/><br/> For press and media inquiries, please contact our PR team at info@poditivity.com</p>
          
        </div>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center}>
                  <InfoWindow position={center}>
                    <div><strong>My Location</strong><br />Mumbai<br /></div>
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="col2 column2 last">
            <div className="sec2contactform">
              <h3 className="sec2frmtitle">Have questions or inquiries? We're here to help!</h3>
              <form>
                <div className="form-group">
                  <div className="input-pair">
                    <div className="input-group">
                      <label className='text_col'>First Name</label>
                      <input className="col2 first" type="text" placeholder="First Name" />
                    </div>
                    <div className="input-group">
                      <label className='text_col'>Last Name</label>
                      <input className="col2 last" type="text" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-pair">
                    <div className="input-group">
                      <label className='text_col'>Email</label>
                      <input className="col2 first" type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                      <label className='text_col'>Contact Number</label>
                      <input className="col2 last" type="text" placeholder="Contact Number" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className='text_col'>Your Message</label>
                  <textarea name="textarea" cols="30" rows="7" placeholder="Your message here..."></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send" />
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
