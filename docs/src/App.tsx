import React from 'react';
import { Reset, Item } from '@tone-row/slang';
import { AppWrapper } from './styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Docs from './components/Docs';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Reset />
      <AppWrapper className="App">
        <Item sticky style={{ zIndex: 1 }} key="header">
          <Header />
        </Item>
        <Switch key="page">
          <Route path="/" exact component={Home} />
          <Route path="/docs" component={Docs} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
