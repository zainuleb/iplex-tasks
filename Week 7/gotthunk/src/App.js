import './App.css';

import { Route, Switch } from 'react-router-dom';

//Components
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import Details from './pages/details/Details.js';
import CreateCharacter from './pages/createCharacter/CreateCharacter';
import EditForm from './components/input/editForm/EditForm.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/create" component={CreateCharacter} />
        <Route path="/details/:id" component={Details} />
        <Route path="/update/:id" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
