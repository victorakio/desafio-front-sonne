import styled from "styled-components";

export const TaskListContainer = styled.div`
  width: 30rem;
  border: 0.1rem solid #c4c4c4;
  border-radius: 1rem;
  max-height: calc(100vh - 16rem);
  margin-right: 8rem;
  padding: 2rem;
  overflow-y: scroll;

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    svg {
      margin-right: 1rem;
    }
  }

  ul {
    list-style: none;
  }
`;
