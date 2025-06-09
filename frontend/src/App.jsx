import { Routes, Route } from "react-router-dom";
import HomePageLogic from "./HomePageLogic";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLogic />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
export default App;
