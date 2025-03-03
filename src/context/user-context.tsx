import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, UsersType } from '../types/types';


type UserContextProviderType = {
    userType: UsersType;
    cart: CartItem[]
    setUserType: Function
    setCart: Function
    credentials?: {
        email: string;
        password: string
    }
}
const UserContext = createContext<UserContextProviderType>({
    userType: '',
    cart: [],
    setUserType: () => { },
    setCart: () => { }
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userType, setUserType] = useState<UsersType>(localStorage.getItem('userType') as UsersType || 'none');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            setUserType(localStorage.getItem('userType') as UsersType || 'none');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);


    return (
        <UserContext.Provider value={{ userType, setUserType, cart, setCart }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
