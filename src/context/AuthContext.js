import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const UserContext = createContext()
const AuthContext = ({children}) => {
    const authAllContext = useFirebase()
    return (
        <UserContext.Provider value={authAllContext}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;