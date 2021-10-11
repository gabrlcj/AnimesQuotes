import { Switch, Route } from 'react-router-dom'

import AvailableAnimes from '../pages/AvailableAnimes'
import RandomAnimeQuote from '../pages/RandomAnimeQuote'
import Search from '../pages/Search'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={RandomAnimeQuote} />
      </Switch>
      <Switch>
        <Route path="/available" component={AvailableAnimes} />
      </Switch>
      <Switch>
        <Route path="/search" component={Search} />
      </Switch>
    </>
  )
}

export default Routes
