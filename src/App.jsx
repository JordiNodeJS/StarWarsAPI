import { BrowserRouter } from 'react-router-dom'
import RouterApp from './router/RouterApp'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = _ =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')

  useHotkeys([['mod+J', _ => toggleColorScheme()]])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, ...{
          fontFamily: 'DIN, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        } }}
        withGlobalStyles
        withNormalizeCSS>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
