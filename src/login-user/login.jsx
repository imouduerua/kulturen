import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted with email:", email);
    // navigate('/dashboard'); // Redirect after successful login
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth logic here
    console.log("Google login initiated");
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-4">
        <div className="text-center my-4">
          <img
            src="/pics/0.png"
            alt="Iwalewa Logo"
            style={{
              width: "70px",
              height: "70px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <div className="login-box container-fluid align-items-center justify-content-center mb-4 mx-auto bg-dark">
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label h3">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
              />
            </div>

            <p className="small text-muted">
              By signing up or logging in, you consent to Iwalewa's{" "}
              <Link to="/terms-of-use" className="text-white">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-white">
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              className="btn w-100 border-0 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #e31414, #89374a, #4f1322)",
              }}
            >
              Log in
            </button>
          </form>

          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="bg-transparent text-white border-0"
              style={{ textDecoration: "underline" }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Forgot password?
            </button>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Reset password
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        className="btn text-white"
                        type="submit"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #e31414, #89374a, #4f1322)",
                        }}
                      >
                        Send Reset Link
                      </button>
                    </div>
                  </form>
                </div>
                <div className="modal-footer justify-content-center text-center">
                  <p>
                    Don't need reset?{" "}
                    <Link to="/login" className="text-white">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider">
            <span className="bg-transparent">OR</span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="btn border-0 text-white w-100 d-flex align-items-center justify-content-center gap-2"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #e31414, #89374a, #4f1322)",
            }}
          >
            Continue with Google
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
