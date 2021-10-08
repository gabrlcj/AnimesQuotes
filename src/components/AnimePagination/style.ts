import styled from 'styled-components'

export const AnimesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  grid-auto-rows: 155px;
  align-content: center;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;

  border-radius: 0.75rem;
  background: var(--black-color);
  border: 2px solid var(--light-color);
  box-shadow: 0 0 1rem 0.1rem var(--light-color);
  padding: 1rem;
  overflow-x: auto;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    text-align: center;
    text-shadow: 0 0.25rem 0.5rem var(--black-color);
    background-color: var(--main-color-transparent);
    border: 1px solid var(--main-color);
    border-radius: 1.25rem;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;

    &:hover {
      transform: translateY(-5%);
      transform: scale(1.1);
    }
  }
`
