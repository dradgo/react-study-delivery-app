import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-page.css';
import { useUser } from "../context/user-context";
import Input from '../components/input/input';
import EmailIcon from '../../public/icons/email-svgrepo-com.svg';
import PasswordIcon from '../../public/icons/password-icon.svg';

const LoginPage: React.FC = () => {
    const { setUserType } = useUser();
    const [userType, setUserTypeLocal] = useState('client');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Logging in as ${userType} with email: ${email}`);
        localStorage.setItem('userType', userType);
        setUserType(userType);
        navigate(`/home/${userType}`);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    User Type:
                    <select value={userType} onChange={(e) => setUserTypeLocal(e.target.value)}>
                        <option value="client">Клиент</option>
                        <option value="courier">Курьер</option>
                        <option value="admin">Администратор</option>
                        <option value="restaurant">Ресторан</option>
                    </select>
                </label> <br />

                <Input icon={<EmailIcon />} placeholder='Почта' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input icon={<PasswordIcon />} placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
