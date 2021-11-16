import React from 'react';
import { Container } from '../Elements/Elements';

const Footer = () => {
    return (
        <>
            < Container id={id}>

                <FooterContentWrap>

                    <FooterContent>
                        <FooterSocial>

                        </FooterSocial>
                        <FooterLinks>
                            <InnerLinks>
                                <InnerLink />
                                <InnerLink />
                                <InnerLink />
                                <InnerLink />
                            </InnerLinks>
                            <OuterLinks>
                                <OuterLink />
                                <OuterLink />
                                <OuterLink />
                                <OuterLink />
                                <OuterLink />
                            </OuterLinks>
                        </FooterLinks>
                    </FooterContent>
                    <FooterContact>
                        <Heading/>
                        <FooterP/>
                        <ContactForm>
                            <ContactLabel/>
                            <ContactInput/>
                            <ContactBtn/>
                        </ContactForm>

                    </FooterContact>

                </FooterContent>

            <Copyright>
                <CopyrightText>Copyright &copy; 2021 | All Rights Reserved</CopyrightText>
                <CopyrightText>Pricacy Policy & Conditions</CopyrightText>
            </Copyright>

            </Container>
        </>
    )
}

export default Footer;
