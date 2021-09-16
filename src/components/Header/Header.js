import './header.css';
import Social from "../Social/Social";

const Header = () => {
    return (
        <header className="header">
            <a href="#">
                <img src="http://placehold.it/120x60"/>
            </a>
            <ul className="header__menu">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Статьи</a></li>
                <li><a href="#">Карта сайта</a></li>
            </ul>
            <Social />
        </header>
    )
}

export default Header;
