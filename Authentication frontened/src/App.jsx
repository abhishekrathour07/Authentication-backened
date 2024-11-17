import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home';
import RefreshHandler from './components/RefreshHandler';

const App = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  // Private routing as a component
  const PrivateRoute = ({ element }) => {
    return isAuthenticate ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <RefreshHandler setIsAuthenticate={setIsAuthenticate} />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Private Route */}
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
};

export default App;
