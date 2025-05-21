import styled from 'styled-components';

export const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    @media (max-width: 768px) {
        align-items: flex-start;
        padding: 0.5rem 1rem;
        gap: 0.5rem;
    }
`;

export const MenuBarImage = styled.img`
    width: 100px;
    object-fit: contain;
    margin-left: 1rem;
    border-radius: 1rem;

    @media (max-width: 768px) {
        order: 1;
        width: 80px;
        margin-left: 0;
    }
`;

export const MenuBarPhone = styled.div`
    background-color: #047857;
    color: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        font-size: 0.95rem;
    }

    @media (max-width: 768px) {
        order: 2;
        justify-content: center;
        padding: 0.5rem 1rem;
    }
`;

export const StyledNav = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        order: 3;
        justify-content: flex-start;
        margin: 1.3rem 0.5rem;
        width: 100%;
        gap: 0.75rem;
    }
`;

export const StyledLink = styled.a`
    color: #047857;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    width: 8rem;
    display: inline-block;
    text-align: center;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        color: #f97316;
    }

    @media (max-width: 768px) {
        width: auto;
        font-size: 0.95rem;
    }
`;

export const Dot = styled.div`
    width: 6px;
    height: 6px;
    background: #f97316;
    border-radius: 50%;
    position: absolute;
    bottom: -8px;
    transform: translateX(-50%);
    transition: left 0.3s ease, opacity 0.2s ease;
    pointer-events: none;
`;

export const MenuBarLogo = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    color: #047857;
    padding: 1rem 0;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem 0;
    }
`;
