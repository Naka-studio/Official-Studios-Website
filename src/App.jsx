import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Navbar from "./components/navigation/navbar/index.jsx";
import Footer from "./components/navigation/footer/Footer.jsx";
import HomePage from "./components/pages/home.page.jsx";
import AboutPage from "./components/pages/about/About.jsx";
import PricingPage from "./components/pages/pricing/Pricing.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/pricing", element: <PricingPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
