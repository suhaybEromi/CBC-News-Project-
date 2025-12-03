import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewsDetails from "./pages/NewsDetails";
import BackToTop from "./components/BackToTop";
import CategoryPage from "./components/CategoryPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/category/sport" element={<CategoryPage />} />

          {/* <Route path="/category/:category" element={<CategoryPage />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
