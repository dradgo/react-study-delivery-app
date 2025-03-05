import { ReactNode } from 'react';
import { UsersType } from 'src/types/types';
import { Link } from 'react-router-dom';

type MenuItemsProps = {
  onClick: () => void;
};

export const menuItems: Record<UsersType, (props: MenuItemsProps) => ReactNode> = {
  client: ({ onClick }) => (
    <>
      <li className='header_link'><Link to="/client/restraunt">Рестораны</Link></li>
      <li className='header_link'><Link to="/client/cart">Корзина</Link></li>
      <li className='header_link'><Link to="/client/orders">Заказы</Link></li>
      <li className='header_link'><Link to="/client/profile">Профиль</Link></li>
      <li>
        <button onClick={onClick} className="logout-button">Logout</button>
      </li>
    </>
  ),
  courier: ({ onClick }) => (
    <>
      <li className='header_link'><Link to="/courier/orders">Заказы</Link></li>
      <li className='header_link'><Link to="/courier/profile">Профиль</Link></li>
      <li>
        <button onClick={onClick} className="logout-button">Выйти</button>
      </li>
    </>
  ),
  restaurant: ({ onClick }) => (
    <>
      <li className='header_link'><Link to="/restaurant/dashboard">Дашборд</Link></li>
      <li className='header_link'><Link to="/restaurant/orders">Заказы</Link></li>
      <li className='header_link'><Link to="/restaurant/profile">Профиль</Link></li>
      <li>
        <button onClick={onClick} className="logout-button">Выйти</button>
      </li>
    </>
  ),
  admin: ({ onClick }) => (
    <>
      <li className='header_link'><Link to="/admin/dashboard">Дашборд</Link></li>
      <li className='header_link'><Link to="/admin/users">Пользователи</Link></li>
      <li className='header_link'><Link to="/admin/restaurants">Рестораны</Link></li>
      <li className='header_link'><Link to="/admin/delivery">Доставка</Link></li>
      <li>
        <button onClick={onClick} className="logout-button">Выход</button>
      </li>
    </>
  ),
  none: () => (
    <>
      <li className='header_link'><Link to="/login">Выход</Link></li>
      <li className='header_link'><Link to="/register">Регистрация</Link></li>
    </>
  ),
};
