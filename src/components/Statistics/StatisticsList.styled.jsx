import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
  padding-left: 100px;
`

export const StatList = styled.ul`
  display: flex;
  list-style: none;

`  
export const Item = styled.li`
  background-color: ${ props => {
    return `#${(Math.floor(Math.random() * 16777215).toString(16))}`

}};
`
  