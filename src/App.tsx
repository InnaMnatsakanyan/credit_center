import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingScreen } from "./presentation/landing/landing_screen";
import { PrivacyPolicyScreen } from "./presentation/privacy_policy/privacy_policy_screen";
import { TermsConditionsScreen } from "./presentation/terms_and_conditions/terms_and_conditions_screen";
import { Analytics } from "./components/analytics/analytics";
import { LanguageProvider } from "./context/LanguageContext";
import {LanguageSync} from "./context/LanguageSync";

const App: React.FC = () => {
    return (
        <Router>
            <LanguageProvider>
                <LanguageSync />
                <Analytics />
                <Routes>
                    <Route path="/:lang/" element={<LandingScreen />} />
                    <Route path="/:lang/privacy_policy" element={<PrivacyPolicyScreen />} />
                    <Route path="/:lang/terms" element={<TermsConditionsScreen />} />
                </Routes>
            </LanguageProvider>
        </Router>
    );
};

export default App;
