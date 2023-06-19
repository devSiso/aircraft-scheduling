import React, { Component, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './router';
import { PageWrapper, Navbar } from './components';

import { store, persistor } from './store';

class App extends Component {

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <PageWrapper>
              <Routes />
            </PageWrapper>
            <footer style={{ padding: '16px 0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {!window.location.pathname.includes('/documentation') ? (
                <a href="/documentation" style={{ color: '#000', display: 'block', width: 'fit-content' }}>
                  Go to Documentation
                </a>) : (<a href="/" style={{ color: '#000', display: 'block', width: 'fit-content' }}>
                  Go Home
                </a>)
              }
            </footer>
          </PersistGate>
        </Provider>
      </Fragment >
    );
  }
}

export default App;
