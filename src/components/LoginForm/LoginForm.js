import React from 'react'

import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

import PlayersContext from '../../context/PlayersContext'

import './LoginForm.css'
import Logo from '../../imgs/ajax-loader.gif'

export default class LoginPage extends React.Component {
    static contextType = PlayersContext;

    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { 
        error: null,
        loader: false
    }
    
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: false, loader: true })
        const { username, password } = ev.target
    
        AuthApiService.postLogin({
        username: username.value,
        password: password.value,
        })
        .then(res => {
            username.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            this.context.signedInUpdate(true)
        })
        .catch(res => {
            this.setState({ error: res.error, loader: false })
        })
    }
      
    render() {
        const { error } = this.state
        return (
            <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                <fieldset>
                    <legend className="login-legend">LOGIN</legend>

                    <input className="login username" placeholder="username" name="username" required />
                    <input className="login password" type="password" placeholder="password" name="password" required />
                    <button className="submit-offline">{!this.state.loader ? "Sign-In" : <img src={Logo} alt="loading" />}</button>
                    
                    <div role='alert'>
                        {!!error && <p className='red'>{error}</p>}
                    </div>
                </fieldset>
            </form>
        )
    }
    
}