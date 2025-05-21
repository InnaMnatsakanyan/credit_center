import styled from 'styled-components';

export const BenefitsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5rem 6rem;
    gap: 3rem;
    flex-wrap: wrap;
    background-color: #ffffff;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
    }
`;

export const BenefitsContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const BenefitsTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: rgb(255 89 0);
    margin-bottom: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const BenefitsDescription = styled.p`
    font-size: 1rem;
    color: #047857;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 0.85rem;
        margin: 0;
    }
`;

export const BenefitsContainer = styled.div`
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: 0.75rem;
    }
`;

export const NumberedBenefit = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
        border-bottom: none;
    }
`;

export const BenefitNumber = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #047857;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;

    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        font-size: 0.875rem;
    }
`;

export const BenefitText = styled.p`
    font-size: 1.1rem;
    color: #065f46;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export const BenefitsImage = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        max-width: 180px;
    }
`;

export const BenefitsFlexRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;