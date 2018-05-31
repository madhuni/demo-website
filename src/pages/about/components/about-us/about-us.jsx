/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './about-us.css';

const aboutUs = (props) => {
  return (
    <div className="about-us-container">
      <div className="about-ethereal-machines">
        <div className="about-title subtitle u-margin-bottom-small">
          <span>Ethereal Machines</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi quod repellendus in harum est dignissimos fugiat qui accusantium corporis aliquam earum debitis temporibus nulla explicabo, vitae eveniet esse iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus exercitationem fugiat assumenda ullam libero eligendi obcaecati hic, sapiente voluptatum! Voluptates necessitatibus modi nemo nesciunt numquam expedita impedit exercitationem libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente cumque pariatur accusamus, quia similique possimus repellendus cupiditate dolorem quisquam tempore vitae, illum ex ipsam ab, ea dicta numquam in.</p>
      </div>
      <div className="vision-mission flex-row">
        <div className="vision">
          <div className="about-title subtitle u-margin-bottom-small">
            <span>Our Vision</span>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ex quisquam possimus libero obcaecati! Deleniti, perferendis optio unde quibusdam, illo repellendus doloremque saepe nemo asperiores libero temporibus quisquam cupiditate dolores.</p>
        </div>
        <div className="mission">
          <div className="about-title subtitle u-margin-bottom-small">
            <span>Our Mission</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis officiis quod, aliquid reprehenderit ducimus voluptates obcaecati neque. Itaque inventore repellendus, voluptas ex earum dolores corporis totam? Nulla, natus dolorem.</p>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;