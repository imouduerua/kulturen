import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OffcanvasMenu from "../components/Offcanvas_sm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/mystyles.css";
import FacesSection from "../components/section/FaceSection";
import CarouselSection from "../components/section/CarouselSection";

const Home = () => {
  return (
    <>
      <Header />
      <OffcanvasMenu />
      {/* Carousel */}
      <div className="container-fluid mt-4 mx-auto text-center">
        <CarouselSection />
      </div>

      <hr
        className="my-5 text-danger"
        style={{ height: 1, borderWidth: 0, backgroundColor: "#D00D1E" }}
      />

      {/* Faces */}
      <div className="row container mt-4 mx-auto text-center">
        <FacesSection />
      </div>

      <hr
        className="my-5 text-danger"
        style={{ height: 1, borderWidth: 0, backgroundColor: "#D00D1E" }}
      />

      {/* Cards Section */}
      <div className="container-fluid row text-center">
        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" style={{ color: "#ff5715" }}>
                12
                <br />
                August
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" style={{ color: "#ff5715" }}>
                27
                <br />
                August
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" style={{ color: "#ff5715" }}>
                10
                <br />
                September
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row justify-content-center justify-content-lg-end my-3">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <a href="dates" className="btn btn-outline-danger w-100">
            View all dates{" >>"}
          </a>
        </div>
      </div>

      <hr
        className="my-5 text-danger"
        style={{ height: 1, borderWidth: 0, backgroundColor: "#D00D1E" }}
      />

      {/* Weiterbildung Section */}
      <div className="container-fluid row justify-content-center bg-info text-center mx-auto mt-4">
        <div className="col-lg-6 col-md-6 col-sm-12 py-3">
          {/* Weiterbildung Section */}
          <img
            src="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
            className="rounded-circle"
            alt="..."
            style={{ width: 150, height: 150 }}
          />
          <h1 className="mb-3">Further education</h1>
          <p className="mb-3">
            Would you like to lead dance creatively and competently in groups?
            Are you ready to explore and develop your unique dance being?
          </p>
          <button className="btn border-dark mb-4"> Read more</button>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 py-3">
          {/* Tanzworkshops Section */}
          <img
            src="../images/imgPage/Tanzworkshops-03.jpg"
            className="rounded-circle"
            alt="..."
            style={{ width: 150, height: 150 }}
          />
          <h2 className="mb-3">Dance workshops</h2>
          <p classNamen="mb-3">
            Look forward to a dance experience in which you will be carried by
            the group and the powerful live music. In this live experience you
            can feel yourself.
          </p>
          <button className="btn border-dark mb-4"> Read more</button>
        </div>
      </div>

      <hr
        className="my-5 text-danger"
        style={{ height: 1, borderWidth: 0, backgroundColor: "#D00D1E" }}
      />

      {/* Hero Section */}
      <section
        className="hero-section text-center"
        style={{
          backgroundImage:
            "url(../images/imgPage/Mega_stephanie_kick_gruppe.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          color: "white",
        }}
      >
        <div className="container">
          <h1
            className="display-3 mb-4"
            style={{
              background: "linear-gradient(red, #FF5715)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Discover your dance essence
          </h1>
          <p
            className="lead mb-5"
            style={{
              background: "linear-gradient(red, #FF5715)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Creative dance training for body, mind and soul
          </p>
        </div>
      </section>

      <hr
        className="my-5 text-danger"
        style={{ height: 1, borderWidth: 0, backgroundColor: "#D00D1E" }}
      />
      <Footer />
    </>
  );
};

export default Home;
