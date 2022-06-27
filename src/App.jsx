import { BrowserRouter } from 'react-router-dom'
import RouterApp from './router/RouterApp'
import { MantineProvider } from '@mantine/core';


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
