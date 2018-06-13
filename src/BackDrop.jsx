import React from 'react';

import './BackDrop.css'

export default function BackDrop(props) {
  return(
    <div>
      <div className="backdrop">
        <img src={props.past} className="backimage" alt="" />
        <img src={props.present} className="backimage" alt="" />
        <img src={props.future} className="backimage" alt="" />
      </div>
    </div>
  );
}
