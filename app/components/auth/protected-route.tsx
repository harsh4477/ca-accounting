import { useAuth } from '../../contexts/auth-context';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      // Simple redirect to login if not authenticated
      window.location.href = '/login';
    }
  }, [loading, isAuthenticated]);

  if (loading || !isAuthenticated) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return <>{children}</>;
}
