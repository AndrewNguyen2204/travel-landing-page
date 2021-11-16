import styled from 'styled-components';
import Blob from './Blob';



export const BubblesWrapper = styled.div`

            position: absolute;
            top:0;
            left:0;
            right:0;
            height:1rem;
            background: ${({ bgColor }) => (bgColor ? bgColor : '#34a4e8')};
            filter:url("#blob");


`;


export const Bubble = styled.div`
    
    position: absolute;
    left:var(--position, 50%);
    background: ${({ bgColor }) => (bgColor ? bgColor : '#34a4e8')};
    border-radius:100%;
    animation:bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
    bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform:translate(-50%, 100%);

    @keyframes bubble-size {
        0%, 75% {
            width:var(--size, 4rem);
            height:var(--size, 4rem);
        }
        100% {
            width:0rem;
            height:0rem;
        }
    }
    @keyframes bubble-move {
        0% {
            bottom:-4rem;
        }
        100% {
            bottom:var(--distance, 10rem);
        }
    }

`;


export const BlobSVG = styled(Blob)`

    position:fixed; 
    top:100vh;

`;