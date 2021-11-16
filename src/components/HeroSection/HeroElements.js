import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { P, Container } from '../Elements/Elements';

export const HeroContainer = styled(Container)`
    
    height: 800px;
    position: relative;
    z-index: 1;



`;


export const HeroBg = styled.div`

    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


`;

export const VideoBg = styled.video`
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: 1;

`;


export const MaskBg = styled.img`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    mix-blend-mode: screen;
    z-index: 2;

`;

export const HeroContent = styled.div`
    
    max-width: 1200px;
    position: relative;
    z-index: 3;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255,0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 30px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
`;


export const HeroP = styled(P)`
   margin-top: 24px;   

}

`;


export const HeroBtnWrapper = styled.div`

    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;


`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`

margin-left: 8px;
font-size: 20px;
`;