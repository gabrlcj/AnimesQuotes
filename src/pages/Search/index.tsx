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

  async function searchQuoteHandler() {
    setLoading(true)
    const animeTitle = await api.get(`quotes/anime?title=${item}`)
    setQuotes(animeTitle.data)
    setLoading(false)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    searchQuoteHandler()
    setFlag(true)
  }

  return (
    <Container>
      <form className="search-container" onSubmit={handleSubmit}>
        <h1>Search by anime title</h1>
        {loading === true ? (
          <Loading />
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
      <SearchPagination flag={flag} allAnimes={quotes} />
    </Container>
  )
}
