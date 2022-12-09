import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #000;
  background-color: ${props => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
