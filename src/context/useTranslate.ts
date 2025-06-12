import translations from "../translations.json";
import { useLanguage } from './LanguageContext';

export const useTranslate = () => {
    const { language } = useLanguage();
    return (key: string) => translations[language]?.[key];
};
