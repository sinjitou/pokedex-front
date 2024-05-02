"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});
  const [catched, setCatched] = useState([]);
  const [seen, setSeen] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("login");
    if (token) {
      setIsLoggedIn(true);
      const { login, password } = JSON.parse(token);
      setUserData({ login, password });
      setCatched(JSON.parse(localStorage.getItem("catched") || "[]"));
      setSeen(JSON.parse(localStorage.getItem("seen") || "[]"));
    } else {
      setIsLoggedIn(false);
      setCatched([]);
      setSeen([]);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        catched,
        setCatched,
        seen,
        setSeen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
