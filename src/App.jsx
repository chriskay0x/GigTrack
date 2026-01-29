import { Routes, Route } from "react-router-dom"
import RootLayout from './Layouts/RootLayout'
import Dashboard from "./Pages/Dashboard"
import ProjectList from "./Pages/ProjectList"

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/projects" element={<ProjectList />} />
      </Route>
    </Routes>
  )
}

export default App
