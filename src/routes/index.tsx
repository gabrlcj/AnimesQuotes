import { Switch, Route } from 'react-router-dom'

import AvailableAnimes from '../pages/AvailableAnimes'
import RandomAnimeQuote from '../pages/RandomAnimeQuote'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={RandomAnimeQuote} />
      </Switch>
      <Switch>
        <Route path="/available" component={AvailableAnimes} />
      </Switch>
    </>
  )
}

export default Routes
