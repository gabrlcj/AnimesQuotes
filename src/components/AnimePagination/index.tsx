import { AnimeList } from '../../@types/type'
import Loading from '../Loading'
import { AnimesContainer } from './style'

interface AnimeListProps {
  allAnimes: AnimeList[]
  loading: boolean
}

export default function AnimePagination({
  allAnimes,
  loading,
}: AnimeListProps) {
  if (loading) return <Loading />

  return (
    <AnimesContainer>
      {allAnimes.map((anime) => (
        <li key={Math.random()}>
          <strong>{anime}</strong>
        </li>
      ))}
    </AnimesContainer>
  )
}
