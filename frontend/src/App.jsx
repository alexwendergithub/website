import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, {mangasLoader} from './components/Dashboard'
// import Create from './pages/Create'
// import Profile from './pages/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={mangasLoader} />
      <Route path="create" element={<Dashboard />}/>
      <Route path="profile" element={<Dashboard />} />
    </Route>
  )
)


function App() {
  return (
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App;
