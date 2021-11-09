import React, { useState } from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, MaskBg, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';
import Mask from '../../images/mask.jpg';
import { Button } from '../ButtonElements';



const HomeSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                <MaskBg src={Mask} alt="mask" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Book the Best Things of Nature and Creators</HeroH1>
                <HeroP>
                    Modern thing typically also allow users to book hotel rooms, rental cars, airline tickets as well as other activities and tours.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary
                    dark
                    >
                        Book Now {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HomeSection;
