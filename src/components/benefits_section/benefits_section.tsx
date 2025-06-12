import React from 'react';
import {
    BenefitsWrapper,
    BenefitsContent,
    BenefitsContainer,
    BenefitsTitle,
    BenefitsDescription,
    NumberedBenefit,
    BenefitNumber,
    BenefitText,
    BenefitsImage,
    BenefitsFlexRow
} from './benefits_section.styles';
import { useTranslate } from '../../context/useTranslate';

export const BenefitsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const t = useTranslate();
    const benefitsRaw: string[] = t('benefits_list');
    const benefits = Array.isArray(benefitsRaw) ? benefitsRaw : [];

    return (
        <BenefitsWrapper ref={ref}>
            <BenefitsContent>
                <BenefitsTitle>{t('benefits_title')}</BenefitsTitle>
                <BenefitsFlexRow>
                    <BenefitsDescription>
                        {benefits.map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </BenefitsDescription>
                    <BenefitsImage src="/whyus.jpg" alt="Why Us?" />
                </BenefitsFlexRow>
            </BenefitsContent>

            <BenefitsContainer>
                {benefits.map((text, idx) => (
                    <NumberedBenefit key={idx}>
                        <BenefitNumber>{idx + 1}</BenefitNumber>
                        <BenefitText>{text}</BenefitText>
                    </NumberedBenefit>
                ))}
            </BenefitsContainer>
        </BenefitsWrapper>
    );
});
