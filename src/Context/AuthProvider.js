import React, { createContext } from 'react';
import useFirebase from '../Share/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();

    return (
        <AuthContext.Provider value = {allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;