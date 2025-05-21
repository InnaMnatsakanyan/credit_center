import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
    name: string;
    surname: string;
    phone: string;
    email: string;
    message: string;
}) => {
    try {
        await emailjs.send(
            'service_ej2sd7k',
            'template_525wptm',
            {
                name: formData.name,
                surname: formData.surname,
                phone: formData.phone,
                email: formData.email,
                message: formData.message
            },
            '27Okbd5aNUqkz4-9p'
        );

        alert('Նամակը հաջողությամբ ուղարկվել է։');
    } catch (error) {
        console.error('Email sending failed:', error);
        alert('Նամակը չհաջողվեց ուղարկել։');
    }
};
