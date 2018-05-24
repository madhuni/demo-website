import React from 'react';

import './logo.css';

const logo = (props) => {
  return (
    <div className="logo-container flex-row" id={props.id}>
      <img src={props.url} alt="Company Logo" className="logo" width={props.width} height={props.height}/>
    </div>
  );
};

export default logo;