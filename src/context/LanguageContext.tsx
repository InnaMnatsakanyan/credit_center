import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type LanguageContextType = {
    language: string;
    slug: string;
    setLanguage: (lang: string) => void;
};

export const languageToSlug = (lang: string) => {
    switch (lang) {
        case "arm": return "hy";
        case "eng": return "en";
        case "rus": return "ru";
        default: return "en";
    }
};

export const slugToLanguage = (slug: string) => {
    switch (slug) {
        case "hy": return "arm";
        case "en": return "eng";
        case "ru": return "rus";
        default: return "eng";
    }
};

const LanguageContext = createContext<LanguageContextType>({
    language: "arm",
    slug: languageToSlug("arm"),
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const match = location.pathname.match(/^\/(hy|en|ru)/);
    const initialSlug = match ? match[1] : 'hy';
    const initialLanguage = slugToLanguage(initialSlug);

    const [language, setLanguage] = useState(initialLanguage);
    const slug = languageToSlug(language);

    useEffect(() => {
        const match = location.pathname.match(/^\/(hy|en|ru)/);
        const slug = match ? match[1] : 'hy';
        const lang = slugToLanguage(slug);

        if (lang !== language) {
            setLanguage(lang);
        }
    }, [location.pathname]);

    return (
        <LanguageContext.Provider value={{ language, slug, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
