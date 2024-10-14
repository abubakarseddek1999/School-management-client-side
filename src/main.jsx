import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { FormDataProvider } from './Providers/FormDataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FormDataProvider>
      <RouterProvider router={router} />
      </FormDataProvider>
    </AuthProvider>
  </React.StrictMode>,
)
