import Landing from './Landing'
import NotebookPage from './NotebookPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const [files, setFiles] = useState([]);

  const fetchFiles = () => {
    fetch("./NOTES/directory_listing.txt")
      .then((res) => res.text())
      .then((data) => {
        const fileArray = data.split('\n')
        .filter(Boolean)
        .filter((item) => item.endsWith(".md") && !item.endsWith("README.md"));
        setFiles(fileArray);
        console.log(fileArray);
      })
    }

    useEffect(() => {
      fetchFiles();
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/:path"
          element={<NotebookPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
