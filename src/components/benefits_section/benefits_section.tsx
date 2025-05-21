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

const benefits = [
    'Արագ հաստատում',
    'Բարենպաստ տոկոսադրույք',
    'Պարզ պայմաններ',
    'Օնլայն դիմում՝ ցանկացած պահի',
    'Վստահելի գործընկեր'
];

export const BenefitsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <BenefitsWrapper ref={ref}>
            <BenefitsContent>
                <BenefitsTitle>Ինչու Credit Center?</BenefitsTitle>
                <BenefitsFlexRow>
                    <BenefitsDescription>
                        Մենք տրամադրում ենք վարկեր, որոնք արագ են, պարզ, և հարմարեցված Ձեր կարիքներին։<br />
                        Անհրաժեշտ չէ ժամեր անցկացնել հերթերում կամ երկար ձևաթղթեր լրացնել։
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