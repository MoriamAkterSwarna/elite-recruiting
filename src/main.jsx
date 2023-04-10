import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import Categories from './components/Categories';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path: '/',
            element: <Categories></Categories>,
            loader: () => fetch('category.json'),
            children:[
              {
                
                  path: '/',
                  element: <Jobs></Jobs>,
                  loader: () => fetch('jobs.json')
              },
              
            ]
            
          }
          
        ]
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`jobs.json`),
        
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('marks.json')
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch(`jobs.json`),
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
