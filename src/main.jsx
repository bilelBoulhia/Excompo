import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider>
     <ChakraProvider>
        <App />
     </ChakraProvider>
        </PrimeReactProvider>
   </React.StrictMode>
)
