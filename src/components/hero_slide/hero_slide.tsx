import React from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroHeading,
    HeroText,
    HeroButton,
    HeroImage,
    HeroWrapper
} from './hero_slide.styles';

type HeroSlideProps = {
    scrollToRef: React.RefObject<HTMLElement>;
};

export const HeroSlide: React.FC<HeroSlideProps> = ({ scrollToRef }) => {
    const handleScroll = () => {
        scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroContent>
                    <HeroHeading>Օնլայն վարկ՝ վայրկյանների ընթացքում</HeroHeading>
                    <HeroText>
                        Վարկ՝ արագ, պարզ ու վստահ։ Մեկ հպում, և գումարը ճանապարհին է։<br />
                        Credit Center-ը քո ֆինանսական վստահությունը հաստատում է։
                    </HeroText>
                    <HeroButton onClick={handleScroll}>Դիմել Հիմա</HeroButton>
                </HeroContent>
                {/*<HeroImage src="/background.png" alt="Վարկային նկարագրություն" />*/}
            </HeroWrapper>
        </HeroContainer>
    );
};
