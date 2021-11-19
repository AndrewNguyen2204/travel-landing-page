import styled from 'styled-components';
import { Link } from 'react-router-dom';













export const LogoLink = styled(Link)`
    color: ${({ primary }) => (primary ? 'var(--primary-color)' : 'var(--text-black)')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;


`;