import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EventsDates = () => {
  return (
    <>
      <Header />
      <div className="container-fluid row my-4">
        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header text-center">
              <Link style={{ textDecoration: "none" }}>
                <h1 className="card-title" style={{ color: "#ff5715" }}>
                  13th September
                </h1>
              </Link>
            </div>
            <div className="card-body table">
              <tbody>
                <tr>
                  <td>Title:</td>
                  <td>
                    <b>Impudence</b>
                  </td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>
                    <b>A Weekend Training</b>
                  </td>
                </tr>
                <tr>
                  <td>Venue:</td>
                  <td>
                    Wiese e.G.Wiesendamm 24,<br></br> 22305 Hamburg, Germany.
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header text-center">
              <Link style={{ textDecoration: "none" }}>
                <h1 className="card-title" style={{ color: "#ff5715" }}>
                  13th September
                </h1>
              </Link>
            </div>
            <div className="card-body table">
              <tbody>
                <tr>
                  <td>Title:</td>
                  <td>
                    <b>Impudence</b>
                  </td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>
                    <b>A Weekend Training</b>
                  </td>
                </tr>
                <tr>
                  <td>Venue:</td>
                  <td>
                    Wiese e.G.Wiesendamm 24,<br></br> 22305 Hamburg, Germany.
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header text-center">
              <Link style={{ textDecoration: "none" }}>
                <h1 className="card-title" style={{ color: "#ff5715" }}>
                  13th September
                </h1>
              </Link>
            </div>
            <div className="card-body table">
              <tbody>
                <tr>
                  <td>Title:</td>
                  <td>
                    <b>Impudence</b>
                  </td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>
                    <b>A Weekend Training</b>
                  </td>
                </tr>
                <tr>
                  <td>Venue:</td>
                  <td>
                    Wiese e.G.Wiesendamm 24,<br></br> 22305 Hamburg, Germany.
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsDates;
