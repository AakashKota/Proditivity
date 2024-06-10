import React from 'react';
import './features2.css';

const featuresData = [
  {
    id: 1,
    image: 'https://i.ibb.co/t8ZYKSy/podcast.png',
    heading: 'Safe social media',
    content: 'Safe and secure environment for students of tomorrow'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/9VDR5VV/library.png',
    heading: 'Strategic Guidance',
    content: 'Get guidance with world class leaders from your industry'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/m0GkYnW/analytics.png',
    heading: 'Easy communication',
    content: 'Seamless communication with Institutions faculty'
  },
  {
    id: 4,
    image: 'https://i.ibb.co/zJSSqD8/connections.png',
    heading: 'Community Support',
    content: 'Multi-college community with world leading colleges'
  }
];

const Feature2 = ({ image, heading, content }) => (
  <div className="feature1">
    <div className="image1">
      <img src={image} alt={heading} />
    </div>
    <div className="heading_features">
      {heading}
    </div>
    <div className="content_features">
      {content}
    </div>
  </div>
);

const Features2 = () => (
  <section className="features" id="features">
    
    <div className="features-container">
      {featuresData.map(feature => (
        <Feature2 key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Features2;
