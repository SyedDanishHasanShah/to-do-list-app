import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ type }) => type === 'text' ? css`
    border-radius: 50rem;
    border: none;
    border: 1px solid black;
    outline: none;
    padding: 1rem 1rem;
    width: 100%;  
  ` : null}
`;

export default Input;