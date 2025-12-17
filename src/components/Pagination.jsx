import React, { memo } from 'react';
import { Flex, Button, Text, useColorMode } from '@chakra-ui/react';

const Pagination = memo(({ currentPage, onPrev, onNext, hasNext = true }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex justify="center" align="center" gap={4} mt={6}>
      <Button
        onClick={onPrev}
        isDisabled={currentPage === 1}
        colorScheme="cyan"
        variant="outline"
      >
        Попередня
      </Button>
      <Text
        fontWeight="bold"
        color={colorMode === 'dark' ? 'neon.400' : 'neon.600'}
      >
        Сторінка {currentPage}
      </Text>
      <Button
        onClick={onNext}
        isDisabled={!hasNext}
        colorScheme="cyan"
        variant="outline"
      >
        Наступна
      </Button>
    </Flex>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;

