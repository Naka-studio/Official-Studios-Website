import Logo from "/logo-w.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="footer-top">
          <a href="#" className="footer__brand">
            <img src={Logo} alt="Logo Naka Studio" className="brand-logo" />
            <p className="brand__tagline">Human-led Design & Developer.</p>
          </a>

          <div className="footer__links">
            <Link className="footer__link" to="/">
              Work
            </Link>
            <Link className="footer__link" to="/">
              Services
            </Link>
            <Link className="footer__link" to="/">
              Products
            </Link>
            <Link className="footer__link" to="/">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; {new Date().getFullYear()} Naka Studio
          </span>

          <span>All Rights Reserved.</span>
          <a href="#">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
