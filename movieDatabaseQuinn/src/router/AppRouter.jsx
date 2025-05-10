import PageHome from "../pages/PageHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter