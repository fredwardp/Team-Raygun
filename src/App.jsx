import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Coaching from "./pages/Coaching/Coaching";
import Contact from "./pages/Contact/Contact";
import Leistungen from "./pages/Leistungen/Leistungen";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentur" element={<About />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/kontakt/:type" element={<Contact />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
