import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-page.css';

const LoginPage: React.FC = () => {
    const [userType, setUserType] = useState('client');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Logging in as ${userType} with email: ${email}`);
        localStorage.setItem('userType', userType);
        navigate(`/home/${userType}`);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    User Type:
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="client">Клиент</option>
                        <option value="courier">Курьер</option>
                        <option value="admin">Администратор</option>
                        <option value="restaurant">Ресторан</option>
                    </select>
                </label> <br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </label> <br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
