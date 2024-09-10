// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ ...auth, token });
    }
  }, []);

  const register = async (username, password) => {
    try {
      const res = await axios.post('/users', { user: { username, password } });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (username, password) => {
    try {
      const res = await axios.post('/users/sign_in', { user: { username, password } });
      setAuth({ user: res.data.user, token: res.headers.authorization });
      localStorage.setItem('token', res.headers.authorization);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await axios.delete('/users/sign_out', {
        headers: {
          'Authorization': auth.token
        }
      });
      setAuth({ user: null, token: null });
      localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

