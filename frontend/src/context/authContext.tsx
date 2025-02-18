/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { toast } from 'sonner';

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('UserName');
    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
    setLoading(false);
  }, []);

  const signin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      
      const { jwt, userName } = response.data;
      localStorage.setItem('token', jwt);
      localStorage.setItem('UserName', userName);
      setIsAuthenticated(true);
      setUserName(userName);
      toast.success('Successfully signed in');
      navigate('/blogs');
    } catch (error: any) {
      if (error.message === "Request failed with status code 411") {
        toast.error("Invalid Credentials!");
      } else if (error.message === "Request failed with status code 404") {
        toast.error("Incorrect Password");
      } else if (error.message === "Request failed with status code 403") {
        toast.error("Email Doesn't Exist");
      }
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        name,
        email,
        password,
      });
      
      const { jwt, userName } = response.data;
      localStorage.setItem('token', jwt);
      localStorage.setItem('UserName', userName);
      setIsAuthenticated(true);
      setUserName(userName);
      toast.success('Successfully signed up');
      navigate('/blogs');
    } catch (error: any) {
      if (error.message === "Network Error") {
        toast.error("Network Problem");
      } else if (error.message === "Request failed with status code 409") {
        toast.error("Email Already Exists");
      } else if (error.message === "Request failed with status code 404") {
        toast.error("Server Problem");
      } else {
        toast.error("Invalid Credentials");
      }
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('UserName');
    setIsAuthenticated(false);
    setUserName(null);
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      userName, 
      loading, 
      signin, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};