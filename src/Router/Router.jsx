import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
])
export default router
