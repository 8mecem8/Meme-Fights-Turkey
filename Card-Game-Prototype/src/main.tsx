//Import Libraries/Packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

//Import Styles
import './index.css'

//Import local/files components
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={App()} />
  </StrictMode>,
)
