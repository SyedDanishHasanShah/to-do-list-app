import styled, { css } from 'styled-components';

const Heading = styled.h1`
  text-transform: uppercase;
  ${({ main }) => main ? css`
    font-size: 6rem;
    letter-spacing: 1rem;
    margin-bottom: 4rem;
    text-align: center;
    word-spacing: 1.5rem;
  ` : null}
`;

export default Heading;