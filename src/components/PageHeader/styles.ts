import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 4rem;
`;

export const AddNewButton = styled(Link)`
  height: 4rem;
  text-decoration: none;
  background-color: #072546;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: #fff;
  padding: 2rem;
  font-weight: 700;
  font-family: "Roboto Condendsed", sans-serif;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 1rem;
  }
`;
