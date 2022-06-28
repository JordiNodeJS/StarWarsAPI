import { Global } from '@mantine/core';

export default function GlobalCustomStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'light' ? theme.colors.dark[7] : theme.colors.gray[6],
          fontFamily: theme.fontFamily,
          lineHeight: theme.lineHeight,
        },
        
      })}
    />
  );
}