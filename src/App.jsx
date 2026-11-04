import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/navigation/navbar/index.jsx";
import Footer from "./components/navigation/footer/Footer.jsx";
import HomePage from "./components/pages/home.page.jsx";
import AboutPage from "./components/pages/about/About.jsx";
import PricingPage from "./components/pages/pricing/Pricing.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
