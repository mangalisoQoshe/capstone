import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import AuthContext from "./AuthContext"
import { authService } from "./firebase";



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(authService,(user) => {
            setUser(user)
        })
    }, []);
  
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };