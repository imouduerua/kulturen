import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    trainingYear: "",
    firstName: "",
    lastName: "",
    address: "",
    profession: "",
    phone: "",
    email: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    tiktok: "",
    referral: "",
    motivation: "",
    payment: "",
    locationDate: "",
    signature: "",
    terms: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false || !formData.terms) {
      e.stopPropagation();
    } else {
      console.log("Submitted:", formData);
      // Add your form submission logic here (e.g., fetch/axios)
    }
    setValidated(true);
  };

  return (
    <div className="container my-5">
      <h3 className="mx-auto p-2 text-center" style={{ color: "#FF5715" }}>
        Registration for Ritual Dance Education
      </h3>

      <form
        className={`needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Training Year */}
        <div className="row mb-3">
          <label className="form-label">Training Year (please select):</label>
          {["1st Year", "2nd Year", "3rd Year"].map((year, index) => (
            <div className="col-4 form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="trainingYear"
                id={`year${index + 1}`}
                value={year}
                checked={formData.trainingYear === year}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor={`year${index + 1}`}>
                {year}
              </label>
            </div>
          ))}
          <div className="invalid-feedback">Please select a training year.</div>
        </div>

        {/* Personal Info */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Street/City</label>
          <input
            type="text"
            className="form-control"
            name="address"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profession/Qualifications</label>
          <input
            type="text"
            className="form-control"
            name="profession"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            onChange={handleChange}
          />
        </div>

        {/* Social Media */}
        <div className="row">
          {["instagram", "facebook", "linkedin", "tiktok"].map(
            (platform, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <label className="form-label">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name={platform}
                  onChange={handleChange}
                />
              </div>
            )
          )}
        </div>

        {/* Motivation & Referral */}
        <div className="mb-3">
          <label className="form-label">
            How did you hear about the course?
          </label>
          <input
            type="text"
            className="form-control"
            name="referral"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            What is your motivation/wish for the training?
          </label>
          <textarea
            className="form-control"
            rows="3"
            name="motivation"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Payment Options */}
        <div className="mb-3">
          <label className="form-label">Payment Option:</label>
          <p>
            Each Training year costs 3,300 € (as educational institution are we
            from Survey exempt from VAT).
          </p>
          {["Early Bird", "Installments"].map((option, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id={`payment${index}`}
                value={option}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor={`payment${index}`}>
                {option === "Early Bird"
                  ? "Early Bird (3,000 € Total)"
                  : "10 Monthly Installments of 330 €"}
              </label>
            </div>
          ))}
        </div>

        {/* Agreement */}
        <div className="mb-3">
          <label className="form-label">Location and Date</label>
          <input
            type="text"
            className="form-control"
            name="locationDate"
            onChange={handleChange}
          />
        </div>

        <div className="row container bg-info my-4 text-white py-4">
          <div className="col-md-6">
            <ul>
              <li>Module 1: Dance the Liberation.</li>
              <li>Module 2: Dance of Pride.</li>
              <li>Module 3: The Snake and the dance the Reconciliation.</li>
              <li>Module 4: Dance of Sensuality.</li>
              <li>Module 5: Dance of the Pain.</li>
              <li>
                Module 6: Dance of the Foolish Dance trip + own Teaching
                practice in the July in Salzwedel.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                Year: Experience/ Introduction
                <br />6 WE in Hamburg 6 on-line Module theory with 6 Live calls
                teaching practice week in Wendland 150 Hours in total.
              </li>
              <li>
                Year: Method/ Deepening <br />6 WE in Hamburg 6 on-line Module
                theory with 6 Live calls teaching practice week in Wendland 450
                Hours in total.
              </li>
              <li>
                Year: Teaching/ Application <br /> 6 WE in Hamburg 6 on-line
                Module theory with 6 Live calls teaching practice week in
                Wendland incl. performative thesis and Colloquium 800 hours
                total
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div
            className="card col-md-6 text-break mb-4 border-0"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-2">
                Institute for Ritual Dance education
              </h5>
              <p style={{ whiteSpace: "pre-line" }}>
                gGmbH GLS Bank,
                <br />
                DE53 4306 0967 1271 4650 00 BIC: <br />
                GENODEM1GLS <br />
                Purpose of use: Continuing education 2024[NAME]
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ fontSize: "10px" }}>
            <p>Disclaimer</p>
            <ul>
              <li>
                Participation in all dance workshops is voluntary and at your
                own risk . Neither the dance studio still the Course instructor
                take over Liability for in the Personal injury or property
                damage or loss of items brought along in connection with
                attending the course.
              </li>
              <li>
                No diagnoses, therapies or treatments in the medical sense are
                carried out, nor are any other medical practices practiced in
                the legal sense.
              </li>
              <li>
                It is me known, that the Musicians, the group and the Training
                management have no medical knowledge and therefore no medical
                treatment is carried out.
              </li>
              <li>
                Participation in the dance events cannot be considered a medical
                or therapeutic Treatment substitute. The Training management
                holds one Collaboration with physicians is important and useful.
                No ongoing treatment should be interrupted or discontinued.
                become or one future necessary postponed or be avoided. The
                responsibility lies entirely with me.
              </li>
              <li>It becomes no Promise of healing given.</li>
              <li>
                It is my responsibility and decision to attend or cancel the
                dance events.
              </li>
              <li>I became above the Working methods enlightened.</li>
            </ul>
          </div>
        </div>

        <section>
          <h5>
            <b>Image rights (Association/Institute)</b>
          </h5>
          <p>
            I agree that photo, audio and video material taken during my
            participation in workshops and performances by the Tanz der Kulturen
            association may be used in Internet published become may, to the
            Activities of the club to document and to apply.
          </p>
          <h5>
            <b>Acknowledgement</b>
          </h5>
          <p>
            I have the General Terms and Conditions and the Privacy Policy in
            the Read and understood the attachment.
          </p>
          <h5>
            <b>Membership</b>
          </h5>
          <p>
            I become a free member of the Tanz der Kulturen eV association for
            at least the duration of my training. Membership will automatically
            renew for another year without notice.
          </p>
        </section>

        <div className="mb-3">
          <label className="form-label">Signature (Type full name)</label>
          <input
            type="text"
            className="form-control"
            name="signature"
            onChange={handleChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the above mentioned Conditions, terms, liability waiver,
            photo release, and membership conditions.
          </label>
          <div className="invalid-feedback">
            You must accept the agreement to continue.
          </div>
        </div>

        <button
          type="submit"
          className="btn w-100 border-danger"
          style={{ color: "#FF5715" }}
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
