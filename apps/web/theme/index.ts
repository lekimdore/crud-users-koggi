import { MantineColorsTuple, createTheme, Button } from '@mantine/core';

const appColor: MantineColorsTuple = [
  '#edf3fd',
  '#d8e2f5',
  '#acc3ec',
  '#7ea2e5',
  '#5886df',
  '#4274db',
  '#366bdc',
  '#2a5bc3',
  '#2150ae',
  '#13459a',
];

const theme = createTheme({
  colors: {
    myColor: appColor,
  },
  primaryShade: 9,
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'myColor',
        variant: 'filled',
        size: 'sm',
      },
    }),
    Input: {
      defaultProps: {
        variant: 'filled',
        radius: 'md',
      },
    },
  },
});

export default theme;
