import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHome from "../pages/PageHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSingleMovie from "../pages/PageSingleMovie";
import { GlobalProvider } from "../context/GlobalContext";
import PageAbout from "../pages/PageAbout";
import PageFavorites from "../pages/PageFavorites";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favorites" element={<PageFavorites />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
          </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
