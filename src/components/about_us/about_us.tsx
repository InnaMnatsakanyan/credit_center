import React from 'react';
import {
    AboutContainer,
    AboutTitle,
    AboutWrapper,
    AboutCard,
    AboutText
} from './about_us.styles';

export const AboutUs = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <AboutContainer ref={ref}>
            <AboutTitle>Մեր Մասին</AboutTitle>
            <AboutWrapper>
                <AboutCard>
                    <AboutText>
                        Մենք տրամադրում ենք վարկային լուծումներ, որոնք հարմարեցված են թե՛ ֆիզիկական անձանց, թե՛ բիզնեսների կարիքներին։ Վարկային գործընթացը պարզեցված է՝ առանց բարդ ընթացակարգերի։
                    </AboutText>
                </AboutCard>
                <AboutCard>
                    <AboutText>
                        Credit Center-ը հիմնված է վստահության, արագության և հասանելիության վրա։ Մեր նպատակն է լինել ձեր ֆինանսական կայունության հուսալի գործընկերը։
                    </AboutText>
                </AboutCard>
            </AboutWrapper>
        </AboutContainer>
    );
});