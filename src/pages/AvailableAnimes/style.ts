import styled from 'styled-components'
import { FadeIn } from '../../styles/animations'

export const Container = styled.main`
  text-shadow: 0 0.35rem 0.15rem var(--light-color);
  color: var(--white-color);
  padding: 0 1rem;
  animation: ${FadeIn} ease-in 0.4s;

  h1 {
    font-size: 2.75rem;
    padding: 2.5rem 0;
    text-align: center;
  }
`
