import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import {store} from './app/store.jsx'
// import { ThemeProvideق } from 'styled-components'
const theme=createTheme({
  typography:{fontFamily:'IBM'},
    palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
