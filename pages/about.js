import React from 'react';
import a1 from "./about.png";
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        background:"black",
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
    <img src={a1} class="center" alt=" found" width="1000" height="600"/>
    </div>
  );
};
  
export default About;