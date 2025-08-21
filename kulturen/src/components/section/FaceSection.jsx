import React from "react";

const FacesSection = () => {
  return (
    <section className="w-100 px-0 py-6 bg-light">
      <div className="row g-4 container mx-auto">
        {/* Left quote card */}
        <div className="col-6 me-n3" style={{ zIndex: 1 }}>
          <div className="card h-100 border-0 overflow-hidden position-fixed">
            <img
              src="../images/massa.png"
              alt="massa"
              className="card-img"
              style={{
                minHeight: "16rem",
                maxHeight: "20rem",
                objectFit: "cover",
                width: 280,
                objectPosition: "20% center",
              }}
            />
            <div className="card-img-overlay d-flex align-items-end p-0">
              <div
                className="w-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 90%, transparent 100%)",
                  padding: "2.5rem 1.5rem 1rem 1.5rem",
                }}
              >
                <p
                  className="text-light fst-italic small text-center mb-0"
                  style={{ textShadow: "0 1px 4px #000" }}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right quote card */}
        <div className="col-6 ps-0">
          <div className="card h-100 border-0 overflow-hidden position-fixed align-items-end justify-content-end">
            <img
              src="../images/stephanie.png"
              alt="stephanie"
              className="card-img h-100 object-fit-cover"
              style={{
                minHeight: "16rem",
                maxHeight: "20rem",
                objectFit: "cover",
                width: 280,
                objectPosition: "20% center",
              }}
            />
            <div className="card-img-overlay d-flex align-items-end p-0">
              <div
                className="w-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 90%, transparent 100%)",
                  padding: "2.5rem 1.5rem 1rem 1.5rem",
                }}
              >
                <p
                  className="text-light fst-italic small text-center mb-0"
                  style={{ textShadow: "0 1px 4px #000" }}
                >
                  “Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacesSection;
