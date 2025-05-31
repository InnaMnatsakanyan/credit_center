import { createContext, useContext, useState } from "react";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: "arm",
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("arm");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
