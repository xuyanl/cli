// import React from 'react'
import { createRoot } from 'react-dom/client'
import { useRoutes, HashRouter } from 'react-router-dom'
import App from './app'
const root = createRoot(document.getElementById('root')!)
root.render(<App />)
