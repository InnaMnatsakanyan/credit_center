import React from 'react';
import {
    FooterContainer,
    FooterInner,
    FooterText,
    FooterNote,
    PrivacyPolicyButton,
    ContactSection,
    LogoImage
} from './footer.styles';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '../../context/useTranslate';

export const Footer = () => {
    const navigate = useNavigate();
    const t = useTranslate();

    const handleNavigateToPrivacy = () => {
        navigate('/privacy_policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigateToTerms = () => {
        navigate('/terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FooterContainer>
            <FooterInner>
                <LogoImage src="/logo.jpg" alt="Credit Center Logo" />

                <ContactSection>
                    <h2>CREDIT CENTER / Կրեդիտ Սենթր</h2>
                    <p><strong>Email:</strong> creditcenter.arm@gmail.com</p>
                    <p><strong>Phone:</strong> +374 93 80 49 09</p>
                    <p><strong>Address:</strong> Proshyan 22, Yerevan, Armenia</p>
                </ContactSection>

                <FooterText>© {new Date().getFullYear()} Credit Center</FooterText>

                <PrivacyPolicyButton onClick={handleNavigateToPrivacy}>
                    {t('footer_privacy')}
                </PrivacyPolicyButton>
                <PrivacyPolicyButton onClick={handleNavigateToTerms}>
                    {t('footer_terms')}
                </PrivacyPolicyButton>

                <FooterNote>{t('footer_note')}</FooterNote>
            </FooterInner>
        </FooterContainer>
    );
};
