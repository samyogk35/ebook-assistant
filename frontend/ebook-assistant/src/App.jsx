import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ components/auth/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import EditorPage from "./pages/Editorpage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ViewBookPage from"./pages/ViewBookPage";




const App = () => {
  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes (add authentication logic as needed) */}
        <Route 
          path="/dashboard" 
          element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
        />
        <Route 
          path="/editor/:bookId" 
          element={<ProtectedRoute><EditorPage /></ProtectedRoute>} 
        />  
        <Route 
          path="/profile" 
          element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} 
        />
      </Routes>
    </div>
  )
}

export default App;
