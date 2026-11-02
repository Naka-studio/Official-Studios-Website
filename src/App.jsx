import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/navigation/navbar/index.jsx";
import Footer from "./components/navigation/footer/Footer.jsx";
import HomePage from "./components/pages/home.page.jsx";
import AboutPage from "./components/pages/about/About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
