import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);  
              
        });
        return () => {
          unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser, 
        login,
        logOut
    }
     
    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;