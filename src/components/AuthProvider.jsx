import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext();

export default function AuthProvider({children}) {
const [user, setUser] = useState(null);
const [loadin, setLoading] = useState(true);

// create user/sign up
const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
}

// sign in an existing user
const signInUser = (email,password)=>{
    setLoading(true);
return signInWithEmailAndPassword(auth, email,password)
}


 const AuthInfo = {
    user,
    loadin,
    createUser,
    signInUser,
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
