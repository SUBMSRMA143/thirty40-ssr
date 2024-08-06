import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from "./Routes";
import './index.css'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
