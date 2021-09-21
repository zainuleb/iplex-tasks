import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
