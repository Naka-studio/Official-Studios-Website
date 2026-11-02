import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/navigation/navbar/index.jsx";
import Footer from "./components/navigation/footer/Footer.jsx";
import HomePage from "./components/pages/home.page.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
