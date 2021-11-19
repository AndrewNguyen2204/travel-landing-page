import styled from 'styled-components';
import { Link } from 'react-scroll';


export const LinkButton = styled(Link)`
    border-radius:50px;
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
        transform: scale(1.05);
    }

`;


export const Button = styled.button`
    border-radius: 50px;
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
        box-shadow: inset 0 0 2px var(--primary-color),
        0 12px 24px rgba(0,0,0,0.5);
        transform: scale(1.05);
    }

`;



export const ButtonSolid = styled.input`

width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background: #444;
  color: var(--text-white);
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

    &:hover{
      background: var(--text-black);     
      
    }

`;

export const ButtonTransparent = styled.button`

    margin: 0;
  background: none;
  border: 2px solid var(--text-black);
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
  outline: none;
  border-radius: 49px;
  color: var(--text-black);
  text-transform: uppercase;
  transition: 0.5s;
  cursor: pointer;

  @media (min-width: 870px) {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

`;