import React from 'react'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import RandomPage from './pages/RandomPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Mangas, {mangasLoader} from './pages/Mangas.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RandomPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/mangas',
    element: <Mangas />,
    loader: mangasLoader,
    children: [
      {
        path: '/mangas/:manga',
        element: <RandomPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
);