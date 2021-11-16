import React, { useState } from 'react'
import { Button } from '../Button/ButtonElements';
import { Container } from '../Elements/Elements';
import SectionTitle from '../Elements/SectionTitle';
import { ArrowRightIcon, ArrowUpIcon, CardBottom, CardContent, CardH2, CardImgTop, CardP, CardText, DestinationsBtnWrap, DestinationsCard, DestinationsCards, DestinationsContent, DestinationsP, DetailBtn, DetailBtnWrap, PriceTag, RatingStar, RatingTag, StarHalfIcon, StarIcon } from './DestinationsElements';

const MAX_SHOW = 4;

const DestinationsSection = ({

    id,
    title,
    description,
    cards,
    btnLabel

}) => {

  

    const [visible, setVisible] = useState(false);
   
    const toggleVisible = () => {
        setVisible(!visible);
    }


    const defaultItems = cards.slice(0, MAX_SHOW);

    const restItems = cards.slice(MAX_SHOW, cards.length);

    const renderCards = (list) => {
        return list.map(({
            id,
            imgSrc,
            imgAlt,
            tourName,
            desc,
            rating,
            price
        }) => {
            return (
                <DestinationsCard key={id}>
                    <CardImgTop src={imgSrc} alt={imgAlt} />

                    <CardContent>
                        <CardText>
                            <CardH2>{tourName}</CardH2>
                            <CardP>{desc}</CardP>
                        </CardText>
                        <CardBottom>
                            <PriceTag>{price}</PriceTag>
                            <RatingTag>
                                <RatingStar>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarHalfIcon/>
                                </RatingStar>
                                <DetailBtnWrap>
                                    <DetailBtn>
                                        <ArrowRightIcon />
                                    </DetailBtn>
                                </DetailBtnWrap>
                            </RatingTag>
                        </CardBottom>
                    </CardContent>
                </DestinationsCard>


            )
        })
    }


    return (
        <>
            <Container id={id}>
                <DestinationsContent>
                    <SectionTitle title={title} large />
                    <DestinationsP>{description}</DestinationsP>
                    <DestinationsCards>
                        {renderCards(defaultItems)}


                    </DestinationsCards>
                    <DestinationsCards className={visible? 'active': ''}>
                        
                        {visible ? renderCards(restItems) : ''}
                    </DestinationsCards>
                    <DestinationsBtnWrap>
                        <Button onClick={toggleVisible}>
                            {visible? <ArrowUpIcon/> : btnLabel}
                        </Button>
                    </DestinationsBtnWrap>
                </DestinationsContent>

            </Container>
        </>
    )
}

export default DestinationsSection;
