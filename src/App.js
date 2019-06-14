import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

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
    </main>
  );
}

export default App;
