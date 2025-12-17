import React, { useState, useMemo, memo } from 'react';
import {
  Box,
  Heading,
  VStack,
  Container,
  useColorMode,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link as ChakraLink,
  IconButton
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

//конфіг лаб поза компонентом щоб не ререндерилося
const labConfig = [
  {
    id: 'lab1',
    title: 'Lab 1',
    fullTitle: 'React Lab 1',
    url: 'https://react-lab1-ten.vercel.app/',
    description: 'Перша лабораторна робота на React'
  },
  {
    id: 'lab2',
    title: 'Lab 2',
    fullTitle: 'React Lab 2',
    url: 'https://react-lab2-one.vercel.app/',
    description: 'Друга лабораторна робота на React'
  },
  {
    id: 'lab4',
    title: 'Lab 4',
    fullTitle: 'React Lab 4',
    url: 'https://react-lab4-delta.vercel.app/',
    description: 'Четверта лабораторна робота на React'
  },
  {
    id: 'lab5-6',
    title: 'Lab 5-6',
    fullTitle: 'Лабораторна робота 5-6',
    url: 'https://lab-5-6.vercel.app/',
    description: 'Ранні лабораторні роботи з HTML/CSS'
  }
];

const Labs = memo(() => {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState(0);

  const currentLab = useMemo(() => labConfig[activeTab], [activeTab]);

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading
            size="2xl"
            mb={2}
            bgGradient={colorMode === 'dark'
              ? 'linear(to-r, neon.400, cyan.400)'
              : 'linear(to-r, neon.500, cyan.500)'}
            bgClip="text"
            fontWeight="bold"
          >
            Мої Лабораторні Роботи
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
            Перелік виконаних лабораторних робіт
          </Text>
        </Box>

        <Box
          borderWidth="2px"
          borderRadius="lg"
          borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
          overflow="hidden"
        >
          <Tabs
            index={activeTab}
            onChange={setActiveTab}
            colorScheme="neon"
            variant="enclosed"
          >
            <Flex
              justify="space-between"
              align="center"
              px={4}
              py={3}
              borderBottomWidth="2px"
              borderBottomColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
              bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
            >
              <TabList border="none" gap={2}>
                {labConfig.map((lab) => (
                  <Tab
                    key={lab.id}
                    _selected={{
                      color: colorMode === 'dark' ? 'neon.400' : 'neon.600',
                      borderColor: colorMode === 'dark' ? 'neon.400' : 'neon.500',
                      bg: colorMode === 'dark' ? 'gray.800' : 'white',
                    }}
                    fontWeight="semibold"
                  >
                    {lab.title}
                  </Tab>
                ))}
              </TabList>
              <Flex align="center" gap={2}>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                  {currentLab.fullTitle}
                </Text>
                <IconButton
                  as={ChakraLink}
                  href={currentLab.url}
                  isExternal
                  icon={<ExternalLinkIcon />}
                  aria-label="Відкрити в новій вкладці"
                  size="sm"
                  colorScheme="cyan"
                  variant="ghost"
                />
              </Flex>
            </Flex>

            <TabPanels>
              {labConfig.map((lab) => (
                <TabPanel key={lab.id} p={0}>
                  <Box
                    position="relative"
                    minH="75vh"
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  >
                    <Box
                      as="iframe"
                      src={lab.url}
                      width="100%"
                      height="75vh"
                      border="none"
                      title={lab.fullTitle}
                      loading="lazy"
                      allow="fullscreen"
                    />
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>

        <Box
          p={4}
          borderRadius="md"
          bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
          borderWidth="1px"
          borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
        >
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
            Всі лабораторні роботи розгорнуті на Vercel та доступні за посиланнями вище
          </Text>
        </Box>
      </VStack>
    </Container>
  );
});

Labs.displayName = 'Labs';

export default Labs;