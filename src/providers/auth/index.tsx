import { createContext, useContext, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

interface AuthData {
  a: string;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider = ({ children }: AuthProps) => {
  return (
    <AuthContext.Provider value={{ a: "a" }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
