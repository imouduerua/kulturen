import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/Registration";
import Imprints from "./pages/Imprints";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./login-user/Login";
import Dance_workshop from "./pages/Dance-Workshop";
import Performance from "./pages/Performances";
import EventsDates from "./pages/EventsDates";
import Admin from "./admin/pages/Admin";
import AdminClasses from "./admin/pages/Class";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/Imprints" element={<Imprints />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Dance-Workshop" element={<Dance_workshop />} />
          <Route path="/Performances" element={<Performance />} />
          <Route path="/EventsDates" element={<EventsDates />} />
          <Route path="/admin/pages/Class" element={<AdminClasses />} />
          <Route path="/login-user/Login" element={<Login />} />
          <Route path="/admin/pages/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
