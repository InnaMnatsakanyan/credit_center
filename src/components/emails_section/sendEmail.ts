import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
    name: string;
    surname: string;
    phone: string;
    message: string;
}) => {
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

        alert('Նամակը հաջողությամբ ուղարկվել է։');
    } catch (error) {
        console.error('Email sending failed:', error);
        alert('Նամակը չհաջողվեց ուղարկել։');
    }
};
