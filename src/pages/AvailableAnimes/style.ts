import styled from 'styled-components'
import { FadeIn } from '../../styles/animations'

export const Container = styled.main`
  text-shadow: 0 0.4rem 0.15rem var(--light-color);
  color: var(--white-color);
  padding: 0 0.75rem;
  animation: ${FadeIn} ease-in 0.4s;

  h1 {
    font-size: 2.75rem;
    padding: 2.5rem 0;
    text-align: center;
  }
`

export const AnimesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  grid-auto-rows: 155px;
  align-content: center;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  border-radius: 0.75rem;
  background-color: var(--main-color);
  border: 2px solid var(--light-color);
  box-shadow: 0 0 0.75rem 0.3rem var(--light-color);
  padding: 0.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    text-align: center;
    background-color: var(--dark-color);
    border-radius: 1.25rem;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;

    &:hover {
      transform: translateY(-5%);
      transform: scale(1.15);
    }
  }
`
