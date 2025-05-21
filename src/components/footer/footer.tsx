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
                <FooterNote>Ստեղծված՝ վստահության և արագության վրա հիմնված ֆինանսական լուծումների համար։</FooterNote>
            </FooterInner>
        </FooterContainer>
    );
};
