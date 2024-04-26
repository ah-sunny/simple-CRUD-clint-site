import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Update from './Component/Update';
import Users from './Component/Users';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        // loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
        // loader: () => fetch(`http://localhost:5000/users`)
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
