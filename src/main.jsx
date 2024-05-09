import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminPage from "@/Pages/AdminPage.jsx";
import SubmissionManagement from "@/AdminSubPages/SubmissionManagement.jsx";
import FormationManagement from "@/AdminSubPages/FormationManagement.jsx";
import SeemoreFormations from "@/sub pages/seemoreFormations.jsx";
import ReviewManagement from "@/AdminSubPages/ReviewManagement.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div> 404 Not Found </div>

    },
    {

        path: '/Admin666/*',
        element: <AdminPage/>
    },
    {

        path: '/Admin666/SubmissionManagement',
        element: <SubmissionManagement/>
    },
    {

        path: '/Admin666/FormationManagement',
        element: <FormationManagement/>
    },
    {

        path: '/Admin666/ReviewManagement',
        element: <ReviewManagement/>
    },
    {

        path: '/seemoreFormations',
        element: <SeemoreFormations/>
    },
   
]);






ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <PrimeReactProvider>
     <ChakraProvider>
         <RouterProvider router={router} />
     </ChakraProvider>
        </PrimeReactProvider>

   </React.StrictMode>
)
