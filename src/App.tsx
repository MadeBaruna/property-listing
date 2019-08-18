import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/property/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
