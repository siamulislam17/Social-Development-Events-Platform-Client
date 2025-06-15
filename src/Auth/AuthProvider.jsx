

import {  createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

import React, {  useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from "../FireBase Functionality/firebase.config";


const AuthProvider = ( {children} ) => {

    

    //dark mode
    const [darkMode, setDarkMode] = useState(false);

    //user state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const signInWithEmailPassword = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (name, photo) => {
       return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
        })
        
    }

    console.log("user", user);

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            
        });

        return () => unsubscribe();
    }, []);

   const userData={
   
        darkMode,
        setDarkMode,
        signInWithEmailPassword,
        user, 
        loading,
        setLoading,
        updateUser

    }
    return (
        <div>
            <AuthContext value={userData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;