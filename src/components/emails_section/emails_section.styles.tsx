import styled from 'styled-components';

export const EmailContainer = styled.section`
    background-color: #ffffff;
    padding: 4rem 2rem;
    text-align: center;
`;

export const EmailTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: bold;
    color: #ff5f00;
    margin-bottom: 2rem;
`;

export const EmailForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const EmailInput = styled.input`
    padding: 0.75rem 1rem;
    border: 1px solid #eab099;
    border-radius: 0.375rem;
    font-size: 1rem;
`;

export const EmailTextArea = styled.textarea`
    padding: 0.75rem 1rem;
    border: 1px solid #eab099;
    border-radius: 0.375rem;
    font-size: 1rem;
    resize: vertical;
    min-height: 120px;
`;

export const EmailButton = styled.button`
  background-color: #047857;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #065f46;
  }
`;
