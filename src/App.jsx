import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Labs from './pages/Labs';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Container maxW="1200px" mt={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/todo-list" element={<TodoPage />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;