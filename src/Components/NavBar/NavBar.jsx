import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsScrolled(currentScrollY > lastScrollY);
      } else {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Two Navbars */}
      <div className={`nav-top-section ${isScrolled ? "hidden" : ""}`}>
        {/* Utility Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
          <div className="container-fluid">
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex gap-4 text-white">
                <a className="nav-link text-white" href="/">
                  Become A Seller <span>|</span>
                </a>{" "}
                
                <a className="nav-link text-white hideText" href="/">
                  About Us <span>|</span>
                </a>{" "}
             
                <a className="nav-link text-white hideText" href="/">
                  Free Delivery <span>|</span>
                </a>{" "}
              
                <a className="nav-link text-white" href="/">
                  Returns Policy
                </a>
              </div>
              <div className="d-flex gap-4">
                <a className="nav-link text-white hideText" href="/">
                  Help Center <span>|</span>
                </a>{" "}
                
                <a className="nav-link text-white" href="/">
                  My Account
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light border-bottom secondNavbar">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-around w-100">
              <a className="navbar-brand d-none d-lg-block" href="/">
                <img src={logo} alt="Logo" />
              </a>
              <div className="market-search-bar d-flex align-items-center">
                <div className="dropdown category-dropdown">
                  <button
                    className="btn category-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ice Cream
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Ice Cream
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Milk
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Dry Fruits
                      </a>
                    </li>
                  </ul>
                </div>

                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search for a product or brand"
                />
                <button className="btn search-btn">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              <div
                className="d-flex align-items-center gap-3"
                style={{ marginRight: "20px" }}
              >
                <Link className="mx-3 text-dark position-relative" to={'/wishList'}>
                  <i className="bi bi-heart fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    4
                  </span>
                </Link>
                <Link className="text-dark position-relative" to={'/cart'}>
                  <i className="bi bi-cart fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    2
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sticky Category Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-nav ${
          isScrolled ? "fixed-nav" : ""
        }`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/">
                  All Categories
                </a>
                <div className="dropdown-menu categoryMenu">
                  <div className="d-flex">
                    <div className="category-column">
                      <div className="dropdown-submenu">
                        <a href="/" className="dropdown-item">
                          Vegetables & Fruits{" "}
                          <i className="bi bi-chevron-right float-end"></i>
                        </a>
                        <div className="submenu">
                          <a className="dropdown-item" href="/">
                            Fresh Fruits
                          </a>
                          <a className="dropdown-item" href="/">
                            Green Vegetables
                          </a>
                          <a className="dropdown-item" href="/">
                            Organic Items
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-submenu">
                        <a href="/" className="dropdown-item">
                          Beverages{" "}
                          <i className="bi bi-chevron-right float-end"></i>
                        </a>
                        <div className="submenu">
                          <a className="dropdown-item" href="/">
                            Soft Drinks
                          </a>
                          <a className="dropdown-item" href="/">
                            Juices
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-submenu">
                        <a href="/" className="dropdown-item">
                          Meats & Seafoods{" "}
                          <i className="bi bi-chevron-right float-end"></i>
                        </a>
                        <div className="submenu">
                          <a className="dropdown-item" href="/">
                            Chicken
                          </a>
                          <a className="dropdown-item" href="/">
                            Fish
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/">
                  Home
                </a>
                {/* Dropdown content same as above */}
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/">
                  Shop
                </a>
                {/* Dropdown content same as above */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mainMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Vendors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .nav-top-section {
          transition: transform 0.3s ease-in-out;
        }
        .nav-top-section.hidden {
          transform: translateY(-100%);
        }
        .sticky-nav {
          position: sticky;
          top: 0;
          background: white;
          transition: all 0.3s ease;
        }
        .sticky-nav.fixed-nav {
          position: fixed;
          width: 100%;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .secondNavbar {
          background-color: #f3faf2 !important;
        }
        .categoryMenu {
          display: none;
          position: absolute;
          min-width: 250px;
          background: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 0.5rem;
          border-radius: 4px;
        }
        .nav-item.dropdown:hover .categoryMenu {
          display: block;
        }
      `}</style>
    </>
  );
};

export default NavBar;
