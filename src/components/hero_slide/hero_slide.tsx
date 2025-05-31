import React from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroHeading,
    HeroText,
    HeroButton,
    HeroWrapper
} from './hero_slide.styles';
import { useTranslate } from '../../context/useTranslate';

type HeroSlideProps = {
    scrollToRef: React.RefObject<HTMLElement>;
};

export const HeroSlide: React.FC<HeroSlideProps> = ({ scrollToRef }) => {
    const t = useTranslate();

    const handleScroll = () => {
        scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroContent>
                    <HeroHeading>{t('hero_heading')}</HeroHeading>
                    <HeroText>
                        {t('hero_text').split('\n').map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </HeroText>
                    <HeroButton onClick={handleScroll}>{t('hero_button')}</HeroButton>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
    );
};
