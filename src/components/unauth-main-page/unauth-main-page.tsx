import { Link } from 'react-router-dom';

import { useState } from 'react';
import RegisterModal from '../register-modal';

export const UnauthMainPage = () => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <div className="welcome-container">
            <header className="welcome-header">
                <h1>Добро пожаловать в Food Delivery!</h1>
            </header>
            <section className="welcome-content">
                <p>Быстро и удобно заказывайте еду из любимых ресторанов.</p>
                <div className="welcome-buttons">
                    <Link to="/login" className="btn btn-primary">
                        Войти
                    </Link>{' '}
                    <br />
                    <button className="btn btn-secondary" onClick={() => setIsRegisterOpen(true)}>
                        Зарегистрироваться
                    </button>
                </div>
            </section>
            <footer className="welcome-footer" />
            {isRegisterOpen && <RegisterModal onClose={() => setIsRegisterOpen(false)} />}
        </div>
    );
};
