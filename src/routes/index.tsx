import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import RoutePrivate from './PrivateRoute';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <RoutePrivate exact path="/" component={''} />
        <RoutePrivate exact path="/teste1" component={''} />
        <RoutePrivate exact path="/teste2" component={''} />
      </Switch>
    </BrowserRouter>
  );
}