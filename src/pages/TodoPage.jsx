import React, { useEffect, useMemo, memo } from 'react';
import {
  VStack, Text, Flex, Spinner, Container, Heading, Box, useColorMode
} from '@chakra-ui/react';
import { useTodoStore } from '../store/useTodoStore';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const TodoPage = memo(() => {
  const todos = useTodoStore((state) => state.todos);
  const isLoading = useTodoStore((state) => state.isLoading);
  const error = useTodoStore((state) => state.error);
  const searchTerm = useTodoStore((state) => state.searchTerm);
  const totalTodos = useTodoStore((state) => state.totalTodos);
  const limitPerPage = useTodoStore((state) => state.limitPerPage);
  const currentPage = useTodoStore((state) => state.currentPage);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const setSearchTerm = useTodoStore((state) => state.setSearchTerm);
  const goToNextPage = useTodoStore((state) => state.goToNextPage);
  const goToPrevPage = useTodoStore((state) => state.goToPrevPage);

  const { colorMode } = useColorMode();

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const filteredTodos = useMemo(() => {
    if (!searchTerm) return todos;
    return todos.filter(t =>
      t.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  const hasNextPage = useMemo(() => {
    const apiTodos = todos.filter(t => !t.isLocal);
    const totalPages = Math.ceil(totalTodos / limitPerPage);
    return currentPage < totalPages;
  }, [todos, totalTodos, limitPerPage, currentPage]);

  return (
    <Container maxW="container.md" py={8}>
      <Heading
        mb={8}
        textAlign="center"
        bgGradient={colorMode === 'dark'
          ? 'linear(to-r, neon.400, cyan.400)'
          : 'linear(to-r, neon.500, cyan.500)'}
        bgClip="text"
        fontSize="3xl"
        fontWeight="bold"
      >
        Список Завдань
      </Heading>

      <VStack spacing={4} align="stretch">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <TodoForm onSubmit={addTodo} />

        {isLoading && (
          <Flex justify="center" py={8}>
            <Spinner size="xl" color="neon.500" thickness="4px" />
          </Flex>
        )}

        {error && (
          <Box
            p={4}
            borderRadius="md"
            bg="red.50"
            borderColor="red.200"
            borderWidth="1px"
            _dark={{ bg: 'red.900', borderColor: 'red.700' }}
          >
            <Text color="red.500" fontWeight="medium">
              Помилка: {error}
            </Text>
          </Box>
        )}

        {!isLoading && !error && filteredTodos.length === 0 && (
          <Box
            p={8}
            textAlign="center"
            borderRadius="md"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
          >
            <Text color="gray.500" fontSize="lg">
              {searchTerm ? 'Завдань не знайдено' : 'Немає завдань'}
            </Text>
          </Box>
        )}

        {!isLoading && filteredTodos.length > 0 && (
          <VStack spacing={3} align="stretch">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
              />
            ))}
          </VStack>
        )}

        {!isLoading && !searchTerm && (
          <Pagination
            currentPage={currentPage}
            onPrev={goToPrevPage}
            onNext={goToNextPage}
            hasNext={hasNextPage}
          />
        )}
      </VStack>
    </Container>
  );
});

TodoPage.displayName = 'TodoPage';

export default TodoPage;