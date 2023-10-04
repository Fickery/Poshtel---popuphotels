import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hotels from "./pages/Hotels";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="locations" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
