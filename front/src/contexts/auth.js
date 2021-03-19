import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";

import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("@App:user"));
  const [token, setToken] = useState(localStorage.getItem("@App:token"));

  useEffect(() => {
    if (token && user) {
      api.defaults.headers.Authorization = `${token}`;
    }
  }, []);

  async function Login(userData) {
    const response = await api.post("/usuarios/signin", userData);

    setUser(response.data.token);
    api.defaults.headers.Authorization = `${response.data.token}`;

    localStorage.setItem("@App:user", JSON.stringify(response.data.user));
    localStorage.setItem("@App:token", response.data.token);
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: user ? true : false, user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
