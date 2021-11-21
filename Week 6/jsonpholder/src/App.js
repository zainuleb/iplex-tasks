import './App.css';
import Homepage from './pages/homepage/Homepage';
import Title from './pages/title/Title.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  return (
    <div className="App">
      <h1>To Do </h1>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Homepage title={setTitle} />} />
          <Route
            path="/title"
            render={() => <Title id={query.get('id')} title={title} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
