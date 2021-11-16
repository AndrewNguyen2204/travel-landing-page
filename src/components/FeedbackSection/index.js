import React, { useEffect, useState } from 'react';
import {  StarHalfIcon, StarIcon } from '../DestinationsSection/DestinationsElements';
import { Container } from '../Elements/Elements';
import SectionTitle from '../Elements/SectionTitle';
import { Comment, CustomerAvatar, CustomerImg, CustomerName, Feedback, FeedbackCard, FeedbackContent, FeedbackP, NextButton, NextIcon, PrevButton, PrevIcon, SliderContainer, SliderContent, SliderContentWrap, SliderWrapper,CustomerRate } from './FeedbackElements';


const DEFAULT_SHOW = 3;

const FeedbackSection = ({
    id,
    title,
    description,
    cards
}) => {



    const renderCards = () => {
        return cards.map(({
            id,
            imgSrc,
            imgAlt,
            comment,
            userName,
            bgColor
        }) => {

            return (

                <FeedbackCard key={id}>
                    <CustomerAvatar bgColor={bgColor}>
                        <CustomerImg src={imgSrc} alt={imgAlt} />
                    </CustomerAvatar>
                    <Feedback>
                        <Comment>{comment}</Comment>
                        <CustomerRate>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </CustomerRate>
                        <CustomerName>{userName}</CustomerName>
                    </Feedback>
                </FeedbackCard>
            )
        })
    }


    return (
        <>
            <Container id={id}>

                <FeedbackContent>
                    <SectionTitle title={title} />
                    <FeedbackP>{description}</FeedbackP>

                    <Slider>
                        {renderCards()}
                    </Slider>

                </FeedbackContent>

            </Container>
        </>
    )
}

export default FeedbackSection;



function Slider({
    children
}) {


    /**  useState */

    const [show, setShow] = useState(DEFAULT_SHOW);

    const [currentIndex, setCurrentIndex] = useState(0);

    // add handler for onTouchStart

    const [touchPosition, setTouchPosition] = useState(null);

    const [length, setLength] = useState(children.length);

    /** useEffect */

    useEffect(() => {

        responsiveSlide();

        setLength(children.length);
        

    }, [children])

    /** Callback function */
    // handle next button
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + show)
        }
    }
    // handle prev button
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - show)
        }
    }

    // handle onTouchStart
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    // handle onTouchMove
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;

        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null);
    }

    const responsiveSlide = () => {

        let width = window.innerWidth;

       

        if (width <= 480) {

            setShow(1)

        } else if (width <= 768) {
            setShow(2)
        } else {
            setShow(3)
        }

    }


    window.addEventListener('resize', responsiveSlide);


    return (
        <SliderContainer>

            <SliderWrapper>

                <PrevButton onClick={prev}>
                    <PrevIcon />
                </PrevButton>

                <NextButton onClick={next}>
                    <NextIcon />
                </NextButton>

                <SliderContentWrap onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <SliderContent style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${(1 / show) * 100}%` }}>
                        {children}

                    </SliderContent>
                </SliderContentWrap>

            </SliderWrapper>
        </SliderContainer>
    )
}
