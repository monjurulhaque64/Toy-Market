import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }

    const logOut = () =>{
        return signOut(auth)
        setLoading(true);
    }
    const singInGoogle = (provider) => {
        return signInWithPopup(auth, provider);
        setLoading(false);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        } 
    },[])

    const authInfo= {
        user,
        createUser,
        singIn,
        logOut, 
        loading,
        singInGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;