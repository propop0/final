import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Labs from './pages/Labs';
import TodoPage from './pages/TodoPage';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navbar />
      <Box as="main" py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/todo-list" element={<TodoPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;