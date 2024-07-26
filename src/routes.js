import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesScreen from './screens/notes/index';
import RegisterScreen from './screens/auth/register/index';
import LoginScreen from './screens/auth/login/index';
import EditUserScreen from './screens/users/edit/index';
import HomeScreen from './screens/home/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/notes" element={<NotesScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/users/edit" element={<EditUserScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
