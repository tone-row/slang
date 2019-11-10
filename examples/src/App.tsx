import React from 'react';
import { Reset, Box } from '@tone-row/slang';
import { AppWrapper } from './styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Reset />
      <AppWrapper className="App">
        <Box sticky style={{ zIndex: 1 }}>
          <Header />
        </Box>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/layout" component={Layout} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
