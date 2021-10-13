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
  }
`

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 90%));
  grid-auto-rows: 220px;
  gap: 1rem;
  margin-top: 2.5rem;
  opacity: 1;
  border-radius: 0.75rem;
  background: var(--black-color);
  border: 2px solid var(--light-color);
  box-shadow: 0 0 1rem 0.1rem var(--light-color);
  padding: 1.25rem;

  &.dont-show {
    display: none;
    opacity: 0;
  }

  li {
    border: 1px solid var(--main-color);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
  }
`
