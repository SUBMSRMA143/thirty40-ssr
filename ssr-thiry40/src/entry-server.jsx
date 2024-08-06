import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { RouterProvider } from "react-router-dom"
import router from "./Routes";
import './index.css'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
  return { html }
}
