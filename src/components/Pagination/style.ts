import styled from 'styled-components'

export const NavPagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  padding: 2rem 0;
  margin-bottom: 1.75rem;
  border-radius: 0.75rem;

  button {
    background: 0;
    box-shadow: 0 0 1rem 0.1rem var(--light-color);
    position: relative;

    &::after {
      content: '';
      width: 0;
      height: 0.2rem;
      background: var(--yellow-color);
      position: absolute;
      left: 0.85rem;
      bottom: 0.75rem;
      transition: width ease 0.4s;
    }

    &:hover {
      background-color: var(--light-color);

      &::after {
        width: 50%;
        color: var(--yellow-color);
      }
    }

    &.active {
      background-color: var(--light-color);

      &::after {
        content: '';
        width: 50%;
        height: 0.2rem;
        background: var(--yellow-color);
        position: absolute;
        left: 0.85rem;
        bottom: 0.75rem;
      }
    }
  }
`
