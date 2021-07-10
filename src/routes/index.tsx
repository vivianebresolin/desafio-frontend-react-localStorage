import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CreateNewLead } from '../pages/CreateNewLead';
import { LeadsPanel } from '../pages/LeadsPanel';
import { Login } from '../pages/Login';
import RoutePrivate from './PrivateRoute';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <RoutePrivate exact path="/" component={LeadsPanel} />
        <RoutePrivate exact path="/new-lead" component={CreateNewLead} />
      </Switch>
    </BrowserRouter>
  );
}