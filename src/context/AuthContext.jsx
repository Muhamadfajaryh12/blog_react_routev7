import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
    }
    setLoading(false);
  }, []);
  const loginToken = (tokenData) => {
    setToken(tokenData);
    localStorage.setItem("token", tokenData);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, loginToken, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
