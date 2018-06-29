/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ethereal-journey.css';

import img1 from '../../assets/images/ethereal-journey/1.jpg';
import img2 from '../../assets/images/ethereal-journey/2.jpg';
import img3 from '../../assets/images/ethereal-journey/3.jpg';
import img4 from '../../assets/images/ethereal-journey/4.jpg';
import img5 from '../../assets/images/ethereal-journey/5.jpg';
import img6 from '../../assets/images/ethereal-journey/6.jpg';
import img7 from '../../assets/images/ethereal-journey/7.jpg';
import img8 from '../../assets/images/ethereal-journey/8.jpg';
import img9 from '../../assets/images/ethereal-journey/9.jpg';
// import img10 from '../../assets/images/ethereal-journey/10.jpg';
// import img11 from '../../assets/images/ethereal-journey/11.jpg';
import img12 from '../../assets/images/ethereal-journey/12.jpg';
// import img13 from '../../assets/images/ethereal-journey/13.jpg';
import img14 from '../../assets/images/ethereal-journey/14.jpg';
import img15 from '../../assets/images/ethereal-journey/15.jpg';
import img16 from '../../assets/images/ethereal-journey/16.jpg';
// import img17 from '../../assets/images/ethereal-journey/17.jpg';
// import img18 from '../../assets/images/ethereal-journey/18.jpg';

const etherealJourney = (props) => {
  return (
    <Carousel autoPlay={true} showIndicators={false} infiniteLoop={true} interval={5000} emulateTouch={true}>
      <div>
        <img src={img1} alt="Journey"/>
      </div>
      <div>
        <img src={img2} alt="Journey"/>
      </div>
      <div>
        <img src={img3} alt="Journey"/>
      </div>
      <div>
        <img src={img4} alt="Journey"/>
      </div>
      <div>
        <img src={img5} alt="Journey"/>
      </div>
      <div>
        <img src={img6} alt="Journey"/>
      </div>
      <div>
        <img src={img7} alt="Journey"/>
      </div>
      <div>
        <img src={img8} alt="Journey"/>
      </div>
      <div>
        <img src={img9} alt="Journey"/>
      </div>
      {/* <div>
        <img src={img10} alt="Journey"/>
      </div> */}
      {/* <div>
        <img src={img11} alt="Journey"/>
      </div> */}
      <div>
        <img src={img12} alt="Journey"/>
      </div>
      {/* <div>
        <img src={img13} alt="Journey"/>
      </div> */}
      <div>
        <img src={img14} alt="Journey"/>
      </div>
      <div>
        <img src={img15} alt="Journey"/>
      </div>
      <div>
        <img src={img16} alt="Journey"/>
      </div>
      {/* <div>
        <img src={img17} alt="Journey"/>
      </div> */}
      {/* <div>
        <img src={img18} alt="Journey"/>
      </div> */}
    </Carousel>
  );
};

export default etherealJourney;