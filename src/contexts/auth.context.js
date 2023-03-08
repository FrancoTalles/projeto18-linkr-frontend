import { createContext,  useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }){
    const lsUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(lsUser !== null ? lsUser : {});
   
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};