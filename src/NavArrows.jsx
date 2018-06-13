import React from 'react';

import './NavArrows.css'

export default function NavArrows(props) {
  return(
    <div className="arrowcontainer">
      <div className="leftsidearrow" onClick={() => {props.left()}}>
        <div className="leftarrow arrow"></div>
      </div>
      <div className="rightsidearrow" onClick={() => {props.right()}}>
        <div className="rightarrow arrow"></div>
      </div>
    </div>
  );
}
