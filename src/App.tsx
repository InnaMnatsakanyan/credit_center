import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingScreen } from "./presentation/landing/landing_screen";
import { PrivacyPolicyScreen } from "./presentation/privacy_policy/privacy_policy_screen";
import { TermsConditionsScreen } from "./presentation/terms_and_conditions/terms_and_conditions_screen";
import { Analytics } from "./components/analytics/analytics";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <Analytics />
                <Routes>
                    <Route path="/" element={<LandingScreen />} />
                    <Route path="/privacy_policy" element={<PrivacyPolicyScreen />} />
                    <Route path="/terms" element={<TermsConditionsScreen />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
};

export default App;
