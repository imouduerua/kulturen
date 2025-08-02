import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Language state
  const [language, setLanguage] = useState("en");
  // User login state (null for not logged in, email for logged in)
  const [user, setUser] = useState(null); // Replace with real auth logic

  // Language labels
  const langLabels = {
    en: {
      home: "Home",
      tanzevents: "Events",
      weiterbildung: "Education",
      about: "About",
      en: "English",
      de: "German",
      language: "Language",
    },
    de: {
      home: "Startseite",
      tanzevents: "Veranstaltungen",
      weiterbildung: "Weiterbildung",
      about: "Über",
      en: "Englisch",
      de: "Deutsch",
      language: "Sprache",
    },
  };

  // Handle language change
  const handleLanguageChange = (lang) => setLanguage(lang);

  // Handle login/logout (placeholder)
  const handleLogin = () => setUser("user@example.com");
  const handleLogout = () => setUser(null);

  return (
    <>
      {/* Bootstrap Navbar */}
      <nav
        className="navbar bg-white fixed-top border-bottom border-info"
        style={{ maxHeight: "150px" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Toggle button for offcanvas (mobile) */}
          <button
            className="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
          >
            <i className="fas fa-bars fa-lg text-info"></i>
          </button>

          {/* Social Icons (left, only on lg+) */}
          <div className="d-none d-lg-flex align-items-center order-1 me-auto">
            <a className="navbar-brand m-0" href="/">
              <img
                src="../images/logos.png"
                alt="Logo"
                style={{ width: "150px", height: "40px" }}
              />
            </a>
          </div>

          {/* Logo (centered on md, mobile) */}
          <div
            className="d-md-block d-lg-none position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <a className="navbar-brand m-0" href="/">
              <img
                src="../images/logos.png"
                alt="Logo"
                style={{
                  width: "130px",
                  height: "30px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </a>
          </div>

          {/* Navigation links (centered on lg) */}
          <div className="d-none d-lg-flex mx-auto order-1 order-lg-1">
            <a className="nav-link px-3" style={{ color: "#027D8F" }} href="/">
              {langLabels[language].home}
            </a>
            <a
              className="nav-link px-3"
              style={{ color: "#027D8F" }}
              href="/artists"
            >
              {langLabels[language].tanzevents}
            </a>
            <a
              className="nav-link px-3"
              style={{ color: "#027D8F" }}
              href="/artworks"
            >
              {langLabels[language].weiterbildung}
            </a>
            <a
              className="nav-link px-3"
              style={{ color: "#027D8F" }}
              href="/art-fairs"
            >
              {langLabels[language].about}
            </a>
          </div>

          {/* Icons (right) */}
          <div className="icon-group d-flex align-items-center order-3 ms-auto">
            <div className="btn-group">
              <button
                class="btn btn-sm border-0 btn-outline-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="<?= htmlspecialchars($lang['language']) ?>"
              >
                <i className="fas fa-globe"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ position: "absolute" }}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("en")}
                  >
                    {langLabels[language].en}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLanguageChange("de")}
                  >
                    {langLabels[language].de}
                  </button>
                </li>
              </ul>
            </div>
            {/* Login/Logout icon */}
            {user ? (
              <button
                className="btn btn-link"
                onClick={handleLogout}
                title="Logout"
              >
                <i className="bi bi-arrow-right-square-fill fs-4"></i>
              </button>
            ) : (
              <button
                className="btn btn-link"
                onClick={handleLogin}
                title="Login"
              >
                <Link
                  to="/login-user/login"
                  className="btn btn-link"
                  title="Login"
                >
                  <i className="fas fa-user"></i>
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div
        className="header-spacer"
        style={{
          backgroundColor: "#027D8F",
          height: window.innerWidth >= 992 ? "60px" : "50px",
        }}
      ></div>
    </>
  );
}

export default Header;
