import { createRoot } from 'react-dom/client'
import App from './app'
import { useRoutes, HashRouter, BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
