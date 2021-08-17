import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 50rem;
  border: none;
  border: 1px solid black;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.5);
    transform: translateY(-0.3rem);
  }

  &:active {
    transform: translateY(0px);
  }

  ${({ addButton }) => addButton ? css`
    background-color: #71c483;
    font-size: 1.2rem;
    padding: 1rem 3rem;

    &:hover {
      background-color: #508d5d;
    }
  ` : null}

  ${( {taskButton }) => taskButton ? css`
    padding: 1rem 1rem;
    text-shadow: 0 0 1rem black;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  ` : null}

  ${({ doneButton }) => doneButton ? css`  
    background-color: #71c483;   

    &:hover {
      background-color: #508d5d;
    }
  ` : null}

  ${({ deleteButton }) => deleteButton ? css`  
    background-color: #b43f1b;    

    &:hover {
      background-color: #8d3318;
    }
  ` : null}

  ${({ editButton }) => editButton ? css`  
    background-color: #dab245;   

    &:hover {
      background-color: #cfa42b;
    }
  ` : null}
`;

export default Button;