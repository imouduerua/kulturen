import React from "react";

const CarouselSection = () => {
  return (
    <section className="container-fluid" style={{ fontFamily: "Commissioner" }}>
      {/* Carousel */}
      <div className="mt-3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/img1.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/img2.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/img3.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
