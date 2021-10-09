import { keyframes } from 'styled-components'

export const ColorChangeText = keyframes`
  0% {
    color: var(--yellow-color);
  }

  50% {
    filter: brightness(160%);
  }

  100% {
    color: var(--yellow-color);
  }
`

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`
