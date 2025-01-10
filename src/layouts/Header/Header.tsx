import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";



const Header = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<any>(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e: any) => {
    const header = document.querySelector('.header-section');
    if (!header) return;
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false);
    }
  };



  return (

    <header className="header-section">
      <Container>

        <Navbar expand="lg" className="p-0 mt-3">
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/"> FIT&EAT</NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <h1 className="logo">FIT&EAT</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="iconClose bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
                <NavLink className="nav-link" to="/homepage" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/workout-list" onClick={closeMenu}>
                  WORKOUT
                </NavLink>
                <NavLink className="nav-link" to="/nutrition-list" onClick={closeMenu}>
                  NUTRITION
                </NavLink>
                <NavLink className="nav-link" to="/progress" onClick={closeMenu}>
                  PROGRESS
                </NavLink>
                <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
                  CONTACT
                </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
              <NavLink to="/booking" className="primaryBtn d-none d-sm-inline-block">
                Book Now
              </NavLink>
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
              </li>
            </div>
          </Navbar>
    
      </Container>
    </header>
  );
};

export default Header;
