import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { useUser } from '../../context/user-context';
import { navigationBarOptions } from './navigation-bar-options';

const Header: React.FC = () => {
    const { userType, logout } = useUser();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Food Delivery</Link>
            </div>
            <nav className="nav">
                <ul>{navigationBarOptions[userType]({ onClick: logout })}</ul>
            </nav>
        </header>
    );
};

export default Header;
