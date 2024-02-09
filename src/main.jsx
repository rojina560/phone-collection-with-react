import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import myCreateRoute from './Router/Router';
import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={myCreateRoute}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
