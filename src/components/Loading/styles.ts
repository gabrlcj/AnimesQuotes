import styled from 'styled-components'
import { BounceAnimation } from '../../styles/animations'

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  h3 {
    font-size: 2.5rem;
    text-align: center;
    margin-right: 0.5rem;
  }
`

interface DotProps {
  delay: string
}

export const Dot = styled.div<DotProps>`
  background-color: var(--yellow-color);
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`
