import React from 'react';
import { Container } from '../Elements/Elements';
import SectionTitle from '../Elements/SectionTitle';
import { AboutContent, AboutImgBox, AboutItem, AboutItems, AboutP, AboutTextBox, BackCircle, Img, ImgWrapper, ItemIcon, ItemText } from './AboutElements';




const AboutSection = ({
    id,
    imgSrc,
    imgAlt,
    title,
    description,
    items
}) => {


    const renderItems = () => {
        return items.map(item => {

            return (
                <AboutItem key={item.id}>
                    <ItemIcon>{item.icon}</ItemIcon>
                    <ItemText>{item.text}</ItemText>
                </AboutItem>

            )
        })
    }


    return (
        <>
            <Container id={id} >
                <AboutContent>
                    <AboutImgBox>

                        <ImgWrapper>
                            <BackCircle />
                            <Img src={imgSrc} alt={imgAlt} />
                        </ImgWrapper>
                    </AboutImgBox>
                    <AboutTextBox>
                        <SectionTitle title={title} large />
                        <AboutP>{description}</AboutP>
                        <AboutItems>
                            {renderItems()}
                        </AboutItems>
                    </AboutTextBox>
                </AboutContent>
            </Container>
        </>
    )
}

export default AboutSection
