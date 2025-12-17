import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  useColorMode,
  Divider
} from '@chakra-ui/react';

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading
            size="2xl"
            mb={4}
            bgGradient={colorMode === 'dark'
              ? 'linear(to-r, neon.400, cyan.400)'
              : 'linear(to-r, neon.500, cyan.500)'}
            bgClip="text"
            fontWeight="bold"
          >
            Вітаю на моєму портфоліо!
          </Heading>
          <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
            Студентський веб-застосунок з використанням React
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading size="lg" mb={4} color={colorMode === 'dark' ? 'neon.400' : 'neon.600'}>
            Про мене
          </Heading>
          <Text fontSize="md" lineHeight="tall" color="gray.700" _dark={{ color: 'gray.300' }}>
            Богдан Новачок, студент комп'ютерних наук, мене захоплює світ цифрової творчості та технологій.
            Люблю фотографувати, слухати та досліджувати музику, створювати дизайни. Мене приваблює візуальна
            естетика, експерименти з кольорами, формами та UI-інтерфейсами. Обожнюю занурюватись у світ гаджетів,
            досліджувати, як усе працює, та пробувати нові технології. А ще - я люблю котів. Ну хто їх не любить?))
          </Text>
        </Box>

        <Box>
          <Heading size="lg" mb={4} color={colorMode === 'dark' ? 'cyan.400' : 'cyan.600'}>
            Технології
          </Heading>
          <VStack align="start" spacing={2}>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • React 18+ з Vite
            </Text>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • React Router DOM v6 для маршрутизації
            </Text>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • Chakra UI для компонентів та темної теми
            </Text>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • Zustand для управління станом
            </Text>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • Axios для HTTP запитів
            </Text>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Heading size="lg" mb={4} color={colorMode === 'dark' ? 'neon.400' : 'neon.600'}>
            Навігація
          </Heading>
          <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
            Використовуйте навігаційне меню для переходу між розділами:
          </Text>
          <VStack align="start" spacing={2} mt={4}>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • <strong>Лаби</strong> - перегляд виконаних лабораторних робіт
            </Text>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }}>
              • <strong>Todo</strong> - повнофункціональний список завдань з API
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}