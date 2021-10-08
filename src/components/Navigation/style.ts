import styled from 'styled-components'
import { JelloHorizontal } from '../../styles/animations'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15rem;

  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0.75rem 0.25rem rgba(97, 0, 148, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: var(--yellow-color);
  padding: 2rem 0;

  h1 {
    font-size: 2rem;

    &:hover {
      animation: ${JelloHorizontal} ease-in-out 1s;
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      text-decoration: none;
      color: var(--yellow-color);
      position: relative;

      transition: all ease 0.4s;

      &::after {
        content: '';
        width: 0;
        height: 0.2rem;
        background: var(--yellow-color);
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        transition: width ease 0.4s;
      }

      &:hover {
        filter: brightness(140%);

        &::after {
          width: 100%;
          color: var(--yellow-color);
        }
      }
    }
  }

  .active {
    filter: brightness(140%);

    &::after {
      content: '';
      width: 100%;
      height: 0.2rem;
      background: var(--yellow-color);
      position: absolute;
      left: 0;
      bottom: -0.25rem;
    }
  }
`
