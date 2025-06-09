import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, UsersType } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { INTERNAL_ROUTES } from '../constants/links';

type UserContextProviderType = {
    userType: UsersType;
    cart: CartItem[];
    setUserType: Function;
    setCart: Function;
    credentials?: {
        email: string;
        // password: string
    };
    isAuth: boolean;
    login: (user: UsersType) => void;
    logout: () => void;
};
const UserContext = createContext<UserContextProviderType>({
    userType: 'none',
    cart: [],
    setUserType: () => {},
    setCart: () => {},
    isAuth: false,
    login: () => {},
    logout: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
    const [isAuth, setIsAuth] = useState(false);
    const [userType, setUserType] = useState<UsersType>(
        (localStorage.getItem('userType') as UsersType) || 'none'
    );
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const login = (user: UsersType): void => {
        setUserType(user);
        localStorage.setItem('userType', user);
        setIsAuth(true);
        navigate(`${INTERNAL_ROUTES.home}/${user}`);
    };

    const logout = (): void => {
        setIsAuth(false);
        setUserType('none');
        localStorage.removeItem('userType');
        navigate(INTERNAL_ROUTES.login);
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setUserType((localStorage.getItem('userType') as UsersType) || 'none');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <UserContext.Provider
            value={{ userType, setUserType, cart, setCart, isAuth, login, logout }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
