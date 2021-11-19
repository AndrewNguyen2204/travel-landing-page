import React from 'react';
import { ContactBtn, ContactForm, ContactInput, ContactP, ContactTitle, Copyright, CopyrightText, FooterContact, FooterContainer, FooterContent, FooterContentWrap, FooterLinks, FooterLinksWrap, FooterLinkTitle,  FooterSocial, InnerLink, OuterLink, SocialLink, SocialLinks, SocialP } from './FooterElements';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaperPlane } from 'react-icons/io';
import WaterWave from '../WaterWave';
import Bubbles from '../Bubbles';
import Logo from '../Logo';

const Footer = ({
    id
}) => {
    return (
        <>
            <FooterContainer id={id}>

                <FooterContentWrap>

                    <FooterContent>
                        <FooterSocial>
                            <Logo to="home"/>
                               
                            <SocialP>
                                These are also used to ready computerized information for users in the hotel industry, making reservation and anouring.
                            </SocialP>
                            <SocialLinks>
                                <SocialLink>
                                    <FaTwitter />
                                </SocialLink>
                                <SocialLink>
                                    <FaFacebookF />
                                </SocialLink>
                                <SocialLink>
                                    <FaLinkedinIn />
                                </SocialLink>
                            </SocialLinks>

                        </FooterSocial>
                        <FooterLinksWrap>
                            <FooterLinks>
                                <FooterLinkTitle>
                                    Home
                                </FooterLinkTitle>
                                <InnerLink
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}

                                >about</InnerLink>
                                <InnerLink
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >services</InnerLink>
                                <InnerLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >contact</InnerLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>
                                    About
                                </FooterLinkTitle>
                                <OuterLink to="/">features</OuterLink>
                                <OuterLink to="/">resources</OuterLink>
                                <OuterLink to="/">news</OuterLink>
                                <OuterLink to="/">blog</OuterLink>
                            </FooterLinks>
                        </FooterLinksWrap>
                    </FooterContent>
                    <FooterContact>
                        <ContactTitle>get in touch</ContactTitle>
                        <ContactP>The affort of these objectives has been for all government departments.</ContactP>
                        <ContactForm id="contact">

                            <ContactInput placeholder="Press Email" type="text" />
                            <ContactBtn type="submit"><IoIosPaperPlane /></ContactBtn>
                        </ContactForm>

                    </FooterContact>

                </FooterContentWrap>

                <Copyright>
                    <CopyrightText>&copy; 2021 | All Rights Reserved</CopyrightText>
                    <CopyrightText>Pricacy Policy & Conditions</CopyrightText>
                </Copyright>

                <WaterWave primary />
                <Bubbles bgColor="var(--primary-color)" />
            </FooterContainer>
        </>
    )
}

export default Footer;
