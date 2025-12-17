import React from 'react';
import { Box, Flex, Button, useColorMode, Heading, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4} py={3} shadow="md">
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading size="md" mr={8}>Portfolio</Heading>
        <Flex gap={4}>
            <Button as={RouterLink} to="/" variant="ghost">Головна</Button>
            <Button as={RouterLink} to="/labs" variant="ghost">Лаби</Button>
            <Button as={RouterLink} to="/todo-list" colorScheme="blue" variant="solid">Todo</Button>
        </Flex>
        <Spacer />
        <Button onClick={toggleColorMode} size="sm">
          {colorMode === 'light' ? '🌙' : '☀️'}
        </Button>
      </Flex>
    </Box>
  );
}