import { FiRotateCw } from "react-icons/fi";
import styled from "styled-components";

export const EditUserWrapper = styled.div`
  display: flex;
`;

export const EditUserContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 8rem;
  margin: 0 auto;
  background-color: #f5f5f5;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  border: 0.1rem solid #222222;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;

  label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  input {
    height: 4rem;
    font-size: 2rem;
    padding: 1rem;
    border: 0.2rem solid #555;
    border-radius: 0.5rem;

    &.error {
      border-color: #d60c0c;
    }
  }

  .error-message {
    color: #d60c0c;
  }

  input:not(:last-child) {
    margin-bottom: 4rem;
  }

  button {
    background-color: #072546;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    transition: filter 0.2s;
    cursor: pointer;
    padding: 2rem;
    font-size: 1.8rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const LoadingIcon = styled(FiRotateCw)`
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
