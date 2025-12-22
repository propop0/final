import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navbar />
      <Box as="main" py={8}>
        {children}
      </Box>
    </Box>
  );
}
