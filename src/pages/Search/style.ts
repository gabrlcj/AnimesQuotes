import styled from 'styled-components'
import { FadeIn } from '../../styles/animations'

export const Container = styled.section`
  text-shadow: 0 0.35rem 0.15rem var(--light-color);
  color: var(--white-color);
  padding: 0 1rem;
  animation: ${FadeIn} ease-in 0.4s;

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;

    h1 {
      font-size: 2.75rem;
      padding: 2.5rem 0;
      text-align: center;
    }

    input {
      padding: 0.75rem;
      width: 50%;
      color: var(--yellow-color);
      border: 2px solid var(--light-color);
      box-shadow: 0 0 1rem 0.1rem var(--light-color);
      background: var(--main-color-transparent);
      outline: none;

      transition: all ease 0.3s;

      &::placeholder {
        color: var(--white-color-transparent);
      }

      &:focus {
        background: var(--main-color);
      }
    }

    button {
      margin-top: 1.5rem;
      width: 15%;
    }

    .error {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      strong {
        color: red;
        text-shadow: 0 0.35rem 0.15rem var(--black-color);
        font-size: 1.5rem;
      }

      input {
        border-color: red;
        width: 50%;
      }
    }
  }
`
