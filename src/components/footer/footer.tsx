import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer__section">
                    <h3>Food Delivery</h3>
                    <p>
                        Доставляем вкусную еду прямо к вашей двери. Быстро, качественно и с заботой
                        о каждом клиенте.
                    </p>
                </div>
                <div className="footer__section">
                    <h3>Меню</h3>
                    <ul className="footer__links">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/restaurants">Рестораны</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                        <li>
                            <Link to="/contact">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Контакты</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="tel:+79001234567">+7 (900) 123-45-67</a>
                        </li>
                        <li>
                            <a href="mailto:info@fooddelivery.ru">info@fooddelivery.ru</a>
                        </li>
                        <li>г. Москва, ул. Пушкина, д. 1</li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Мы в соцсетях</h3>
                    <div className="footer__social">
                        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                            VK
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            Telegram
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            YouTube
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Food Delivery. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
