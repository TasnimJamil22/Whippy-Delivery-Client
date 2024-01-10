import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // const [userName,setUserName] = useState('');

    const createUser = (email,password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth,email,password);
        
    } 

    //storing displayName/userName in firebase to show anywhere
    const setUserName = (displayName) => {
        //...user : reload deya chara userName header e show korchilona,thats why
        updateProfile(auth.currentUser, {...user,displayName})
        .then(result => {
            
        })
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
        setUserName,
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