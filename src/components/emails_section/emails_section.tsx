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

export const EmailSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendEmail(formData);
        setFormData({ name: '', surname: '', phone: '', email: '', message: '' });
    };

    return (
        <EmailContainer ref={ref}>
            <EmailTitle>Կապ Մեզ Հետ</EmailTitle>
            <EmailForm onSubmit={handleSubmit}>
                <EmailInput
                    type="text"
                    name="name"
                    placeholder="Անուն"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <EmailInput
                    type="text"
                    name="surname"
                    placeholder="Ազգանուն"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
                <EmailInput
                    type="tel"
                    name="phone"
                    placeholder="Հեռախոսահամար"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <EmailInput
                    type="email"
                    name="email"
                    placeholder="Էլ. հասցե"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <EmailTextArea
                    name="message"
                    placeholder="Նկարագրություն"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <EmailButton type="submit">Ուղարկել</EmailButton>
            </EmailForm>
        </EmailContainer>
    );
});
