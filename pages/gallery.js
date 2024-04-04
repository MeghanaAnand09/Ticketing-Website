import React from 'react';
import g1 from "./g1.png";
import g2 from "./g2.png";
import g3 from "./g3.png";
import g4 from "./g4.png";
import g5 from "./g5.png";
import g6 from "./g6.png";
import g7 from "./g7.png";
import g8 from "./g8.png";

const Gallery = () => {
  return (
    <div style={{background:'black'}}>
    <img src={g1} alt=" Snow" style={{width:'50%'}}/>
    <img src={g2} alt=" Snow" style={{width:'50%'}}/>
    <img src={g3} alt=" Snow" style={{width:'50%'}} />
    <img src={g4} alt=" Snow" style={{width:'50%'}}/>
    <img src={g5} alt=" Snow" style={{width:'50%'}}/>
    <img src={g6} alt=" Snow" style={{width:'50%'}} />
    <img src={g7} alt=" Snow" style={{width:'50%'}}/>
    <img src={g8} alt=" Snow" style={{width:'50%'}}/>
    </div>
  );
};
  
export default Gallery;