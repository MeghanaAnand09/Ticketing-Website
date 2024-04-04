import React from 'react';
import im2 from "./concertb.png";
import si1 from "./s1.png";
import si2 from "./s2.png";
import si3 from "./s3.png";
import si4 from "./s4.png";
import si5 from "./s5.png";
import si6 from "./s6.png";
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div style={{background:'black'}}>         
     <section class="section">
                <div class="box-main">
                    <div class="concert">
                    <img src={im2} class="center" alt=" concert" width="1300" height="800"/>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program" style={{ color: 'white'}}>
                            <br></br>
                            CURRENT CONCERTS
                        </h1>

                        <figure>
<div class="row">
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}> <img src={si1} id="si1" alt=" Snow" style={{width:'80%'} }/></button></Link>
   
      <h3 style={{color:'white'}}> Stebin Ben Live in Concert</h3>
      <figcaption >Nov 30: Phoenix MarketCity</figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button to='/form' style={{background:'black'}}><img src={si2} alt=" Snow" style={{width:'80%'}}/></button></Link>
      <h3 style={{color:'white'}}> Supermoon ft. B Praak -King of Hearts Tour</h3>
      <figcaption>Nov 8: Orion Mall</figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si3} alt=" Snow" style={{width:'80%'}} height="275"/></button></Link>
    <h3 style={{color:'white'}}>Armaan Malik India Tour </h3>
      <figcaption>Nov 22: UB City Amphitheatre</figcaption>
    </div>
    
</div>

</figure>
<br></br>
<br></br>
<br></br>
<br></br>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                    <figure>
<div class="row">
    <div class="column">
    <Link to="/form"><button style={{background:'black'}} ><img src={si4} alt="Snow" style={{width:'80%'}} height="370"/></button></Link>
      <h3 style={{color:'white'}}> Emiway Bantai Live</h3>
      <figcaption>Nov 26: Phoenix MarketCity</figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si5} alt="Snow" style={{width:'80%'}}height="370"/></button></Link>
      <h3 style={{color:'white'}}> DJ Snake</h3>
      <figcaption>Nov 27: Bengaluru International Exhibition Centre</figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}><img src={si6} alt="Snow" style={{width:'80%'}} height="370"/></button></Link>
      <h3 style={{color:'white'}}> Vini Vici Live in Bangalore</h3>
      <figcaption>Nov 20: Kumara Krupa Guest House</figcaption>
    </div>
  </div>
</figure>
                       
                    </div>
                </div>
            </section>            
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
  );
};
  
export default Events;