import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../services/token-service'

import './Header.css'

import PlayersContext from '../../context/PlayersContext'

import Logo from '../../imgs/Soccer.svg'

export default class Header extends Component {
    static contextType = PlayersContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.signedInUpdate(false)
    this.context.initiatePlayers([])
    this.context.teamnameUpdate('')
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
                className="Header-Link logout"
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
            </Link>
            <Link
                className="Header-Link"
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
                className="Header-Link register-link"
                to='/register'
            >
                Register
            </Link>
            <Link
                className="Header-Link"
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
            <Link to='/'>
                <img className="logo" src={Logo} alt="association football" />
            </Link>
            {!!TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
    )
  }
}
