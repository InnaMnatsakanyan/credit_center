import styled from 'styled-components';

export const CalculatorContainer = styled.section`
    background-color: #ffffff;
    padding: 4rem 2rem;
    max-width: 70%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
`;

export const CalculatorTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #065f46;
    margin-bottom: 2rem;
    margin-top: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const CalculatorField = styled.div`
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const CalculatorLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #047857;
`;

export const CalculatorInput = styled.input`
    width: 96%;
    padding: 0.75rem 1rem;
    border: 1px solid rgb(115 163 139);
    border-radius: 0.5rem;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: #047857;
        box-shadow: 0 0 0 2px rgba(4, 120, 87, 0.2);
    }
    
    @media (max-width: 768px) {
        width: 88%;
    }
`;

export const CalculatorResult = styled.div`
    margin-top: 2rem;
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid rgb(197 197 197);
    font-size: 1.125rem;
    color: #065f46;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    
    .result-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .result-line:last-child {
        margin-bottom: 0;
    }

    strong {
        font-weight: 700;
    }
`;

export const CalculatorButton = styled.button`
  background-color: #047857;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #065f46;
  }
`;