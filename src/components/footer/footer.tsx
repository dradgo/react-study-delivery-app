import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Food Delivery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
