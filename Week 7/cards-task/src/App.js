import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
//Cards
import MaterialProfileCard from './components/cards/materialProfileCard/MaterialProfileCard';
import NvidiaCard from './components/cards/nvidiaCard/NvidiaCard';
import PortfolioCard from './components/cards/portfolioCard/PortfolioCard';
import NeumorphismCard from './components/cards/neumorphismCard/NeumorphismCard';
import ReflectCard from './components/cards/reflectCard/ReflectCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/material" component={MaterialProfileCard} />
        <Route path="/recepie" component={NvidiaCard} />
        <Route path="/portfolio" component={PortfolioCard} />
        <Route path="/neumorphism" component={NeumorphismCard} />
        <Route path="/reflect" component={ReflectCard} />
      </Switch>
    </div>
  );
}

export default App;
