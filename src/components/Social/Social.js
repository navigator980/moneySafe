import React from "react";

import "./social.css";

const Social = () => {
  return (
    <div>
      <ul className="social">
        <li className="social__item">
          <a href="App.js">
            <img src="http://placehold.it/40x40" alt="YT" />
          </a>
        </li>
        <li classNam e="social__item">
          <a href="App.js#">
            <img src="http://placehold.it/40x40" alt="INTS" />
          </a>
        </li>
        <li className="social__item">
          <a href="App.js">
            <img src="http://placehold.it/40x40" alt="VK" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
