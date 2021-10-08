import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --black-color: #0e0e0e;
    --white-color: #FEF9EF;
    --yellow-color: #F0A500;

    --light-color: #610094;
    --main-color: #3F0071;
    --dark-color: #1C0C5B;

    --main-color-transparent: #3F00715f;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    min-height: 100vh; 
    font: 400 1rem 'Permanent Marker', cursive;
    background-color: var(--black-color);
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    border: 3px solid var(--light-color);
    color: var(--yellow-color);
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    font: 400 1.25rem 'Permanent Marker', cursive;
    box-shadow: 0 0 0.35rem 0.125rem var(--black-color);

    transition: all ease 0.3s;

    &:hover {
      transform: translateY(-5%);
      transform: scale(1.15);
      background-color: var(--light-color);
    }
  }

  &::-webkit-scrollbar {
    background: var(--black-color);
    width: 8px;
    height: 0;
    scrollbar-width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

export default GlobalStyle
