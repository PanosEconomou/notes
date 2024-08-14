import Landing from './Landing'
import NotebookPage from './NotebookPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Landing />}
        />
        <Route 
          path="/test"
          element={<NotebookPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
