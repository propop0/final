import React, { memo } from 'react';
import { Input, InputGroup, InputLeftElement, useColorMode } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = memo(({ value, onChange, placeholder = "Пошук завдань..." }) => {
  const { colorMode } = useColorMode();

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputLeftElement>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        focusBorderColor="neon.500"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      />
    </InputGroup>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;

