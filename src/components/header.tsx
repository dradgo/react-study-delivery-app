import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { useUser } from "../context/user-context";

const Header: React.FC = () => {
    const { userType, setUserType } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userType');
        setUserType('none');
        navigate('/login');
    };
    console.log(userType);
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Food Delivery</Link>
            </div>
            <nav className="nav">
                <ul>
                    {(userType.toLocaleLowerCase() === 'client') && (
                        <>
                            <li className='header_link'><Link to="/client/restraunt">Рестораны</Link></li>
                            <li className='header_link'><Link to="/client/cart">Корзина</Link></li>
                            <li className='header_link'><Link to="/client/orders">Заказы</Link></li>
                            <li className='header_link'><Link to="/client/profile">Профиль</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'courier' && (
                        <>
                            <li className='header_link'><Link to="/courier/orders">Заказы</Link></li>
                            <li className='header_link'><Link to="/courier/profile">Профиль</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Выйти</button>
                            </li>
                        </>
                    )}
                    {userType === 'restaurant' && (
                        <>
                            <li className='header_link'><Link to="/restaurant/dashboard">Дашборд</Link></li>
                            <li className='header_link'><Link to="/restaurant/orders">Заказы</Link></li>
                            <li className='header_link'><Link to="/restaurant/profile">Профиль</Link></li>
                            <li className='header_link'>
                                <button onClick={handleLogout} className="logout-button">Выйти</button>
                            </li>
                        </>
                    )}
                    {userType === 'admin' && (
                        <>
                            <li className='header_link'><Link to="/admin/dashboard">Дашборд</Link></li>
                            <li className='header_link'><Link to="/admin/users">Пользователи</Link></li>
                            <li className='header_link'><Link to="/admin/restaurants">Рестораны</Link></li>
                            <li className='header_link'><Link to="/admin/delivery">Доставка</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Выход</button>
                            </li>
                        </>
                    )}
                    {userType === 'none' && (
                        <>
                            <li className='header_link'><Link to="/login">Выход</Link></li>
                            <li className='header_link'><Link to="/register">Регистрация</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;