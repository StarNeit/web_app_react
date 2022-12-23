import { createBrowserRouter } from 'react-router-dom'
import loadable from '@loadable/component'

const HomePage = loadable(() => import('~/Home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

export default router
