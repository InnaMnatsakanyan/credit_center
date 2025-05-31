import React from 'react';
import {
    AboutContainer,
    AboutTitle,
    AboutWrapper,
    AboutCard,
    AboutText
} from './about_us.styles';
import { useTranslate } from '../../context/useTranslate';

export const AboutUs = React.forwardRef<HTMLDivElement>((_, ref) => {
    const t = useTranslate();

    return (
        <AboutContainer ref={ref}>
            <AboutTitle>{t('about_title')}</AboutTitle>
            <AboutWrapper>
                <AboutCard>
                    <AboutText>{t('about_text_1')}</AboutText>
                </AboutCard>
                <AboutCard>
                    <AboutText>{t('about_text_2')}</AboutText>
                </AboutCard>
            </AboutWrapper>
        </AboutContainer>
    );
});
