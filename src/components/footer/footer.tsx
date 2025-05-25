import React from 'react';
import {
    FooterContainer,
    FooterInner,
    FooterText,
    FooterNote, PrivacyPolicyButton
} from './footer.styles';
import {EmailButton} from "../emails_section/emails_section.styles";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate()

    const handleNavigateToPrivacy = () => {
        navigate('/privacy_policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <FooterContainer>
            <FooterInner>
                <FooterText>© {new Date().getFullYear()} Credit Center</FooterText>
                <FooterNote>Ուշադրություն`
                    Ընկերությունը վարկեր չի տրամադրում, չի հանդիսանում վարկային կազմակերպություն, չի գովազդում և չի գովազդել վարկերի տրամադրման բնույթին վերաբերվող հայտարարություններ, ընդամենը տրամադրում է ֆինանսական խորհրդատվություն, մատուցում է ծառայություններ արագ վարկերի ստացման մասով, աջակցում է ընտրել ցածր տոկոսադրույքով արագ գումար, օգնում է Ձեզ գտնել միջոցներ, ստեղծված ֆինանսական խնդիրների լուծման համար։</FooterNote>
            </FooterInner>
            <PrivacyPolicyButton onClick={handleNavigateToPrivacy}>Privacy Policy</PrivacyPolicyButton>
        </FooterContainer>
    );
};
