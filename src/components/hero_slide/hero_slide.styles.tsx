import styled from 'styled-components';

export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 1rem;
    background-image: url("/background.png");

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const HeroContent = styled.div`
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const HeroImage = styled.img`
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: contain;
    margin-top: -1rem;
    margin-bottom: -4rem;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    -webkit-mask-image:
            linear-gradient(to right,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,1) 10%,
            rgba(0,0,0,1) 90%,
            rgba(0,0,0,0) 100%
            ),
            linear-gradient(to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,1) 20%,
            rgba(0,0,0,1) 80%,
            rgba(0,0,0,0) 100%
            );
    -webkit-mask-composite: destination-in;
    mask-image:
            linear-gradient(to right,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,1) 10%,
            rgba(0,0,0,1) 90%,
            rgba(0,0,0,0) 100%
            ),
            linear-gradient(to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,1) 20%,
            rgba(0,0,0,1) 80%,
            rgba(0,0,0,0) 100%
            );
    mask-composite: intersect;
`;

export const HeroHeading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.75rem 0;
    color: rgb(255 89 0);
    text-shadow: .1em .05em 0 hsl(142, 18%, 27%);

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const HeroText = styled.p`
    font-size: 1rem;
    margin: 0.75rem 0;
    color: #ffffff;
    text-shadow: .1em .05em 0 hsl(0, 0%, 9%);

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const HeroButton = styled.button`
    background-color: rgb(44 115 97);
    color: white;
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #065f46;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
    }
`;
