import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import LandingPage from './routes/LandingPage'

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
      </Switch>
    </main>
  );
}

export default App;
