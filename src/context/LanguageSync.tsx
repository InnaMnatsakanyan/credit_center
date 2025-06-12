import { useEffect } from "react";
import { useLanguage, languageToSlug, slugToLanguage } from "./LanguageContext";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export const LanguageSync = () => {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useParams();

    useEffect(() => {
        const slug = languageToSlug(language);
        const match = location.pathname.match(/^\/(hy|en|ru)/);
        const currentSlug = match ? match[1] : 'en';

        if (slug !== currentSlug) {
            const pathWithoutLang = location.pathname.replace(/^\/(hy|en|ru)/, "");
            const newPath = `/${slug}${pathWithoutLang}`;
            navigate(newPath, { replace: true });
        }
    }, [language, navigate, location.pathname]);

    return null;
};
