import './footer.css';
import Social from "../Social/Social";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
            <span className="footer__logo">
                <img src="http://placehold.it/120x60"/>
                <span>На нашем сайте используются cookie для сбора статистической информации.</span>
            </span>
            <ul className="footer__about">
                <li><a href="#">О сайте</a></li>
                <li><a href="#">Лайфхаки</a></li>
                <li><a href="#">Обратная связь</a></li>
                <li><a href="#">Статьи</a></li>
            </ul>
            <Social />
            </div>
        </footer>
    )
}

export default Footer;