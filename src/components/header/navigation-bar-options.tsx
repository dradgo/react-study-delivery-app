import { ReactNode } from 'react';
import { UsersType } from 'src/types/types';
import { NavLink } from 'react-router-dom';
import { INTERNAL_ROUTES } from 'src/constants/links';
import './header.scss';

type MenuItemsProps = {
    onClick: () => void;
};

export const navigationBarOptions: Record<UsersType, (props: MenuItemsProps) => ReactNode> = {
    client: ({ onClick }) => (
        <>
            <li className="header_link">
                <NavLink to="/client/restraunt" className="header__link">
                    Рестораны
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/client/cart" className="header__link">
                    Корзина
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/client/orders" className="header__link">
                    Заказы
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/client/profile" className="header__link">
                    Профиль
                </NavLink>
            </li>
            <li>
                <button onClick={onClick} className="logout-button">
                    Logout
                </button>
            </li>
        </>
    ),
    courier: ({ onClick }) => (
        <>
            <li className="header_link">
                <NavLink to="/home/courier" className="header__link">
                    Заказы
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/courier/profile" className="header__link">
                    Профиль
                </NavLink>
            </li>
            <li>
                <button onClick={onClick} className="logout-button">
                    Выйти
                </button>
            </li>
        </>
    ),
    restaurant: ({ onClick }) => (
        <>
            <li className="header_link">
                <NavLink to="home/restaurant" className="header__link">
                    Дашборд
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to={INTERNAL_ROUTES.restaurantManage} className="header__link">
                    Меню
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/restaurant/orders" className="header__link">
                    Заказы
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/restaurant/profile" className="header__link">
                    Профиль
                </NavLink>
            </li>
            <li>
                <button onClick={onClick} className="logout-button">
                    Выйти
                </button>
            </li>
        </>
    ),
    admin: ({ onClick }) => (
        <>
            <li className="header_link">
                <NavLink to="/admin/dashboard" className="header__link">
                    Дашборд
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/admin/users" className="header__link">
                    Пользователи
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/admin/restaurants" className="header__link">
                    Рестораны
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/admin/orders" className="header__link">
                    Доставка
                </NavLink>
            </li>
            <li>
                <button onClick={onClick} className="logout-button">
                    Выход
                </button>
            </li>
        </>
    ),
    none: () => (
        <>
            <li className="header_link">
                <NavLink to="/login" className="header__link">
                    Выход
                </NavLink>
            </li>
            <li className="header_link">
                <NavLink to="/register" className="header__link">
                    Регистрация
                </NavLink>
            </li>
        </>
    ),
};
