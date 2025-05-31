import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations.json';

export const sendEmail = async (
    formData: {
        name: string;
        surname: string;
        phone: string;
        message: string;
    },
    language: string
) => {
    const t = (key: string) =>
        translations[language]?.[key] ?? translations['arm'][key] ?? key;

    try {
        await emailjs.send(
            'service_dpi4yi7',
            'template_525wptm',
            {
                name: formData.name,
                surname: formData.surname,
                phone: formData.phone,
                email: 'creditcenter.arm@gmail.com',
                message: formData.message
            },
            '27Okbd5aNUqkz4-9p'
        );

        alert(t('email_success'));
    } catch (error) {
        console.error('Email sending failed:', error);
        alert(t('email_error'));
    }
};
