import styled from 'styled-components';
import { P } from '../Elements/Elements';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';





export const FeedbackContent = styled.div`

    max-width: 1200px;
    width: 100%;    
    position: relative;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;


`;


export const FeedbackP = styled(P)`

    margin: 24px 0;   

`;


export const SliderContainer = styled.div`

    width: 100%;  
    display: flex;
    flex-direction: column;



`;

export const SliderWrapper = styled.div`


    display: flex;
    width: 100%; 
    position: relative;

`;


export const SliderContentWrap = styled.div`

    overflow: hidden;
    width: 100%;
    border-bottom: 1px dashed var(--primary-color);

`;


export const SliderContent = styled.div`
    
    display: flex; 
    transition: all 250ms linear;
    margin-left: -10px;



    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */  

    &::-webkit-scrollbar {
        display: none; /* hide scrollbar in webkit browser */
    }
    & > * {
        width: 100%;    
        flex-shrink: 0;
        flex-grow: 1;
    }
`;


export const PrevButton = styled.span`

    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 1;
    bottom: 0;
    left: 0;
    transform: translateY(50%);    
    color: #fff;
    background: var(--text-black);    
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;   

    &:hover,&:focus{
        transition: all 0.3s;
        color: var(--text-black);
        background: #fff;
        box-shadow: inset 0 0 2px var(--primary-color),
        0 12px 24px rgba(0,0,0,0.5);
        transform: translateY(50%) scale(1.05);
    }
`;

export const NextButton = styled.span`

position: absolute;
z-index: 1;
bottom: 0;
right: 0;
height: 50px;
width: 50px;
transform: translateY(50%);    
color: #fff;
background: var(--text-black);    
cursor: pointer;
border-radius: 50%;
transition: all 0.3s;   

&:hover,&:focus{
    transition: all 0.3s;
    color: var(--text-black);
    background: #fff;
    box-shadow: inset 0 0 2px var(--primary-color),
    0 12px 24px rgba(0,0,0,0.5);
    transform: translateY(50%) scale(1.05);
}


`;

export const PrevIcon = styled(MdKeyboardArrowLeft)`

    font-size: 48px;


`;

export const NextIcon = styled(MdKeyboardArrowRight)`

    font-size: 48px;


`;




export const FeedbackCard = styled.div`
    position: relative;   
    padding: 60px 10px;
    
    




`;

export const CustomerAvatar = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 60px;
    height: 60px;
    top: 20px;
    left: 50px;
    overflow: hidden;
    &:after{
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        height: 80%;
        background: ${({ bgColor }) => (bgColor ? bgColor : 'var(--primary-color)')};
        z-index: 1;
        border-radius: 10px;
    }


`;

export const CustomerImg = styled.img`
    position: relative;
    width: 70%;
    object-fit: center;
    z-index:2;


`;

export const Feedback = styled.div`
    width: 100%; 
    height: 250px; 
    background: var(--card-bg-color); 
    padding: 30px 20px;
    display: flex;
    flex-direction: column;   


`;

export const Comment = styled.p`
    
    font-size: 1rem;
    color: var(--text-black);

    /* text-truncate */
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  

`;

export const CustomerRate = styled.div`

  
   display:flex;
   flex-direction: column;
   margin-top: auto;
    
`;

export const StarsWrap = styled.div`

   margin-bottom: 12px;

`;

export const CustomerName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-black);


    /* text-truncate */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

`;