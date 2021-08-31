import styled from "styled-components";

export const TaskCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 0.1rem solid #c4c4c4;
  border-radius: 1rem;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
