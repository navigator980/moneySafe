import React from "react";

import "./social.css";

const socialButtons = [
  {
    href: "App.js",
    button: <img src="http://placehold.it/40x40" alt="YT" />,
  },
  {
    href: "App.js",
    button: <img src="http://placehold.it/40x40" alt="INST" />,
  },
  {
    href: "App.js",
    button: <img src="http://placehold.it/40x40" alt="VK" />,
  },
];

const Social = () => {
  return (
    <div>
      <ul className="social">
        {socialButtons.map((el) => (
          <li key={el.button} className="social__item">
            <a href={el.href}>{el.button}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
