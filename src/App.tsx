import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import Fallback from './fallbackUI'

const App = () => {
  return (
    <div>
      {/* lazy component used in router file */}
      <Suspense fallback={<Fallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App