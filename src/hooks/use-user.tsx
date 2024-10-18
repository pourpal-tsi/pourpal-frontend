import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getProfile,
  login,
  logout,
  UserCredentials,
  UserData,
} from "@/services/auth";

interface UserContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  loading: boolean;
  logoutUser: () => Promise<void>;
  loginUser: (credentials: UserCredentials) => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  logoutUser: async () => {},
  loginUser: async () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const user: UserData = await getProfile();
        setUser(user);
        setIsAuthenticated(!!user && Object.keys(user).length > 0);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const logoutUser = async () => {
    await logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const loginUser = async (credentials: UserCredentials) => {
    setLoading(true);
    try {
      await login(credentials);
      const user: UserData = await getProfile();
      setUser(user);
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        logoutUser,
        loginUser: loginUser || (() => {}),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
