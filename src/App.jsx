import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './router/RouterApp'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import GlobalCustom from './components/GlobalCustom'
function App() {
  const [colorScheme, setColorScheme] = useState('dark')
  const toggleColorScheme = _ =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS>
        <GlobalCustom>
          <BrowserRouter>
            <RouterApp />
          </BrowserRouter>
        </GlobalCustom>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
