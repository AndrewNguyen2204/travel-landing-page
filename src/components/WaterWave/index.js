import React from 'react';
import { WaveElement, WaveWrapper } from './WaveElements';



const WaterWave = ({
    primary
}) => {

  
    return (
        <WaveWrapper>
            <WaveElement primary={primary? true : false}/>
            <WaveElement 
            primary={primary? true : false}
            opacity="0.5"
            bottom="10px"
            reverse
            />
             <WaveElement 
            primary={primary? true : false}
            opacity="0.2"
            bottom="15px"
            delay="500"
            duration='3'
            />
             <WaveElement 
            primary={primary? true : false}
            opacity="0.7"
            bottom="20px"           
            duration='3'
           
            />
            
        </WaveWrapper>
    )
}

export default WaterWave;
