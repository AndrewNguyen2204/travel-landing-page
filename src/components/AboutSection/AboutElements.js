import styled from 'styled-components';
import { P } from '../Elements/Elements';





export const AboutContent = styled.div`

    max-width: 1200px;
    width: 100%;    
    position: relative;
    padding: 60px 40px;
    display: flex;
    flex-wrap: wrap;
   

   

`;


export const AboutImgBox = styled.div`

    width: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width:768px) {
        width: 100%;
        margin-bottom: 30px;
    }



`;

export const ImgWrapper = styled.div`
    position: relative;
    width: 100%;    
    z-index:1;
    
    
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -5%;
        width: 80%;
        height:40%;
        border-radius: 50%;
        background: var(--secondary-color);
        z-index:0;



`;



export const Img = styled.img`
    position: relative;
    width: 100%;
    object-fit: center;  
   z-index:2;

`;

export const BackCircle = styled.div`

    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;   
    border: 1px dashed black;
    z-index:0;

    &:before{
        content: '';
        position: absolute;
        top:120px;
        left:-10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--icon-color);
    }

    &:after{
        content: '';
        position: absolute;
        top:0;
        left:60px;
        width: 40px;
        height: 40px;
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);        
        background: var(--primary-color);
        transform: rotate(75deg);
    }


`;

export const AboutTextBox = styled.div`

    width: 50%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px) {
    width: 100%;
    }



`;


export const AboutP = styled(P)`

    margin: 24px 0;   
    text-align: justify;

`;

export const AboutItems = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;


    @media screen and (max-width:480px) {
        grid-template-columns: repeat(1,1fr);
    }

`;

export const AboutItem = styled.div`

    width: 100%;
    display: flex;
    align-items: center;

`;


export const ItemIcon = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 1.5rem;
    color: var(--icon-color);
    margin: 0  20px;
`;

export const ItemText = styled.p`
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-black);
    flex:1;


`;