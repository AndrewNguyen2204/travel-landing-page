import React from 'react';

export default function Blob() {
    return (
        <svg>
            <defs>
                <filter id="blob">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
                </filter>
            </defs>
        </svg>
    )
}
