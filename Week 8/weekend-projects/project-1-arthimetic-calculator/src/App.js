import './App.css';
import { Route, Switch } from 'react-router-dom';

//Components Import
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
