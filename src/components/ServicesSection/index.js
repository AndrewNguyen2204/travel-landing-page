import React from 'react'
import { Container } from '../Elements/Elements';
import SectionTitle from '../Elements/SectionTitle';
import { CardIconTop, CardText, ServicesCard, ServicesCards, ServicesContent, ServicesP} from './ServicesElements';



const ServicesSection = ({
    id,
    title,
    description,
    cards
}) => {

    const renderCards = () => {

        return cards.map(card => {

            return (
                <ServicesCard key={card.id}>
                    <CardIconTop>
                        {card.icon}
                    </CardIconTop>
                    <CardText>{card.service}</CardText>
                </ServicesCard>
            )
        })

    }


    return (
        <>
            <Container id={id}>
                <ServicesContent>
                    <SectionTitle title={title} />
                    <ServicesP>{description}</ServicesP>
                    <ServicesCards>
                        {renderCards()}
                    </ServicesCards>
                </ServicesContent>
            </Container>
        </>
    )
}

export default ServicesSection;
