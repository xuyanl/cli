import { RouteObject } from 'react-router-dom'

import Home from './pages/home'
import Details from './pages/details'

const routers: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details',
        element: <Details />,
        children: [
            {
                index: true,
                // path: '/details/home',
                element: <Home />
            }
        ]
    }
]

export default routers
