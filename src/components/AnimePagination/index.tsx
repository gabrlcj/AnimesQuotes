import { AnimeQuote } from '../../@types/type'
import { AnimesContainer, SearchContainer } from './style'

interface AnimePaginationProps {
  allAnimes: AnimeQuote[]
  flag?: boolean
}

export default function AnimePagination({ allAnimes }: AnimePaginationProps) {
  return (
    <AnimesContainer>
      {allAnimes.map((anime) => (
        <li key={Math.random()}>
          <span>{anime}</span>
        </li>
      ))}
    </AnimesContainer>
  )
}

export function SearchPagination({ allAnimes, flag }: AnimePaginationProps) {
  return (
    <SearchContainer className={flag === false ? 'dont-show' : ''}>
      {allAnimes.map((anime) => (
        <li key={Math.random()}>
          <h3>{anime.anime}</h3>
          <strong>{anime.character}</strong>
          <p>{anime.quote}</p>
        </li>
      ))}
    </SearchContainer>
  )
}
