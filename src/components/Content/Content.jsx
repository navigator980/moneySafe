import React from "react";

import "./content.css";

const contentBlockItem = [
  {
    href: "https://yandex.ru",
    text: "Тут должна быть ссылка на Yandex",
    img: "http://placehold.it/200x100",
  },
  {
    href: "https://google.com",
    text: "Тут должна быть ссылка на Google",
    img: "http://placehold.it/200x100",
  },
  {
    href: "https://mail.ru",
    text: "Тут должна быть ссылка на MailRu",
    img: "http://placehold.it/200x100",
  },
];

const Content = () => {
  return (
    <div className="content__block">
      <ul className="content__items">
        {contentBlockItem.map((el) => (
          <li key={el.text} className="content__item">
            <a href={el.href}>
              <img src={el.img} alt="placeholder" />
              {el.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
