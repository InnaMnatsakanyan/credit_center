import React from 'react';
import { Footer } from '../../components/footer/footer';
import { MenuBar } from '../../components/menu_bar/menu_bar';
import styled from 'styled-components';

const TermsContainer = styled.div`
    padding: 80px 20px 40px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    line-height: 1.7;
    color: #222;
`;

const SectionTitle = styled.h2`
    margin-top: 40px;
`;

export const TermsConditionsScreen = () => {
    return (
        <>
            <MenuBar sectionRefs={[]} />
            <TermsContainer>
                <h1>Օգտման Պայմաններ / Terms & Conditions</h1>
                <p><strong>Վերջին թարմացում՝</strong> 2025թ․ մայիսի 25 / May 25, 2025</p>

                <SectionTitle>Հայերեն տարբերակ</SectionTitle>
                <p>Այս կայքը նախատեսված է տեղեկություն տրամադրելու համար վարկային ծառայությունների վերաբերյալ։ Կայքի օգտագործումը նշանակում է, որ համաձայնում եք ներկա պայմաններին։</p>
                <p>Տրամադրված տվյալները ենթակա են փոփոխության առանց նախազգուշացման։ Մենք չենք երաշխավորում որևէ ֆինանսական արդյունք։</p>
                <p>Օգտատերը պարտավոր է տրամադրել ճշգրիտ տեղեկատվություն։ Կայքի կողմից հավաքված տվյալները կարգավորվում են Գաղտնիության Քաղաքականությամբ։</p>

                <SectionTitle>English Version</SectionTitle>
                <p>This website provides information about loan services. By using the site, you agree to these terms.</p>
                <p>All content is subject to change without notice. We do not guarantee financial outcomes of any kind.</p>
                <p>You are responsible for providing accurate information. Any data you submit is handled according to our Privacy Policy.</p>

                <p style={{ marginTop: '40px' }}>
                    For questions, contact us at <strong>creditcenter.arm@gmail.com</strong>
                </p>
            </TermsContainer>
            <Footer />
        </>
    );
};
