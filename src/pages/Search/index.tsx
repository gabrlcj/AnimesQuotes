import { useState } from 'react'
import { Container } from './style'

export default function Search() {
  const [item, setItem] = useState<string>('')

  return (
    <Container>
      <form className="search-container">
        <h1>Search by anime title or character</h1>
        <input
          type="search"
          name="search"
          placeholder="🔍 Search 'Naruto' for example"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  )
}
