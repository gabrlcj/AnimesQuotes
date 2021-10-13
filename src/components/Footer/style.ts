import styled from 'styled-components'

export const FooterContainer = styled.footer`
  text-shadow: 0 0.25rem 0.5rem var(--black-color);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  width: 100%;
  text-align: center;
  padding: 1rem 0;

  a {
    color: var(--white-color);

    &:hover {
      color: var(--light-color);
      text-decoration: underline;
    }
  }
`
