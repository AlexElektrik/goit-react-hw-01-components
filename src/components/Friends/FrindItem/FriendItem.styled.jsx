import styled from "styled-components";

export const IsOnline = styled.div`
  border: ${(props) => {
    if (props.isOnline) {
      return "1px solid green";
    }
    if (!props.isOnline) {
      return "1px solid red";
    }
  }};
`;

export const Friend = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 10px;
`;
