import React, { useState } from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroP, MaskBg, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';
import Mask from '../../images/mask.jpg';
import { LinkButton } from '../Button/ButtonElements';
import SectionTitle from '../Elements/SectionTitle';



const HeroSection = ({
    id,
    title,
    description,
    buttonLabel
}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id={id}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                <MaskBg src={Mask} alt="mask" />
            </HeroBg>
            <HeroContent>
                <SectionTitle title={title} large />

                <HeroP>
                    {description}
                </HeroP>
                <HeroBtnWrapper>
                    <LinkButton
                        to="booking"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                    </LinkButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
