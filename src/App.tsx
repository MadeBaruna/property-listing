import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { client } from './graphql/client';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/property/:id" component={Detail} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
