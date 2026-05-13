import React, { use } from 'react'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;
  const loading= faise;
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {

    return <Navigate to= "/login" state = {{ from: location }} replace />
  } 
    return children;
}    
  export default ProtectedRoute;
