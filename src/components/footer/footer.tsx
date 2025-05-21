import React from 'react';
import {
    FooterContainer,
    FooterInner,
    FooterText,
    FooterNote
} from './footer.styles';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterText>© {new Date().getFullYear()} Credit Center</FooterText>
                <FooterNote>Ուշադրություն
                    Ընկերությունը վարկեր չի տրամադրում, չի հանդիսանում վարկային կազմակերպություն, չի գովազդում և չի գովազդել վարկերի տրամադրման բնույթին վերաբերվող հայտարարություններ, ընդամենը տրամադրում է ֆինանսական խորհրդատվություն, մատուցում է ծառայություններ արագ վարկերի ստացման մասով, աջակցում է ընտրել ցածր տոկոսադրույքով արագ գումար, օգնում է Ձեզ գտնել միջոցներ, ստեղծված ֆինանսական խնդիրների լուծման համար։</FooterNote>
            </FooterInner>
        </FooterContainer>
    );
};
