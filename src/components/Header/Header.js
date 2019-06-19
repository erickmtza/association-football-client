import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../services/token-service'

// import './Header.css'

import PlayersContext from '../../context/PlayersContext'

export default class Header extends Component {
    static contextType = PlayersContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.signedInUpdate(false)  
  }

  state = {
      loggedIn: false,
  }

  loggedInUpdate() {
    this.setState({ loggedIn: false })
  }

  renderLogoutLink() {
    return (
        <div className='Header__logged-in'>
            <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
            </Link>
            <Link
                to='/Dashboard'
            >
                Dashboard
            </Link>
        </div>
    )
  }

  renderLoginLink() {
    return (
        <div className='Header__not-logged-in'>
            <Link
                to='/register'
            >
                Register
            </Link>
            <Link
                to='/login'
            >
                Log in
            </Link>
        </div>
    )
  }

  render() {
    return (
        <nav className='Header'>
            <h1>
            <Link to='/'>
                Association Football
            </Link>
            </h1>
            {!!TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
    )
  }
}