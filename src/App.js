import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/Registration";
import Imprints from "./pages/Imprints";
import PrivacyPolicy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/Imprints" element={<Imprints />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
