import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Performance = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <h2
          className="mb-4 border-bottom border-info text-center"
          style={{ color: "#FF5715" }}
        >
          SnakeAwake Performance
        </h2>
        <h5 className="mb-4">Ritual dance event with Afro-fusion live music</h5>
        <p>
          SnakeAwake , the international dance group and band, performs
          contemporary African dance and music in a ritual setting. Our
          musicians and dancers are equally at home in both African and European
          cultures.<br></br> As internationally active artists, our performance
          team understands what it means to be confronted with prejudice,
          exclusion, and precarious living conditions. Integration, inclusion,
          and self-empowerment are ongoing challenges for them in their art of
          living. The live performances invite participation – the barrier
          between stage and audience is playfully overcome.
        </p>
      </div>
      <div
        className="container-fluid my-5 performance-container"
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.07)",
          padding: "32px",
          margin: "40px auto",
        }}
      >
        <div className="row container-fluid my-4 bg-light py-4">
          <div className="col-lg-4 text-center">
            <img
              src="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
              className=""
              alt="..."
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="col-lg-6">
            <p>
              You can book us! Receive a customized quote tailored to your
              needs. We can staff the dance team and band to suit your event.
              We'd be happy to play for your celebration; we have extensive
              experience with non-denominational weddings and wedding rituals.
            </p>
          </div>
        </div>

        <div className="row my-4 py-4 performance-container">
          <div className="col-lg-4 text-center">
            <img
              src="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
              className=""
              alt="..."
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="col-lg-6">
            <h4>
              <b>Participatory performance with live African music</b>
            </h4>
            <p>
              Immerse yourself in SNAKEAWAKE, a participatory dance performance
              where myth meets contemporary staging. Inspired by a creation myth
              of the Yoruba people of West Africa, this performative dance
              ritual celebrates the snake as a symbol of transcendence,
              reconciliation, and diversity.
            </p>
            <h4>
              <b>Why SNAKEAWAKE?</b>
            </h4>
            <p>
              The SnakeAwake performance is an artistic interpretation of ritual
              dance pedagogy. SnakeAwake is based on animistic ways of thinking,
              the elements of nature with their personified and divine beings,
              the Orishas. Orishas are human deities and divine humans.
            </p>
            <p className="text-end fst-italic">
              Long ago, deities and spirits lived in heaven, while humans and
              animals lived on earth. Like oil and water, the two worlds did not
              mix. But one day, the serpent decided to unite them by
              transforming its long body into a rainbow, thus connecting heaven
              and earth. It is said that since then, humans and the divine have
              been eternally one.
            </p>
          </div>
        </div>

        <div className="row my-4 py-4 performance-container">
          <div className="col-lg-4 text-center">
            <img
              src="../images/imgPage/afrika_tanztherapie_hamburg4.jpg"
              className=""
              alt="..."
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="col-lg-6">
            <p>
              Various interpretations of this creation myth can be heard today
              in the Americas, the Caribbean, and throughout the African
              diaspora. Indeed, in many indigenous cultures, from Indian and
              Greco-Roman to Chinese and Australian, the serpent is a feminine
              symbol of eternal transformation, tolerance, and diversity, as
              well as the connection between the material and spiritual worlds.
            </p>
            <p>
              SnakeAwake seeks to embody this paradox of the simultaneity of
              humanity and divinity in dance. The artists dare to creatively
              shape the ritual in the moment. By combining artistic excellence
              with participatory practices, SnakeAwake offers a cross-cultural
              space for personal and collective transformation.
            </p>
            <h4>
              <b>Snake Awake is a 30-45 minute site</b>
            </h4>
            <p>
              -specific performance that can take place in various locations. It
              consists of three to eight dancers, two to three live musicians,
              two singers, and playback tracks.
            </p>
          </div>
          {[
            {
              title: "Creative Team",
              text: `STEPHANIE BANGOURA , concept and artistic direction.
                MAIMOUNA JALLOW , artistic direction.
                CARMELITA SIWA , choreography.
                ANETTE STANGENBERG , musical production and singing.
                KELVYN HALLIFAX, musical production and studio.
                LASSE BUCCHOP, film.
                MIRIAM DEL BARRIO , choreography assistant.
                GILBERTO FERREIRA , project manager and musical coordination.
                CAMILO BUENO DE LEON, sound engineer.`,
            },
            {
              title: "Dancers",
              text: `HAMZA PRIMO
                LAURA VECHOT
                MIRIAMBA
                NICOLÁS VIGNOLO
                RODOLPHO SAGBO
                YESHIHAREG COMAS`,
            },
            {
              title: "Musicians and Singers",
              text: `ANNETTE STANGENBERG , vocal performance.
                    TEMMIE OVWASA , vocal performance.
                    MASSA DEMBELE , multi-instrumentalist.
                    ALI DIARRA , multi-instrumentalist.
                    SOLO DIARRA , multi-instrumentalist.`,
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
        </div>
        <div>
          <h2>Partner:</h2>
          <p>
            Associació Afro Alamuta<br></br>Co-funded by the European Union
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Performance;
