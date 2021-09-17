import './App.css';

import { Route, Switch } from 'react-router-dom';

//Components
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import Details from './pages/details/Details.js';
import CreateCharacter from './pages/createCharacter/CreateCharacter';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={CreateCharacter} />
      </Switch>
    </div>
  );
}

export default App;
