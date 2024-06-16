import React from 'react';

const CirclesAndLine = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <svg width="100%" height="auto" viewBox="0 0 1500 600" xmlns="http://www.w3.org/2000/svg">
        {/* First circle with image */}
        <clipPath id="circle1">
          <circle cx="440" cy="100" r="60" />
        </clipPath>
       
        <circle cx="440" cy="100" r="60" fill="orange" stroke="black" strokeWidth="2" />
        <image x="405" y="60" width="70" height="70" href="https://i.ibb.co/NjgcHPj/register.png" clipPath="url(#circle1)" />
        <text x="440" y="200" textAnchor="middle" fill="white">
          Step 1
          <tspan x="440" y="220" dy="1em" fontWeight="bold">
            Register
          </tspan>
        </text>

        {/* Second circle with image */}
        <clipPath id="circle2">
          <circle cx="820" cy="100" r="60" />
        </clipPath>
        <circle cx="820" cy="100" r="60" fill="orange" stroke="black" strokeWidth="2" />
        <image x="790" y="70" width="60" height="60" href="https://i.ibb.co/KGwJX4W/customize.png" clipPath="url(#circle2)" />

        <text x="820" y="200" textAnchor="middle" fill="white">Step 2
          <tspan x="820" y="220" dy="1em" fontWeight="bold">
            Customize
          </tspan>
        </text>

        {/* Third circle with image */}
        <clipPath id="circle3">
          <circle cx="1200" cy="100" r="60" />
        </clipPath>
        
        <circle cx="1200" cy="100" r="60" fill="orange" stroke="black" strokeWidth="2" />
        <image x="1170" y="70" width="60" height="60" href="https://i.ibb.co/8dJnxvF/connect.png" clipPath="url(#circle3)" />
        <text x="1200" y="200" textAnchor="middle" fill="white">Step 3
          <tspan x="1200" y="220" dy="1em" fontWeight="bold">
            Connect
          </tspan>
        </text>

        {/* Fourth circle with image */}
        <clipPath id="circle4">
          <circle cx="600" cy="450" r="60" />
        </clipPath>
        <circle cx="600" cy="450" r="60" fill="orange" stroke="black" strokeWidth="2" />
        <image x="570" y="420" width="60" height="60" href="https://i.ibb.co/PWHKtnw/integrate.png" clipPath="url(#circle4)" />

        <text x="600" y="550" textAnchor="middle" fill="white">Step 4
          <tspan x="600" y="570" dy="1em" fontWeight="bold">
            Integrate
          </tspan>
        </text>

        {/* Fifth circle with image */}
        <clipPath id="circle5">
          <circle cx="1000" cy="450" r="60" />
        </clipPath>
        <circle cx="1000" cy="450" r="60" fill="orange" stroke="black" strokeWidth="2" />
        <image x="970" y="420" width="60" height="60" href="https://i.ibb.co/NSQPyG9/launch.png" clipPath="url(#circle5)" />

        <text x="1000" y="550" textAnchor="middle" fill="white">Step 5
          <tspan x="1000" y="570" dy="1em" fontWeight="bold">
            Launch
          </tspan>
        </text>

        {/* Lines connecting the circles */}
        <line x1="520" y1="100" x2="740" y2="100" stroke="white" strokeWidth="2" />
        <line x1="900" y1="100" x2="1114" y2="100" stroke="white" strokeWidth="2" />
        <line x1="670" y1="450" x2="930" y2="450" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default CirclesAndLine;
