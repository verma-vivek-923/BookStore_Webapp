import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({children}) {
const initialAuthUser = localStorage.getItem('users-login');
const [authUser, setAuthUser] = useState(
initialAuthUser ? JSON.parse(initialAuthUser): undefined
);
// console.log(authUser);
return (
<AuthContext.Provider value={[authUser, setAuthUser ]}>
   {children}
</AuthContext.Provider>
)}
export const useAuth = () => useContext(AuthContext);