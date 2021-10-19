import React, { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';


export const AuthContext = createContext();

const AuthProvider = ({childern}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {childern}
        </AuthContext.Provider>

    );
};

export default AuthProvider;