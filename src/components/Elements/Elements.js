import styled from 'styled-components';





export const Container = styled.div`
    position: relative;
    background: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;


`;


export const TitleH1 = styled.h1`
text-transform: capitalize;
color: var(--text-black);
font-size: ${({ large }) => (large ? '48px' : '38px')};
text-align: center;

@media screen and (max-width:768px){
    font-size: 40px;

}

@media screen and (max-width:480px){
    font-size: 32px;
    
}


`;

export const TitleSpan = styled.span`
color: ${({ firstBlack }) => (firstBlack ? 'var(--text-black)' : 'var(--primary-color)')};

`;


export const P = styled.p`
color: var(--text-black);
font-size:24px;
text-align: center;
max-width: 600px; 


@media screen and (max-width:768px){
 font-size: 24px;

}

@media screen and (max-width:480px){
 font-size: 18px;
 
}

`;
