import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = token ? jwtDecode(token) : null;
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const getRole = localStorage.getItem("role");
    if (getToken) {
      setToken(getToken);
      setRole(getRole);
    }
    setLoading(false);
  }, []);
  const loginToken = ({ tokenData, roleData }) => {
    setToken(tokenData);
    setRole(roleData);
    localStorage.setItem("token", tokenData);
    localStorage.setItem("role", roleData);
  };
  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{ token, loginToken, logout, loading, user, role }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
