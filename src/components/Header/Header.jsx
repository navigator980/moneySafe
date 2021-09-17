import React from "react";

import Social from "../Social/Social";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="index.js">
        <img src="http://placehold.it/120x60" alt="placehold" />
      </a>
      <ul className="header__menu">
        <li className="header__item">
          <span>
            <a href="index.js">Главная</a>
          </span>
        </li>
        <li className="header__item">
          <span>
            <a href="index.js">Статьи</a>
          </span>
        </li>
        <li className="header__item">
          <span>
            <a href="index.js">Карта сайта</a>
          </span>
        </li>
      </ul>
      <Social />
    </header>
  );
};

export default Header;
