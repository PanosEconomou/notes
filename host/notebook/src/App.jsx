import Landing from './Landing'
import NotebookPage from './NotebookPage'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:path",
    element: <NotebookPage />,
  },
]);

function App() {

  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  )
}

export default App
