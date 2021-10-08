import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Routes from './routes'

import GlobalStyle from './styles/global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Routes />
    </Router>
  )
}

export default App
