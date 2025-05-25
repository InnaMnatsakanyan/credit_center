import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #047857;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterInner = styled.div`
    text-align: center;
    max-width: 700px;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const FooterNote = styled.p`
  color: #d1fae5;
  font-size: 0.875rem;
`;

export const PrivacyPolicyButton = styled.button`
  background-color: #047857;
  color: #f97316;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #065f46;
  }
`;