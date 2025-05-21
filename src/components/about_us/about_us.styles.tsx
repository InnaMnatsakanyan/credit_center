import styled from 'styled-components';

export const AboutContainer = styled.section`
    padding: 4rem;
    background-color: rgb(241 241 241);

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const AboutTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #065f46;
    margin-bottom: 3rem;
    margin-top: 0;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const AboutWrapper = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AboutCard = styled.div`
  flex: 1 1 45%;
  background-color: rgb(249, 115, 22);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const AboutText = styled.p`
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.6;

    @media (max-width: 768px) {
        margin: 0;
    }
`;
