import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorMode,
  Heading,
  Spacer,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      bg={bgColor}
      borderBottomWidth="2px"
      borderBottomColor={borderColor}
      px={4}
      py={3}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
    >
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading
          size="md"
          mr={8}
          bgGradient={colorMode === 'dark'
            ? 'linear(to-r, neon.400, cyan.400)'
            : 'linear(to-r, neon.500, cyan.500)'}
          bgClip="text"
          fontWeight="bold"
        >
          Student Portfolio
        </Heading>
        <Flex gap={2}>
          <Button
            as={RouterLink}
            to="/"
            variant={isActive('/') ? 'solid' : 'ghost'}
            colorScheme={isActive('/') ? 'neon' : 'gray'}
            size="sm"
          >
            Головна
          </Button>
          <Button
            as={RouterLink}
            to="/labs"
            variant={isActive('/labs') ? 'solid' : 'ghost'}
            colorScheme={isActive('/labs') ? 'cyan' : 'gray'}
            size="sm"
          >
            Лаби
          </Button>
          <Button
            as={RouterLink}
            to="/todo-list"
            variant={isActive('/todo-list') ? 'solid' : 'ghost'}
            colorScheme={isActive('/todo-list') ? 'neon' : 'gray'}
            size="sm"
          >
            Todo
          </Button>
        </Flex>
        <Spacer />
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          colorScheme="cyan"
          variant="ghost"
          size="md"
        />
      </Flex>
    </Box>
  );
}