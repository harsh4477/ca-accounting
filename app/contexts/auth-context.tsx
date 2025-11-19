import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type User = {
  id: string;
  email: string;
  // Add other user fields as needed
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check for existing session on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Here you would typically verify the session with your backend
        const token = localStorage.getItem('token');
        if (token) {
          // Verify token with your backend
          // const user = await verifyToken(token);
          // setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Replace with your actual login API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      
      // For demo purposes, we'll use a mock response
      const mockUser = { id: '1', email };
      
      // In a real app, you would get the token from the response
      localStorage.setItem('token', 'dummy-token');
      setUser(mockUser);
      setIsAuthenticated(true);
      
      // Redirect to admin services after login
      window.location.href = '/admin/services';
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
