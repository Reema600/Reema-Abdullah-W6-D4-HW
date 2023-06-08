import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
    
    <App />
    
    </ChakraProvider>
    </BrowserRouter>
)