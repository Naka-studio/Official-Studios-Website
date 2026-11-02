import { Brain, Menu, MoveUpRight, Navigation, Phone } from "lucide-react";
import "./style.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  // Navbar Mobile
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");

  const navMenuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const navMenu = navMenuRef.current;

    if (!navMenu) return;

    if (isOpen) {
      navMenu.style.height = "auto";

      const height = navMenu.scrollHeight;

      navMenu.style.height = "0px";
      navMenu.offsetHeight;

      setMenuHeight(`${height}px`);
    } else {
      const height = navMenu.scrollHeight;

      navMenu.style.height = `${height}px`;
      navMenu.offsetHeight;

      setMenuHeight("0px");
    }
  }, [isOpen]);

  // clickOutside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        toggleMenuRef.current &&
        !toggleMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="navbar__container container">
        <a href="#" className="navbar__brand">
          <div className="navbar__brand-logo">
            <img
              src="../../../../logo-w.svg"
              alt="test"
              className="navbar__brand-img"
            />
          </div>
          Naka Studio
        </a>

        <div
          ref={navMenuRef}
          className={`navbar__menu${isOpen ? " show" : ""}`}
          style={{ height: menuHeight }}
        >
          <ul className="navbar__menu-links">
            <li className="navbar__menu-link" onClick={closeMenu}>
              <a href="#about">
                About us
                <MoveUpRight
                  className="icon"
                  nonScalingStroke
                  strokeWidth={1}
                />
              </a>
            </li>
            <li className="navbar__menu-link" onClick={closeMenu}>
              <a href="#services">
                Services
                <MoveUpRight
                  className="icon"
                  nonScalingStroke
                  strokeWidth={1}
                />
              </a>
            </li>
            <li className="navbar__menu-link" onClick={closeMenu}>
              <a href="#">
                Products
                <MoveUpRight
                  className="icon"
                  nonScalingStroke
                  strokeWidth={1}
                />
              </a>
            </li>
            <li className="navbar__menu-link" onClick={closeMenu}>
              <a href="#testimonial">
                Testimonials
                <MoveUpRight
                  className="icon"
                  nonScalingStroke
                  strokeWidth={1}
                />
              </a>
            </li>
          </ul>

          <ul className="navbar__menu-links">
            <li className="navbar__menu-link accent" onClick={closeMenu}>
              <a href="#contact-us">
                Contact Us
                <Phone className="icon" nonScalingStroke strokeWidth={1.2} />
              </a>
            </li>
            <li className="navbar__menu-link accent" onClick={closeMenu}>
              <a href="#">
                Our Thoughts
                <Brain className="icon" nonScalingStroke strokeWidth={1.2} />
              </a>
            </li>
          </ul>
        </div>

        <a href="#contact-us" className="navbar__cta-desktop">
          Contact us
          <Navigation className="icon-cta" nonScalingStroke strokeWidth={1} />
        </a>

        <button
          ref={toggleMenuRef}
          type="button"
          className="navbar__toggler"
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <Menu className="icon" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
