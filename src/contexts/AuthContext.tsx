import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { User } from "../types/user";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate, useNavigate } from "react-router-dom";

interface AuthContextType {
  user?: User;
  token?: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { keycloak } = useKeycloak();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated && keycloak.tokenParsed) {
      const claims = keycloak.tokenParsed;
      const user: User = {
        id: claims.id,
        username: claims.preferred_username,
        firstName: claims.firstName,
        lastName: claims.lastName,
        password: "",
        role: claims.realm_access?.roles.includes("admin") ? "admin" : "user",
      };
      setUser(user);
    } else {
      setUser(undefined);
    }
  }, [keycloak.authenticated, keycloak.tokenParsed]);

  useEffect(() => {
    setToken(keycloak.token);
  }, [keycloak.token]);

  const logoutFunc = () => {
    setUser(undefined);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    keycloak.logout();
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user: user,
      token: token,
      logout: logoutFunc,
    }),
    [user, token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
