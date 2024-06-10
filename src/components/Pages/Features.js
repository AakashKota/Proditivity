import React from 'react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    image: 'https://i.ibb.co/t8ZYKSy/podcast.png',
    heading: 'Podcasts',
    content: 'Unleash your voice! Poditivity lets students create and share podcasts, fostering a vibrant space for expressive learning.'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/9VDR5VV/library.png',
    heading: 'Library Feature',
    content: 'Collaborative learning simplified! Poditivity\'s library ensures seamless sharing and retrieval of notes for effective academic support.'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/m0GkYnW/analytics.png',
    heading: 'Uni Analytics',
    content: 'Empower your institution! Poditivity offers analytics for universities, enhancing insights into student engagement and academic trends.'
  },
  {
    id: 4,
    image: 'https://i.ibb.co/zJSSqD8/connections.png',
    heading: 'Connections',
    content: 'Bridging the gap! Poditivity facilitates direct connections between students, universities, and corporates for seamless collaboration and growth.'
  },
  {
    id: 5,
    image: 'https://i.ibb.co/tQ8mPdh/social-platform.png',
    heading: 'Secure Social Platform',
    content: 'Connect with confidence! Poditivity prioritizes safety, providing a secure social media space for students to engage, share, and learn.'
  },
  {
    id: 6,
    image: 'https://i.ibb.co/f04gx3Y/events.png',
    heading: 'Events and Workshops',
    content: 'Elevate your experience! Poditivity hosts exciting events and workshops, adding value to your academic journey through diverse learning opportunities.'
  }
];

const Feature = ({ image, heading, content }) => (
  <div className="feature">
    <div className="image">
      <img src={image} alt={heading} />
    </div>
    <div className="heading">
      {heading}
    </div>
    <div className="content">
      {content}
    </div>
  </div>
);

const Features = () => (
  <section className="features" id="features">
    <div className="features-container">
      {featuresData.map(feature => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;
