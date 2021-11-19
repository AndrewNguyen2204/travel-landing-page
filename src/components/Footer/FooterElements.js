import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';




export const FooterContainer = styled.footer`

position: relative;
background: var(--primary-color);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
margin-top: 60px;
z-index:1;
@media screen and (max-width: 768px) {

    flex-direction: column;
}

`;

export const FooterContentWrap = styled.div`

    max-width: 1200px;
    width: 100%;    
    position: relative;
    padding: 60px 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 2;
    @media screen and (max-width: 768px) {

        flex-direction: column;
    }
    @media screen and (max-width: 480px) {
       
        padding: 30px 30px;
    }



`;

// Footer Left-Content

export const FooterContent = styled.div`

    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    -webkit-order:1;
    order: 1;

    @media screen and (max-width: 768px) {
        width: 100%;
        -webkit-order: 2;
        order: 2;
    }
    @media screen and (max-width: 480px) {
       
        flex-direction: column;
    }


`;

export const FooterSocial = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    

    @media screen and (max-width: 480px) {
        width: 100%;
        align-items: center;
       
     }

`;




export const SocialP = styled.p`
    font-size: 1 rem;
    color: var(--text-black);
    text-align: justify;
    margin-top: 24px;
    margin-bottom: 30px;
    max-width: 250px;

    @media screen and (max-width: 480px) {
         text-align: center;
       
     }

`;

export const SocialLinks = styled.div`

    width: 100%;
    display: flex;
    @media screen and (max-width: 480px) {
        justify-content: center;
     }
`;


export const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-decoration: none;    
    background: var(--text-black);
    color: var(--text-white);
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover, &:focus {
        transition: all 0.3s ease-in-out;
        background: var(--text-white);
        color: var(--text-black);
        box-shadow: inset 0 0 2px var(--primary-color),
        0 12px 24px rgba(0,0,0,0.5);

    }
    & > * {
        font-size: 1rem;

    }

`;


export const FooterLinksWrap = styled.div`

    width: 50%;
    display: flex;    
    align-items: flex-start;
    justify-content: space-around;   
   
    @media screen and (max-width: 480px) {
        width: 100%;       
        padding-left: 0px;
        margin-top: 24px;
     }

`;

export const FooterLinks = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin: 1rem;


`;

export const FooterLinkTitle = styled.h4`

    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--text-black);
`;

export const InnerLink = styled(LinkS)`

    text-decoration: none;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--text-black);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover, &:focus {
        color: var(--text-white);
    }

`;


export const OuterLink = styled(LinkR)`

    text-decoration: none;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--text-black);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover, &:focus {
        color: var(--text-white);
    }

`;



// Footer Right-Content


export const FooterContact = styled.div`


    width: 20%;
    display: flex;
    flex-direction: column;   
    align-items: flex-start;
    margin-top: 1rem;
    -webkit-order: 2;
    order: 2;
   

    @media screen and (max-width: 768px) {
        width: 100%;
        -webkit-order: 1;
        order: 1;
        border-bottom: 1px dashed black;
        padding-bottom: 30px;
        margin-bottom: 30px;
    }
    


`;


export const ContactTitle = styled.h4`
width: 100%;
font-size: 1rem;
font-weight: bold;
text-transform: capitalize;
margin-bottom: 1rem;
color: var(--text-black);


@media screen and (max-width: 768px) {
    
    text-align: center;
  
}

`;

export const ContactP = styled.p`

    font-size: 1 rem;
    color: var(--text-black);
    text-align: justify;    
    margin-bottom: 30px;
   

    @media screen and (max-width: 768px) {
         text-align: center;
       
     }


`;


export const ContactForm = styled.form`
     position: relative;
     width: 100%;

`;


export const ContactInput = styled.input`

     width: 100%;
     border: 1px solid black;
     outline: none;
     padding: 12px 24px;
     font-size: 1rem;
     border-radius: 5px;
     &::placeholder{
         color: var(--text-black);
     }
     &:focus {
        outline: none;
     }


`;

export const ContactBtn = styled.button`
     position: absolute;
     top: 50%;
     right: 5px;
     transform: translateY(-50%);
    font-size: 1.5rem;
     color: var(--text-black);
     background: transparent;
     border: none;
     outline: none;
     cursor: pointer;
    

`;


// Copyright

export const Copyright = styled.div`
     width: 100%;
     max-width: 1200px;
     padding: 30px 40px;
     display: flex;
     justify-content: space-between;
     align-item: flex-end;

     
    @media screen and (max-width: 480px) {
       flex-direction: column;
       justify-content: center;
       align-items: center;
      
    }

`;

export const CopyrightText = styled.small`
     color: var(--text-black);
     font-weight: bold;

`;