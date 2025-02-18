import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
export default function ProtectRoutes({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
      return <Navigate to="/signin" />;
    }
    
    return <>{children}</>;
  };