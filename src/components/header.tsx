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
                            <li className='header_link'><Link to="/client/restraunt">Restaurants</Link></li>
                            <li className='header_link'><Link to="/client/cart">Cart</Link></li>
                            <li className='header_link'><Link to="/client/orders">Orders</Link></li>
                            <li className='header_link'><Link to="/client/profile">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'courier' && (
                        <>
                            <li className='header_link'><Link to="/courier/orders">Orders</Link></li>
                            <li className='header_link'><Link to="/courier/profile">Profile</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'restaurant' && (
                        <>
                            <li className='header_link'><Link to="/restaurant/dashboard">Dashboard</Link></li>
                            <li className='header_link'><Link to="/restaurant/orders">Orders</Link></li>
                            <li className='header_link'><Link to="/restaurant/profile">Profile</Link></li>
                            <li className='header_link'>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'admin' && (
                        <>
                            <li className='header_link'><Link to="/admin/dashboard">Dashboard</Link></li>
                            <li className='header_link'><Link to="/admin/users">Users</Link></li>
                            <li className='header_link'><Link to="/admin/restaurants">Restaurants</Link></li>
                            <li className='header_link'><Link to="/admin/delivery">Delivery</Link></li>
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </>
                    )}
                    {userType === 'none' && (
                        <>
                            <li className='header_link'><Link to="/login">Login</Link></li>
                            <li className='header_link'><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;