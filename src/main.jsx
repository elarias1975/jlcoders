import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
import { Page4 } from './pages/Page4'
import { CountProvider } from './context/CountContext'
import { NavBar } from './components/NavBar'

const router = createBrowserRouter([
{
  path:"/",
  element:<NavBar/>,
  children :[ 
  {
    index:'/',
    element: <Page1/>
  },
  {
    path:"/page2",
    element :<Page2 />
  },
  {
    path:"/page3",
    element :<Page3 />
  },
  {
    path:"/page4",
    element :<Page4 />
  },
  {
    path:"*",
    element: <h1>Page not found</h1>
  }]
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
      <RouterProvider router = {router} />
    </CountProvider>
  </StrictMode>,
)
