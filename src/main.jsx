import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home.jsx"
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <App /> }>
      <Route index element={ < Home />} />
  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
