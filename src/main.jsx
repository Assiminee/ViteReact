import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import LoginDiv from "./Components/Login/LoginDiv.jsx";
import Container from "./Components/Container.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Category from "./Components/Category.jsx";

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: '/admin/login',
                element: <LoginDiv />
            },
            {
                path: '/admin/entry',
                element: <Container />,
                children: [
                    {
                        path: '/admin/entry/dashboard',
                        element: <Dashboard />,
                    },
                    {
                        path: '/admin/entry/category',
                        element: <Category />,
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
