import React, { useEffect, useState } from "react";
import './Courses.css';
import "./Institution.css";
import { Button } from "antd";
import CirclesAndLine from "../../CirclesAndLine/CirclesAndLine";

function Institution() {
  const advantagesData = [
    { text: "Complete Digital Process", imgSrc: "https://i.ibb.co/R3FXdRM/digital.png" },
    { text: "Efficiency", imgSrc: "https://i.ibb.co/sRnBqyD/efficiency.png" },
    { text: "Engagement", imgSrc: "https://i.ibb.co/0nTVgd4/engagement.png" },
    { text: "Customised Faculty Accounts", imgSrc: "https://i.ibb.co/KGwJX4W/customize.png" },
    { text: "Communication", imgSrc: "https://i.ibb.co/RBQN9XH/communication.png" }
  ];

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://35.154.125.232:3000/api/website/course');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="Institute_header">
        <span className="Edu">Education Made <br />Seamless</span>
        <span className="welcome">Welcome to Poditivity, your gateway to a world of educational excellence.</span>
      </div>

      <div className="Advantages">
        <span className="advantages">Unique advantages for Institutions</span>
        <span className="signupInstitute">
          <Button className="signup">Sign up</Button>
        </span>
      </div>

      <div className="Advantages2">
        {advantagesData.map((advantage, index) => (
          <div key={index} className="DigitalProcess">
            <img src={advantage.imgSrc} alt="advantage" className="advantage-img" />
            <span className="advantage-txt">{advantage.text}</span>
          </div>
        ))}
      </div>

      <div className="steps">
        <span className="steps_text">5 Simple steps to get onboarded</span>
      </div>

      <div className="steps_images">
        <CirclesAndLine />
      </div>

      <div className="Invest_Now">
        <span className="signupInstitute">
          <Button className="InvestNow">Register</Button>
        </span>
      </div>

      <div className='Courses_bg'>
        <h1 className='Courses_header'>Check out our Courses</h1>
        {loading && <p>Loading courses...</p>}
        {error && <p>Error fetching courses: {error}</p>}
        {courses.map((course) => (
          <div key={course.courseId} className="course-item">
            <h2>{course.title}</h2>
            <p>{course.body}</p>
            <p>Amount: ${course.amount}</p>
            <p>Created at: {new Date(course.createdAt).toLocaleString()}</p>
            <p>Updated at: {new Date(course.updatedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="Footer_Institute">
        <span className="News">Exciting News!</span><br />
        <p className="app_institute">Our <span className="app1">App</span> is Coming Soon</p>
        <img src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1" alt="Google Play Badge" style={{ width: '150px', height: '50px', margin: '0px' }} />
        <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" alt="App Store Badge" style={{ width: '150px', height: '160px', marginLeft: '30px', marginBottom: '0px' }} />
        <br />
      </div>
    </>
  );
}

export default Institution;
