import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Imprint = () => {
  return (
    <>
      {/* Replace these with your actual Header and Footer React components */}
      <Header />

      <div
        className="container my-5 imprint-container"
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.07)",
          padding: "32px",
          maxWidth: "900px",
          margin: "40px auto",
        }}
      >
        <h2
          className="mb-4 border-bottom border-info"
          style={{ color: "#FF5715" }}
        >
          Imprint
        </h2>

        {[
          {
            title: "Information according to § 5 TMG",
            text: `Business address
          for Association and Institute
          Karolinenstraße 5a, House 4
          20357 Hamburg
          Office: 0151/520 133 06`,
          },
          {
            title: "Headquarters",
            text: `Tanz der Kulturen eV
          21227 Bendestorf
          Board: Stephanie Bangoura
          info@tanz-der-kulturen.de

          Tostedt District Court,
          Association Register 201193`,
          },
          {
            title: "Institute for Ritual Dance Pedagogy gGmbH",
            text: `Karolinenstraße 5a, House 4
          20357 Hamburg
          Management: Stephanie Bangoura
          institut@rituelle-tanzpaedagogik.de

          Hamburg District Court
          HRB 177952
          VAT ID No.: 15/141/05621`,
          },
        ].map(({ title, text }, i) => (
          <div
            key={i}
            className="card text-break mb-4 border-0"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-2" style={{ color: "#FF5715" }}>
                {title}
              </h5>
              <p style={{ whiteSpace: "pre-line" }}>{text}</p>
            </div>
          </div>
        ))}

        <h5 className="card-title mb-2" style={{ color: "#FF5715" }}>
          Terms of Use
        </h5>
        <p>
          Access to and use of this site is subject to the following terms of
          use and applicable laws. You may use this website for your personal
          use and as an information resource. However, you may not distribute,
          modify, transmit, or revise the content of this site without express
          written permission.
          <br />
          Tanz der Kulturen eV is not responsible for the accuracy or
          completeness of the content of this or any other websites linked to
          this site. It cannot be held liable for any direct, incidental,
          consequential, indirect, or punitive damages resulting from visiting
          or using the content of this or any linked website.
          <br />
          Tanz der Kulturen eV and other names, logos, and brands appearing on
          this site are trademarks used by Tanz der Kulturen eV. Any use or
          misuse of these trademarks or any content on this site is prohibited,
          except as provided in the Terms of Use or the purpose of the website.
        </p>
      </div>

      {/* Footer placeholder */}
      <Footer />
    </>
  );
};

export default Imprint;
