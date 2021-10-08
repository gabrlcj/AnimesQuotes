import { NavLink } from 'react-router-dom'
import { NavContainer } from './style'

export default function Navigation() {
  return (
    <NavContainer>
      <h1>World of Animes Quotes</h1>
      <li>
        <ul>
          <NavLink to="/" exact activeClassName="active">
            Random Anime Quote
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/available" activeClassName="active">
            Animes availables
          </NavLink>
        </ul>
      </li>
    </NavContainer>
  )
}
