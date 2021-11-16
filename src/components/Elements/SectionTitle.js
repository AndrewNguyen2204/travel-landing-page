import React from 'react';
import { TitleH1, TitleSpan } from './Elements';

const SectionTitle = ({
    title,
    large,
    firstBlack
}) => {

    const _title = title.trim();
    let index = _title.indexOf(" ");

    let firstWord = _title.substr(0, index); // Gets the first part

    let otherWords = _title.substr(index + 1);  // Gets the text part


    return (
        <>
            <TitleH1 large={large ? true : false}>
                <TitleSpan firstBlack={firstBlack ? true : false}>{firstWord} </TitleSpan>
                {otherWords}
            </TitleH1>
        </>
    )
}

export default SectionTitle;
