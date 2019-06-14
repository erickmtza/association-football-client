import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import SignUp from './routes/SignUp/SignUp'
import Dashboard from './routes/Dashboard/Dashboard'

function App() {
  return (
    <section className='App'>
      <header className='app_header'>
        <Link
            to='/login'>
            Log in
          </Link>
          <Link
            to='/signup'>
            Register
          </Link>
      </header>
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/signup'}
            component={SignUp}
          />
          <Route
            path={'/dashboard'}
            component={Dashboard}
          />
        </Switch>
      </main>
      
      <footer>
        Developed by Erick Martinez, 2019
      </footer>
    </section>
  );
}

export default App;
