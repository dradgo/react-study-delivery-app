import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { useUser } from "../../context/user-context";
import { menuItems } from './constants';

const Header: React.FC = () => {
    const { userType, setUserType } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userType');
        setUserType('none');
        navigate('/login');
    };

    const currentNavBar = () => {
        const menuFunc = menuItems[userType] || menuItems.none;
        return menuFunc({ onClick: handleLogout });
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Food Delivery</Link>
            </div>
            <nav className="nav">
                <ul>
                    {currentNavBar()}
                </ul>
            </nav>
        </header>
    );
};

export default Header;