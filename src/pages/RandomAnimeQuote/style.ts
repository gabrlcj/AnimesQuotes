import styled from 'styled-components'
import { FadeIn } from '../../styles/animations'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  color: var(--white-color);
  padding: 0 1rem;
  animation: ${FadeIn} ease-in 0.4s;

  .title-subtitle {
    padding-top: 3rem;
    text-align: center;
    text-shadow: 0 0.35rem 0.15rem var(--light-color);

    h1 {
      margin: 0.75rem 0;
      font-size: 2.75rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  padding: 2.5rem;
  border-radius: 1rem;
  width: 75%;
  text-shadow: 0 0.25rem 0.5rem var(--black-color);
  border: 2px solid var(--light-color);
  box-shadow: 0 0 1rem 0.1rem var(--light-color);
  background: var(--main-color-transparent);

  h3 {
    font-size: 1.75rem;
  }

  strong {
    font-size: 1.25rem;
  }

  p {
    font-size: 1.15rem;
    text-align: center;
  }
`
