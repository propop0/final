import React, { useState, memo, useCallback, useEffect } from 'react';
import {
  Flex,
  Checkbox,
  Text,
  IconButton,
  Input,
  Badge,
  useColorMode
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TodoItem = memo(({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { colorMode } = useColorMode();

  // Оновлюємо editText коли todo.text змінюється
  useEffect(() => {
    if (!isEditing) {
      setEditText(todo.text);
    }
  }, [todo.text, isEditing]);

  const handleSave = useCallback(() => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  }, [editText, onUpdate, todo.id]);

  const handleCancel = useCallback(() => {
    setEditText(todo.text);
    setIsEditing(false);
  }, [todo.text]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      if (editText.trim()) {
        onUpdate(todo.id, editText.trim());
        setIsEditing(false);
      }
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  }, [editText, onUpdate, todo.id, todo.text]);

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo.id]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Flex
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      justify="space-between"
      align="center"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      _hover={{
        boxShadow: 'md',
        borderColor: 'neon.500',
      }}
      transition="all 0.2s"
    >
      <Flex align="center" gap={3} flex={1}>
        <Checkbox
          isChecked={todo.completed}
          onChange={handleToggle}
          colorScheme="neon"
        />
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
            size="sm"
            flex={1}
            focusBorderColor="neon.500"
          />
        ) : (
          <Text
            as={todo.completed ? 's' : 'span'}
            color={todo.completed ? 'gray.500' : 'inherit'}
            flex={1}
            cursor="pointer"
            onClick={handleEdit}
          >
            {todo.text}
          </Text>
        )}
        {todo.isLocal && (
          <Badge colorScheme="cyan" variant="subtle">
            Local
          </Badge>
        )}
      </Flex>
      <Flex gap={2} ml={4}>
        {isEditing ? (
          <>
            <IconButton
              icon={<CheckIcon />}
              colorScheme="neon"
              size="sm"
              onClick={handleSave}
              aria-label="Save"
            />
            <IconButton
              icon={<CloseIcon />}
              colorScheme="red"
              size="sm"
              onClick={handleCancel}
              aria-label="Cancel"
            />
          </>
        ) : (
          <>
            <IconButton
              icon={<EditIcon />}
              colorScheme="cyan"
              size="sm"
              onClick={handleEdit}
              aria-label="Edit"
            />
            <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              size="sm"
              onClick={handleDelete}
              aria-label="Delete"
            />
          </>
        )}
      </Flex>
    </Flex>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;

