import { useEffect, useState } from 'react'
import { AnimeList } from '../../@types/type'
import Loading from '../../components/Loading'
import api from '../../service/api'
import { AnimesContainer, Container } from './style'

export default function AvailableAnimes() {
  const [allAnimes, setAllAnimes] = useState<AnimeList[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function listOfAnimes() {
    setLoading(true)
    const animes = await api.get('available/anime')
    setAllAnimes(animes.data)
    setLoading(false)
  }

  useEffect(() => {
    listOfAnimes()
  }, [])

  return (
    <Container>
      <h1>All available animes</h1>
      {loading === true ? (
        <Loading />
      ) : (
        <AnimesContainer>
          {allAnimes
            .map((anime) => (
              <li key={Math.random()}>
                <strong>{anime}</strong>
              </li>
            ))
            .slice(0, 100)}
        </AnimesContainer>
      )}
    </Container>
  )
}
