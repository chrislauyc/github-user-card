import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from './theme/theme';
class App extends React.Component{
  render(){
    return(
      <div>
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/:userName'>
                <Page />
              </Route>
            </Switch>
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    );
  }
};

export default App;
