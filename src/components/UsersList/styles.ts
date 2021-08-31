import { Link } from "react-router-dom";
import styled from "styled-components";

export const UsersListContainer = styled.table`
  width: 100%;
  border: 1px solid;
  border-radius: 10px;
  padding: 4rem;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;

  thead {
    margin-bottom: 2rem;

    th {
      text-align: left;
    }
  }

  tr {
    display: flex;
    justify-content: space-between;
    height: 3rem;

    th,
    td {
      width: 30rem;
    }

    a {
      color: #222;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #555;
      }
    }

    td:last-child {
      text-align: right;
    }
  }
`;

export const EditUserButton = styled(Link)`
  text-decoration: none;
  border-right: 0.15rem solid #888;
  padding-right: 1.5rem;
  margin-right: 1.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const DeleteUserButton = styled.button`
  border: none;
  background-color: none;
  color: #af0808;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #e20c0c;
  }
`;
