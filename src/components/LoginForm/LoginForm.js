import React from 'react'

import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

import PlayersContext from '../../context/PlayersContext'

export default class LoginPage extends React.Component {
    static contextType = PlayersContext;

    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: false })
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
            this.setState({ error: res.error })
        })
    }
      
    render() {
        const { error } = this.state
        return (
            <form onSubmit={this.handleSubmitJwtAuth}>
                <fieldset>
                    <legend>LOGIN</legend>

                    <input placeholder="username" name="username" required />
                    <input type="password" placeholder="password" name="password" required />
                    <button>Sign-In</button>
                    
                    <div role='alert'>
                        {!!error && <p className='red'>{error}</p>}
                    </div>
                </fieldset>
            </form>
        )
    }
    
}