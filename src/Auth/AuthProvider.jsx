



import React, {  useState } from 'react';
import AuthContext from './AuthContext';


const AuthProvider = ( {children} ) => {

    

    //dark mode
    const [darkMode, setDarkMode] = useState(false);
    console.log('Dark mode state:', darkMode);

   const userData={
   
        darkMode,
        setDarkMode
    }
    return (
        <div>
            <AuthContext value={userData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;