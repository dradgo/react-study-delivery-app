import React from 'react';

import { useUser } from '../context/user-context'
import { UnauthMainPage } from '../components/unauth-main-page/unauth-main-page';

import './welcome-page.css';

const WelcomePage: React.FC = () => {
    const { userType } = useUser();

    return (
        userType === 'none' ?
            <UnauthMainPage /> : <div>I have been authed successfully as a {userType}</div>
    );
};

export default WelcomePage;