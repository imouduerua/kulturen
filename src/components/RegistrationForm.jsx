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
      <h3
        className="mx-auto p-2 text-center"
        style={{
          background: "linear-gradient(red, purple)",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
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
            I agree to the terms, liability waiver, photo release, and
            membership conditions.
          </label>
          <div className="invalid-feedback">
            You must accept the agreement to continue.
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 border-danger"
          style={{
            background: "linear-gradient(red, purple)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
