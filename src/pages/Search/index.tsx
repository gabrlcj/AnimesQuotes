import { FormEvent, useState } from 'react'
import { AnimeQuote } from '../../@types/type'
import { SearchPagination } from '../../components/AnimePagination'
import Loading from '../../components/Loading'
import api from '../../service/api'
import { Container } from './style'

export default function Search() {
  const [item, setItem] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [quotes, setQuotes] = useState<AnimeQuote[]>([])
  const [flag, setFlag] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function searchQuoteHandler() {
    try {
      setLoading(true)
      const animeTitle = await api.get(`quotes/anime?title=${item}`)
      setQuotes(animeTitle.data)
      setLoading(false)
    } catch (error) {
      setError('Invalid title name')
      setLoading(false)
      setFlag(false)
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    searchQuoteHandler()
    setFlag(true)
    setError('')
  }

  return (
    <Container>
      <form className="search-container" onSubmit={handleSubmit}>
        <h1>Search by anime title</h1>
        {error ? (
          <div className="error">
            <strong>{error}</strong>
            <input
              type="search"
              name="search"
              placeholder="🔍 Search 'Naruto' for example"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
        ) : (
          <input
            type="search"
            name="search"
            placeholder="🔍 Search 'Naruto' for example"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        )}
        <button type="submit">Search</button>
      </form>
      {loading === true ? (
        <Loading />
      ) : (
        <SearchPagination flag={flag} allAnimes={quotes} />
      )}
    </Container>
  )
}
