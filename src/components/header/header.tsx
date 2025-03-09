import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { useUser } from 'src/context/user-context';

import { navigationBarOptions } from './navigation-bar-options';

const Header: React.FC = () => {
    const { userType, logout } = useUser();

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    Food Delivery
                </Link>
                <nav className="header__nav">
                    {navigationBarOptions[userType]({ onClick: logout })}
                </nav>
            </div>
        </header>
    );
};

export default Header;
