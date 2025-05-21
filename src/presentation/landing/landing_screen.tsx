import React, {useRef} from 'react';
import { MenuBar } from '../../components/menu_bar/menu_bar';
import { HeroSlide } from '../../components/hero_slide/hero_slide';
import { BenefitsSection } from '../../components/benefits_section/benefits_section';
import { LoanCalculator } from '../../components/loan_calculator/loan_calculator';
import { EmailSection } from '../../components/emails_section/emails_section';
import { AboutUs } from '../../components/about_us/about_us';
import { Footer } from '../../components/footer/footer';
import { LandingScreenContainer } from './landing_screen.styles';

export const LandingScreen = () => {
    const heroRef = useRef<HTMLElement>(null);
    const benefitsRef = useRef<HTMLElement>(null);
    const calculatorRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const emailRef = useRef<HTMLElement>(null);

    return (
        <LandingScreenContainer>
            <MenuBar sectionRefs={[heroRef, benefitsRef, calculatorRef, aboutRef, emailRef]} />
            <HeroSlide scrollToRef={emailRef}/>
            <BenefitsSection ref={benefitsRef} />
            <LoanCalculator ref={calculatorRef} />
            <EmailSection ref={emailRef} />
            <AboutUs ref={aboutRef} />
            <Footer />
        </LandingScreenContainer>
    );
};