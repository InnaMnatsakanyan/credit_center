import React, { useState } from 'react';
import {
    EmailContainer,
    EmailTitle,
    EmailForm,
    EmailInput,
    EmailTextArea,
    EmailButton
} from './emails_section.styles';
import { sendEmail } from './sendEmail';
import { useTranslate } from '../../context/useTranslate';

export const EmailSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const t = useTranslate();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendEmail(formData);
        setFormData({ name: '', surname: '', phone: '', message: '' });
    };

    return (
        <EmailContainer ref={ref}>
            <EmailTitle>{t('email_title')}</EmailTitle>
            <EmailForm onSubmit={handleSubmit}>
                <EmailInput
                    type="text"
                    name="name"
                    placeholder={t('email_name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <EmailInput
                    type="text"
                    name="surname"
                    placeholder={t('email_surname')}
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
                <EmailInput
                    type="tel"
                    name="phone"
                    placeholder={t('email_phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <EmailTextArea
                    name="message"
                    placeholder={t('email_message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <EmailButton type="submit">{t('email_submit')}</EmailButton>
            </EmailForm>
        </EmailContainer>
    );
});
