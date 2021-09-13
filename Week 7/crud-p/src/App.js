import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Input from './components/input/Input';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route
          path="/"
          exact /* render={() => <Homepage title={setTitle} />} */
        />
        <Route path="/input" component={Input} />
      </Switch>
    </div>
  );
}

export default App;
