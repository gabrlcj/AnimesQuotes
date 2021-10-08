import { Switch, Route } from 'react-router-dom'

import AvailableAnimes from '../pages/AvailableAnimes'
import Dashboard from '../pages/Dashboard'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Switch>
        <Route path="/available" component={AvailableAnimes} />
      </Switch>
    </>
  )
}

export default Routes
