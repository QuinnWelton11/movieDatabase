import Footer from "../components/Footer"
import Header from "../components/Header"
import PageHome from "../pages/PageHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
  return (
      <BrowserRouter>
        <Header />
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
  )
}

export default AppRouter