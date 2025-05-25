import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LandingScreen} from "./presentation/landing/landing_screen";
import {PrivacyPolicyScreen} from "./presentation/privacy_policy/privacy_policy_screen";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/privacy_policy" element={<PrivacyPolicyScreen />} />
        </Routes>
      </Router>
  );
};

export default App;
