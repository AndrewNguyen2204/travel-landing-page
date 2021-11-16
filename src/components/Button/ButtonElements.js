import styled from 'styled-components';
import { Link } from 'react-scroll';


export const LinkButton = styled(Link)`
    border-radius: 5px;
    background: ${({ primary }) => (primary ? 'var(--primary-color)' : '#010606')};
    white-space: nowrap;
    padding: ${({ large }) => (large ? '14px  48px' : '12px 30px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    text-transform: capitalize;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : 'var(--primary-color)')};
        color:#010606;
        box-shadow: inset 0 0 2px var(--primary-color),
        0 12px 24px rgba(0,0,0,0.5);
    }

`;


export const Button = styled.button`
    border-radius: 5px;
    background: ${({ primary }) => (primary ? 'var(--primary-color)' : '#010606')};
    white-space: nowrap;
    padding: ${({ large }) => (large ? '14px  48px' : '12px 30px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    text-transform: capitalize;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : 'var(--primary-color)')};
        color:#010606;
        box-shadow: inset 0 0 2px var(--primary-color),
        0 12px 24px rgba(0,0,0,0.5);
    }

`;
