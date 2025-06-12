import React, { useState, useRef } from 'react';
import {
    MenuBarContainer,
    MenuBarLogo,
    StyledNav,
    StyledLink,
    Dot,
    MenuBarPhone,
    MenuBarImage, LanguageOption, LanguageSelect
} from './menu_bar.styles';
import {useNavigate} from "react-router-dom";
import {useLanguage} from "../../context/LanguageContext";
import {useTranslate} from "../../context/useTranslate";

type MenuBarProps = {
    sectionRefs: React.RefObject<HTMLElement>[];
};

export const MenuBar: React.FC<MenuBarProps> = ({ sectionRefs }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [dotPosition, setDotPosition] = useState<number | null>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const { language, setLanguage } = useLanguage();
    const t = useTranslate();

    const links = [t('nav_home'), t('nav_why'), t('nav_calculator'), t('nav_about'), t('nav_email')];

    const handleNavigateToPrivacy = () => {
        window.location.href = '/';
    };
    const handleMouseEnter = (index: number) => {
        const linkWidth = 128;
        const gap = 16;
        const left = index * (linkWidth + gap) + linkWidth / 2;
        setDotPosition(left);
    };

    const handleMouseLeave = () => {
        setDotPosition(null);
    };


    const handleClick = (index: number) => {
        const currentPath = location.pathname;
        const sectionRef = sectionRefs[index];

        if (currentPath === '/') {
            sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            sessionStorage.setItem('scrollTargetIndex', index.toString());
            navigate('/');
        }
    };

    return (
        <MenuBarContainer>
            <MenuBarImage onClick={handleNavigateToPrivacy} src={'/logo.jpg'}/>
            <StyledNav ref={navRef} onMouseLeave={handleMouseLeave}>
                {links.map((text, idx) => (
                    <StyledLink
                        key={idx}
                        href="#"
                        ref={(el) => (linkRefs.current[idx] = el)}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick(idx);
                        }}
                    >
                        {text}
                    </StyledLink>
                ))}
                <Dot style={{left: dotPosition ?? 0, opacity: dotPosition !== null ? 1 : 0}}/>
            </StyledNav>
            <LanguageSelect value={language} onChange={(e) => setLanguage(e.target.value)}>
                <LanguageOption value="arm">ARM</LanguageOption>
                <LanguageOption value="rus">RU</LanguageOption>
                <LanguageOption value="eng">EN</LanguageOption>
            </LanguageSelect>
            <MenuBarPhone>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <g stroke="#fff" strokeLinecap="round" strokeWidth="1.5">
                        <path
                            d="M14 2s2.2.2 5 3 3 5 3 5M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14.156 14.156 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382"/>
                    </g>
                </svg>
                <span>+374 93 80 49 09</span>
            </MenuBarPhone>
        </MenuBarContainer>
    );
};