import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import BookDetail from './pages/bookDetail.jsx'

const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'bookdetail', element: <BookDetail /> },
    ]
  },
  { path: '/book/:id', element: <BookDetail /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
