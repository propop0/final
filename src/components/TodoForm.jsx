import React, { memo, useCallback } from 'react';
import { Flex, Input, Button, useColorMode, Box } from '@chakra-ui/react';

const TodoForm = memo(({ onSubmit }) => {
  const { colorMode } = useColorMode();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const val = e.target.elements.todoText.value;
    if (val.trim()) {
      onSubmit(val.trim());
      e.target.reset();
    }
  }, [onSubmit]);

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex gap={2}>
        <Input
          name="todoText"
          placeholder="Додати нове завдання..."
          focusBorderColor="neon.500"
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        />
        <Button type="submit" colorScheme="neon" variant="solid">
          Додати
        </Button>
      </Flex>
    </Box>
  );
});

TodoForm.displayName = 'TodoForm';

export default TodoForm;

