import styled from 'styled-components';
import { MdArrowRightAlt,MdKeyboardArrowUp, MdStar, MdStarHalf } from 'react-icons/md';
import { P } from '../Elements/Elements';



export const DestinationsContent = styled.div`

    max-width: 1200px;
    width: 100%;    
    position: relative;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const DestinationsP = styled(P)`

    margin: 24px 0;   

`;

export const DestinationsCards = styled.div`

    width: 100%;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    transition: all 0.3s ease-in-out;


   

    @media screen and (max-width:768px){
    grid-template-columns: repeat(2,1fr);

    }

    @media screen and (max-width:480px){
    grid-template-columns: repeat(1,1fr);

    }

    &.active {
        animation: fadeIn 0.5s linear;
    }
   

    @keyframes fadeIn {
        0% {
            opacity: 0;
           transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
   

`;

export const DestinationsCard = styled.div`

    background: var(--card-bg-color);
    border-radius: 15px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 24px rgba(0,0,0,0.5);
        transform: scale(1.05);
    }

`;

export const CardImgTop = styled.img`

    width: 100%;
    height: 200px;
    border-radius: inherit;
    flex-shrink: 0;
    oject-fit: center;


`;


export const CardContent = styled.div`

    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
   

`;

export const CardText = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 12px 0;


`;

export const CardH2 = styled.h2`

    font-size: 1.2rem;
    text-transform: capitalize;


    /* text-truncate */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const CardP = styled.p`

    font-size: 1rem;
    margin-top: 12px;
    text-transform: capitalize;
    /* text-truncate */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const CardBottom = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: auto;

`;

export const PriceTag = styled.small`

    color: #908376;
`;

export const RatingTag = styled.div`

    display:flex;
    align-items: center;
    justify-content: space-between;

`;

export const RatingStar = styled.span`

    color: black;

`;

export const DetailBtnWrap = styled.div`

    display: flex;

`;

export const DetailBtn = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    outline: none;
    background: var(--text-black);
    color: var(--text-white);
    cursor:pointer;
    transition: all 0.3s ease-in-out;


    &:hover,&:focus {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 6px 12px rgba(0,0,0,0.5);
        transform: scale(1.05);
    }

`;


export const ArrowRightIcon = styled(MdArrowRightAlt)`

    font-size: 24px;


`;


export const DestinationsBtnWrap = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

`;

export const ArrowUpIcon = styled(MdKeyboardArrowUp)`

    font-size: 24px;


`;

export const StarIcon = styled(MdStar)`

    color: var(--primary-color);
    font-size: 24px;


`;

export const StarHalfIcon = styled(MdStarHalf)`

    color: var(--primary-color);
    font-size: 24px;


`;