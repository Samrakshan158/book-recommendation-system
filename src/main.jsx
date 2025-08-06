import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home.jsx';
import BookDetail from './pages/bookDetailPage.jsx';
import './css/index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    {
      path: '/book/:id',
      element: <BookDetail />,
    },
  ],
  {
    basename: '/book-recommendation-system', 
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
