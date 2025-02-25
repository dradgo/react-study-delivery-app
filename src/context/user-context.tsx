import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext<any>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userType, setUserType] = useState(localStorage.getItem('userType') || 'none');

    useEffect(() => {
        const handleStorageChange = () => {
            setUserType(localStorage.getItem('userType') || 'none');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
