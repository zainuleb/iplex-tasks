import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';

function App() {
  let query = useQuery();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail" render={() => <Details id={query.get('id')} />} />
      </Switch>
    </div>
  );
}

export default App;
