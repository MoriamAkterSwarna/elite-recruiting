import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('marks.json')
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
