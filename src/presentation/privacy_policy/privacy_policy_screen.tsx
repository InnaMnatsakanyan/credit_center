import React from 'react';
import { Footer } from '../../components/footer/footer';
import { MenuBar } from '../../components/menu_bar/menu_bar';
import {PrivacyContainer, SectionTitle} from './privacy_policy_screen.styles';

export const PrivacyPolicyScreen = () => {
    return (
        <>
            <MenuBar sectionRefs={[]} />
            <PrivacyContainer>
                <h1>Գաղտնիության Քաղաքականություն / Privacy Policy</h1>
                <p><strong>Ակտիվացման ամսաթիվ / Effective Date:</strong> 2025թ․ մայիսի 25 / May 25, 2025</p>

                <SectionTitle>Հայերեն տարբերակ</SectionTitle>
                <p>Մենք գնահատում ենք Ձեր գաղտնիությունը։ Այս էջում նշված է, թե ինչ տվյալներ ենք մենք հավաքում, ինչու ենք հավաքում, և ինչպես ենք դրանք օգտագործում։</p>
                <p><strong>Հավաքվող տվյալները․</strong> անուն, ազգանուն, հեռախոսահամար։</p>
                <p><strong>Օգտագործումը․</strong> Ձեզ հետ կապ հաստատել վարկային հարցումների վերաբերյալ։</p>
                <p><strong>Պաշտպանություն․</strong> օգտագործում ենք անվտանգ միջոցներ, սակայն ոչինչ 100% երաշխավորված չէ։</p>
                <p><strong>Տարածում․</strong> չենք վաճառում կամ փոխանցում տվյալներ երրորդ կողմերին առանց անհրաժեշտության։</p>
                <p><strong>Իրավունքներ․</strong> կարող եք դիմել՝ մուտք, խմբագրում կամ ջնջում խնդրելով։</p>
                <p><strong>Հարցերի դեպքում կապ․</strong> creditcenter.arm@gmail.com</p>

                <SectionTitle>English Version</SectionTitle>
                <p>We value your privacy. This page explains what information we collect on this site, why we collect it, and how we use it.</p>
                <p><strong>What we collect:</strong> name, surname, and phone number.</p>
                <p><strong>Why we collect it:</strong> to contact you regarding loan-related inquiries.</p>
                <p><strong>Security:</strong> we use secure methods, though nothing online is 100% guaranteed.</p>
                <p><strong>Data sharing:</strong> we do not sell or share your data unnecessarily.</p>
                <p><strong>Your rights:</strong> you may request access, edits, or deletion of your data.</p>
                <p><strong>Questions:</strong> contact us at creditcenter.arm@gmail.com</p>
            </PrivacyContainer>
            <Footer />
        </>
    );
};
