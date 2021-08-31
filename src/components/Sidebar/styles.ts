import styled from "styled-components";

export const Container = styled.nav`
  height: 100vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #072546;
  padding: 4rem;

  ul {
    list-style: none;
    font-size: 1.8rem;
    font-weight: bold;

    hr {
      margin: 2rem 0;
    }

    svg {
      margin-right: 1rem;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
