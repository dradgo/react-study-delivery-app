import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
    const [userType, setUserType] = useState('none');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
            setUserType(storedUserType);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('userType');
        setUserType('');
        navigate('/login');
    };
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Food Delivery</Link>
            </div>
            <nav className="nav">
                <ul>
                    {userType === 'client' && (
                        <>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'courier' && (
                        <>
                            <li><Link to="/courier/orders">Orders</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'restaurant' && (
                        <>
                            <li><Link to="/restaurant/dashboard">Dashboard</Link></li>
                            <li><Link to="/restaurant/orders">Orders</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'admin' && (
                        <>
                            <li><Link to="/admin/dashboard">Dashboard</Link></li>
                            <li><Link to="/admin/users">Users</Link></li>
                            <li><Link to="/admin/restaurants">Restaurants</Link></li>
                            <li><Link to="/admin/delivery">Delivery</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'none' && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;