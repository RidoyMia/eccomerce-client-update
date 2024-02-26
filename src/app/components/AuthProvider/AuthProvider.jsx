"use client"
import React, { createContext, useEffect, useState } from 'react';
import app from '../../../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
export const authContext = createContext()
const auth = getAuth(app)
function AuthProvider({children}) {
    const [user,setUser] = useState('hridoy');
    const [loading,setLoading]= useState(true)
    const provider = new GoogleAuthProvider()
    const createUser = (email,password)=>{
         setLoading(true);
          return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const profileUpdate = (name,image)=> {
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const userInfo = {user,setUser,loading,setLoading,createUser,loginUser,LogOut,googleLogin,profileUpdate}
    return (
        <div>
            <authContext.Provider value={userInfo}>{children}</authContext.Provider>
        </div>
    );
}

export default AuthProvider;