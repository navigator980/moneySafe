import React from "react";

import Social from "../Social/Social";

import "./header.css";

const headerMenuLinks = [
  {
    href: "App.js",
    text: "Главная",
  },
  {
    href: "App.js",
    text: "Статьи",
  },
  {
    href: "App.js",
    text: "Карта сайта",
  },
];

const Header = () => {
  return (
    <header className="header">
      <a href="index.js">
        <img src="http://placehold.it/120x60" alt="placehold" />
      </a>
      <ul className="header__menu">
        {headerMenuLinks.map((el) => (
          <li key={el.text} className="header__item">
            <a href={el.href}>{el.text}</a>
          </li>
        ))}
      </ul>
      <Social />
    </header>
  );
};

export default Header;
