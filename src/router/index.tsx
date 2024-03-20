import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const First = lazy(() => (import('../components/first')))
const Second = lazy(() => (import('../components/second')))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <First/>
    }, {
        path:'/second',
        element:<Second/>
    }
])
