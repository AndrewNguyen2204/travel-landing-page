import React from 'react';
import { Button } from '../Button/ButtonElements';
import SectionTitle from '../Elements/SectionTitle';
import { BookingContainer, BookingContent, BookingP } from './BookingElements';
import {useNavigate } from 'react-router-dom';


const BookingSection = ({
    id,
    title,
    description,
    btnLabel
}) => {

    const navigate = useNavigate();


    return (
        <>
            <BookingContainer id={id}>
                <BookingContent>

                    <SectionTitle title={title} firstBlack />
                    <BookingP>{description}</BookingP>
                    <Button onClick={()=>{navigate('/signup')}}>{btnLabel}</Button>
                   

                </BookingContent>
               
            </BookingContainer>
        </>
    )
}

export default BookingSection;
