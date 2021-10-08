import { useEffect, useState } from 'react'
import { AnimeQuote } from '../../@types/type'
import Loading from '../../components/Loading'
import api from '../../service/api'

import { Container, QuoteContainer } from './style'

export default function Dashboard() {
  const [randomQuote, setRandomQuote] = useState({} as AnimeQuote)
  const [loading, setLoading] = useState<boolean>(false)

  async function randomQuotes() {
    setLoading(true)
    const quotes = await api.get('random')
    setRandomQuote(quotes.data)
    setLoading(false)
  }

  useEffect(() => {
    randomQuotes()
  }, [])

  return (
    <Container>
      <div className="title-subtitle">
        <h1>Get a random quote, from more than 700+ animes!</h1>
        <p>Welcome, are you interrested on some quotes from animes?</p>
      </div>
      <QuoteContainer>
        {loading === true ? (
          <Loading />
        ) : (
          <>
            <h3>{randomQuote.anime}</h3>
            <strong>{randomQuote.character}</strong>
            <p>{randomQuote.quote}</p>
            <button type="button" onClick={() => randomQuotes()}>
              Generate new quote
            </button>
          </>
        )}
      </QuoteContainer>
    </Container>
  )
}
