import {
  ColorModeOptions,
  extendTheme,
  theme as chakraTheme,
} from '@chakra-ui/core';

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ['40em', '52em', '64em'];

const config: ColorModeOptions = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const theme = extendTheme({
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
  },
  fonts,
  breakpoints,
  config,
});

export default theme;
