import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    neon: {
      50: '#e6fff5',
      100: '#b3ffe0',
      200: '#80ffcb',
      300: '#4dffb6',
      400: '#1affa1',
      500: '#00e68c', 
      600: '#00b36d',
      700: '#00804e',
      800: '#004d2f',
      900: '#001a10',
    },
    cyan: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4', 
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'neon',
      },
      variants: {
        neon: (props) => ({
          bg: props.colorMode === 'dark' ? 'neon.500' : 'neon.400',
          color: props.colorMode === 'dark' ? 'gray.900' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'neon.400' : 'neon.500',
            boxShadow: '0 0 20px rgba(0, 230, 140, 0.5)',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'neon.600' : 'neon.500',
          },
        }),
        cyan: (props) => ({
          bg: props.colorMode === 'dark' ? 'cyan.500' : 'cyan.400',
          color: props.colorMode === 'dark' ? 'gray.900' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'cyan.400' : 'cyan.500',
            boxShadow: '0 0 20px rgba(0, 188, 212, 0.5)',
          },
        }),
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'neon.500',
      },
    },
  },
});

export default theme;

