import { Routes, Route } from "react-router-dom"
import RootLayout from './Layouts/RootLayout'
import Dashboard from "./Pages/Dashboard"
import ProjectList from "./Pages/ProjectList"
import Gigs from "./Pages/Gigs"
import Settings from "./Pages/Settings"
import UserProfile from "./Pages/UserProfile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
