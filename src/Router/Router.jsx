import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import LoginHome from '../Pages/LoginHome'
import MyNotes from '../Pages/MyNotes'
import Note from '../Pages/Note'
import CreateNote from '../Pages/CreateNote'
import Secure from '../Pages/Secure'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/LoginHome', element: <LoginHome /> },
      { path: "/mynotes", element: <MyNotes /> },
      { path: "/note/:id", element: <Note /> },
      { path: "/createnote", element: <CreateNote /> }, 
      {path : "/secure", element: <Secure/>}
    ],
  },
])
export default router
