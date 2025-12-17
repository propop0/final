import React, { useEffect } from 'react';
import { 
  Box, Button, Input, VStack, Text, Checkbox, 
  Flex, Spinner, IconButton, Badge, Container, Heading 
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'; 
import { useTodoStore } from '../store/useTodoStore';

export default function TodoPage() {
  const { 
    todos, isLoading, error, searchTerm, 
    fetchTodos, addTodo, deleteTodo, toggleTodo, setSearchTerm,
    currentPage, goToNextPage, goToPrevPage 
  } = useTodoStore();

  useEffect(() => { fetchTodos(); }, [fetchTodos]);

  const filteredTodos = todos.filter(t => 
    t.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const val = e.target.elements.todoText.value;
    if(val.trim()) {
        addTodo(val);
        e.target.reset();
    }
  }

  return (
    <Container maxW="container.md" py={5}>
        <Heading mb={6} textAlign="center">Todo List</Heading>
        <Input 
            placeholder="Search..." mb={4} value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <form onSubmit={handleAdd}>
            <Flex gap={2} mb={6}>
                <Input name="todoText" placeholder="New task..." />
                <Button type="submit" colorScheme="blue">Add</Button>
            </Flex>
        </form>

        {isLoading && <Flex justify="center"><Spinner /></Flex>}
        {error && <Text color="red.500">{error}</Text>}

        <VStack spacing={3} align="stretch">
            {filteredTodos.map(todo => (
                <Flex key={todo.id} p={4} borderWidth="1px" borderRadius="lg" justify="space-between" align="center">
                    <Flex align="center" gap={3}>
                        <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <Text as={todo.completed ? "s" : "span"}>{todo.text}</Text>
                        {todo.isLocal && <Badge>Local</Badge>}
                    </Flex>
                    <IconButton icon={<DeleteIcon />} colorScheme="red" size="sm" onClick={() => deleteTodo(todo.id)} />
                </Flex>
            ))}
        </VStack>

        <Flex justify="center" gap={4} mt={6}>
            <Button onClick={goToPrevPage} isDisabled={currentPage === 1}>Prev</Button>
            <Text alignSelf="center">Page {currentPage}</Text>
            <Button onClick={goToNextPage}>Next</Button>
        </Flex>
    </Container>
  );
}