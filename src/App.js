import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'

function App() {
  return (
    <main className='App'>
      <header className='app_header'>
        <Link
            to='/login'>
            Log in
          </Link>
          <Link
            to='/register'>
            Register
          </Link>
      </header>
      <Switch>
        <Route
          exact path={'/'}
          component={LandingPage}
        />
        <Route
          path={'/login'}
          component={LoginPage}
        />
      </Switch>
    </main>
  );
}

export default App;
