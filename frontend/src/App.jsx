import { Routes, Route } from "react-router-dom";
import HomePageLogic from "./HomePageLogic";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PublicProfile from "./components/PublicProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLogic />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/:username" element={<PublicProfile />} />
    </Routes>
  );
}
export default App;
