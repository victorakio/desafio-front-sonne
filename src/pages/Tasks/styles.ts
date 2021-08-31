import styled from "styled-components";

export const TasksWrapper = styled.div`
  display: flex;
`;

export const TasksContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 8rem;
  margin: 0 auto;
  background-color: #f5f5f5;

  & > div {
    display: flex;
  }
`;
