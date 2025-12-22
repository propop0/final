import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Labs from '../pages/Labs';
import TodoPage from '../pages/TodoPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/todo-list" element={<TodoPage />} />
    </Routes>
  );
}
