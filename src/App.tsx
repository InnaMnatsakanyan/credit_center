import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LandingScreen} from "./presentation/landing/landing_screen";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
        </Routes>
      </Router>
  );
};

export default App;
