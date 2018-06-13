import React from 'react';

import './NavBar.css';

export default function NavBar() {
  return(
    <div className="navcontainer">
      <h1 className="judyname">J. HAHN</h1>
      <div className="navbox">
        <a><p className="navtext">WORKS</p></a>
        <a><p className="navtext">ABOUT</p></a>
        <a><p className="navtext">CONTACT</p></a>
      </div>
    </div>
  );
}
