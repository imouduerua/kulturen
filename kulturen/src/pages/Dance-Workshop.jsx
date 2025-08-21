import React from "react";
import "../assets/mystyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DanceCard from "../components/section/DanceCard";

const Dance_workshop = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <h2
          className="mb-4 border-bottom border-info text-center"
          style={{ color: "#FF5715" }}
        >
          Dance workshops
        </h2>
        <h5 className="mb-4">
          Get to know each other while dancing to live music!
        </h5>
        <p>
          Look forward to a dance experience where you'll be carried by the
          group and the powerful live music . In this live experience, you can
          feel, express, and let go. You'll learn simple movements from West
          African dance that will help you become more grounded and upright.
        </p>
      </div>
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
        <div className="row my-4">
          <div className="col-lg-4 bg-light py-4 text-center">
            <img
              src="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
              className="rounded-circle"
              alt="..."
              style={{ width: 150, height: 150 }}
            />
            <figure>
              <blockquote className="blockquote">
                <p style={{ fontSize: 15 }}>
                  “I know many different dance teachers who give African dance
                  workshops, but only with Stephanie have I experienced that the
                  participants are given so much space and security to express
                  themselves. Stephanie always manages to get everyone to
                  participate, to really participate with an open heart. That's
                  what it's all about."
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Massa Dembélé<br></br>
                <cite title="Source Title">
                  Multi-instrumentalist, singer , griot of ritual dance pedagogy
                </cite>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-6 px-4">
            <h2>Content and objectives</h2>
            <p>
              Each dance workshop focuses on an archetypal emotion. Through the
              dance ritual, we create a safe space where emotions are
              experienced and reflected upon in a self-determined way.
            </p>
            <p>
              We practice appreciation, openness, and acceptance of everything
              that is. This promotes self-awareness and self-healing.
            </p>
            <p>
              The dance workshops offer an ideal opportunity to get to know
              ritual dance pedagogy in order to subsequently participate in
              dance journeys and/or to deepen your dancing skills in further
              training as a ritual dance pedagogue.
            </p>
            <h2>
              <b>Requirements</b>
            </h2>
            <p>
              As always in Ritual Dance Pedagogy, all bodies and dance
              experience levels are welcome.
            </p>
            <button className="btn btn-outline-danger">Register now</button>
          </div>
        </div>
        <div className="row">
          <DanceCard
            id="123"
            imageSrc="../images/imgPage/webseite!-mega_trommel_tanz_sw.jpg"
            altText="massa"
            title="Creative dance with African live music on 11 October 2025 in Hamburg"
            year="2023"
            description="Dance evening with live music to get to know each other with Stephanie Bangoura and Massa Dembélé. Look forward to..."
          />
          <DanceCard
            id="123"
            imageSrc="../images/imgPage/Tanzworkshop-02.jpg"
            altText="massa"
            title="Dance workshop with live music from 17 – 19 October 2025 in Hamburg"
            year="2023"
            description="Theme: Dance of Pride with Stephanie Bangoura, Samba Diarra, and Massa Dembele. Pride makes the..."
          />
          <DanceCard
            id="123"
            imageSrc="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
            altText="massa"
            title="Dance Evening"
            year="2023"
            description="Dance workshop with live music from 14 – 16 November 2025 in HamburgTheme: Dance of the Serpent. In the Dance of the Serpent, we connect with the central creation myth..."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dance_workshop;
