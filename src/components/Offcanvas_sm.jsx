import React from "react";
import { useState, useEffect } from "react";

const OffcanvasMenu = () => {
  return (
    <>
      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNav"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title">
            <b>Tanz der-Kulturen</b>
          </h3>
          {/* Close button */}
          <button
            type="button"
            className="btn-close btn-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#027D8F" }}
                href="./index"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#027D8F" }}
                href="artists"
              >
                Tanzevents
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#027D8F" }}
                href="artists"
              >
                Weiterbildung
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#027D8F" }}
                href="artists"
              >
                Über uns
              </a>
            </li>
          </ul>
        </div>

        <div className="offcanvas-footer align-items-center mb-4 mx-2">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm mx-1 rounded-circle"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
