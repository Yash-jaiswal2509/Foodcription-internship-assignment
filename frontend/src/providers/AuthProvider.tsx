import { createContext, useState, useContext, useEffect } from "react";

type AuthContextProps = {
  token: string | null;
  setToken: (token: string) => void;
  user: any;
  setUser: (user: any) => void;
};

const initialState: AuthContextProps = {
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
};

const AuthContext = createContext<AuthContextProps>(initialState);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const contextValue: AuthContextProps = {
    token,
    setToken: (value: string) => setToken(value),
    user,
    setUser: (value: any) => setUser(value),
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }
  return context;
}
