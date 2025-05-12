import Footer from "../components/Footer"
import Header from "../components/Header"
import PageHome from "../pages/PageHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageSingleMovie from "../pages/PageSingleMovie"

function AppRouter() {
  return (
      <BrowserRouter>
        <Header />
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/movie/:id" element={<PageSingleMovie />} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  )
}

export default AppRouter