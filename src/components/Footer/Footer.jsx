import React from "react";

import Social from "../Social/Social";

import "./footer.css";

const footerMenuLinks = [
  {
    href: "App.js",
    text: "О сайте",
  },
  {
    href: "App.js",
    text: "Лайфхаки",
  },
  {
    href: "App.js",
    text: "Новости",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span className="footer__logo">
          <img src="http://placehold.it/120x60" alt="placehold" />
          <span>
            На нашем сайте используются cookie для сбора статистической
            информации.
          </span>
        </span>
        <ul className="footer__about">
          {footerMenuLinks.map((el) => (
            <li key={el.text} className="footer__aboutItem">
              <a href={el.href}>{el.text}</a>
            </li>
          ))}
        </ul>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
