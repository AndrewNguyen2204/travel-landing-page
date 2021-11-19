import styled from 'styled-components';




export const WaveWrapper = styled.div`

    position: absolute;
    width: 100%;
    top: 0;
    left:0;   
    z-index: 999;

`;

export const WaveElement = styled.div`

    position: absolute;
    top: -90px;
    width: 100%;
    height: 100px;
    background: ${({primary}) => (primary ? 'url(./images/wave-orange.png)' : 'url(./images/wave.png)')};
    background-size: 1000px 100px;

    opacity: ${({opacity}) => (opacity? opacity : '1' )};
    bottom:${({bottom}) => (bottom? bottom : '0' )};
    animation-name: animateWave;
    animation-duration: ${({duration}) => (duration? duration : '4' )}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${({delay}) => (delay? delay : '0' )}ms;
    animation-direction:  ${({reverse }) => (reverse ? 'reverse' : 'normal' )};

    @keyframes animateWave {
        0%{
            background-position-x: 1000px;
        }
        100%{
            background-position-x: 0px;
        }
    }

`;