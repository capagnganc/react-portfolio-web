import { Routes, Route } from "react-router-dom"

// Importing path call
import App from "./App"
import Dashboard from "./Dashboard"

function Router() {
  
    return (
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    )
}

export default Router