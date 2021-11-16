import React from 'react';
import { BlobSVG, Bubble, BubblesWrapper } from './BubblesElements';



const Bubbles = () => {


    const renderBubbles = () => {



        let arr = [];

        for (let i = 0; i < 128; i++) {
            arr.push(i);
        }

        return arr.map(i => {

            const styleObj = {
                ' --size': `${2 + Math.random() * 4}rem`,
                '--distance': `${6 + Math.random() * 4}rem`,
                '--position': `${-5 + Math.random() * 110}%`,
                '--time': `${2 + Math.random() * 2}s`,
                '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            };

            return <Bubble key={i} style={styleObj} />
        })

    }



    return (
        <>
            <BubblesWrapper >
                {renderBubbles()}
            </BubblesWrapper>
            <BlobSVG />
        </>
    )
}

export default Bubbles;
