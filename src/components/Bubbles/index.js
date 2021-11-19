import React from 'react';
import { Bubble, BubblesWrapper } from './BubblesElements';
import Blob from './Blob';
const DEFAULT_BUBBLES = 128;


const Bubbles = ({
    number,
    bgColor
}) => {


    const renderBubbles = () => {

        let _number = number? Number(number) : DEFAULT_BUBBLES;

        let arr = [];

        for (let i = 0; i < _number; i++) {
            arr.push(i);
        }

        return arr.map(i => {

            const styleObj = {
                '--size': `${2 + Math.random() * 4}rem`,
                '--distance': `${6 + Math.random() * 4}rem`,
                '--position': `${-5 + Math.random() * 110}%`,
                '--time': `${2 + Math.random() * 2}s`,
                '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            };

            return <Bubble key={i} style={styleObj} bgColor={bgColor? bgColor : false} />
        })

    }



    return (
        <>
            <BubblesWrapper  bgColor={bgColor? bgColor : false}>
                {renderBubbles()}
            </BubblesWrapper>
            <Blob/>
        </>
    )
}

export default Bubbles;
