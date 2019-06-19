import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'

import LandingPage from './routes/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import SignUp from './routes/SignUp/SignUp'
import Dashboard from './routes/Dashboard/Dashboard'
import Header from './components/Header/Header'

import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import PrivateRoute from './components/Utils/PrivateRoute'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'

function App() {
  return (
    <section className='App'>
      <header className='app_header'>
        <Header />
      </header>
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage}
          />
          <PublicOnlyRoute
            path={'/register'}
            component={SignUp}
          />
          <PrivateRoute
            path={'/dashboard'}
            component={Dashboard}
          />
          <Route
            component={NotFoundPage}
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
