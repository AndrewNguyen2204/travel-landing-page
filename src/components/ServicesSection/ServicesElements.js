import styled from 'styled-components';
import { P } from '../Elements/Elements';
import { IoBedOutline,IoAirplaneOutline, IoCarOutline,IoTrainOutline} from 'react-icons/io5';




export const ServicesContent = styled.div`
    max-width: 1200px;
    width: 100%;    
    position: relative;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const ServicesP = styled(P)`

   margin: 24px 0;   


`;

export const ServicesCards = styled.div`

    width: 100%;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    
    
@media screen and (max-width:768px){
    grid-template-columns: repeat(2,1fr);
   
   }
   
   @media screen and (max-width:480px){
    grid-template-columns: repeat(1,1fr);
    
   }

`;


export const ServicesCard = styled.div`

   
    background: var(--card-bg-color);
    border-radius: 15px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 0 24px rgba(0,0,0,0.5);
    }

`;

export const CardIconTop = styled.div`
    
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 32px;
   position: relative;
   z-index:0;
   
    &::before{
        content:'';
        width: 2em;
        height: 2em;        
        border-radius: 50%;
        border: 1px solid black;
        position: absolute;
        top: -0.8em;
        left:-0.8em;
        z-index:1;        
    }
    &::after{
        content:'';
        width: 1.8em;
        height: 1.8em;        
        border-radius: 50%;       
        position: absolute;
        top: -0.4em;
        left:-0.4em;
        z-index:2;
        background: var(--icon-color);
    }

`;



export const HotelIcon = styled(IoBedOutline)`
    color: var(--text-black);
    font-size: 2em;
    position: relative;
    z-index:3;

`;
export const FlightIcon = styled(IoAirplaneOutline)`
    color: var(--text-black);
    font-size: 2em;
    position: relative;
    z-index:3;

`;
export const TaxiIcon = styled(IoCarOutline)`
    color: var(--text-black);
    font-size: 2em;
    position: relative;
    z-index:3;

`;
export const TrainIcon = styled(IoTrainOutline)`
    color: var(--text-black);
    font-size: 2em;
    position: relative;
    z-index:3;

`;

export const CardText = styled.p`
    font-size: 24px;
    font-weight: semi-bold;
    text-transform: capitalize;
    text-align: center;
    color: var(--text-black);

   

`;


