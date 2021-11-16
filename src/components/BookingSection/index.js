import React from 'react';
import { Button } from '../Button/ButtonElements';
import { Container } from '../Elements/Elements';
import SectionTitle from '../Elements/SectionTitle';
import { BookingContent, BookingP } from './BookingElements';



const BookingSection = ({
    id,
    title,
    description,
    btnLabel
}) => {
    return (
        <>
            <Container id={id}>
                <BookingContent>
                    <SectionTitle title={title} firstBlack />
                    <BookingP>{description}</BookingP>
                    <Button>{btnLabel}</Button>
                </BookingContent>
                
            </Container>
        </>
    )
}

export default BookingSection;
