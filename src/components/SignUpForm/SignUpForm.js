import React from 'react'

import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
      state = { error: null }
    
      handleSubmit = ev => {
        ev.preventDefault()
        const { teamname, username, password } = ev.target
    
        this.setState({ error: null })
        
        AuthApiService.postUser({
          username: username.value,
          password: password.value,
          teamname: teamname.value,
        })
          .then(user => {
            teamname.value = ''
            username.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
          })
            .catch(res => {
              this.setState({ error: res.error })
            })
      }

    render() {
        const { error } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>CREATE AN ACCOUNT</legend>

                    <input placeholder="username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <label htmlFor="team">Name of your Organization</label>
                    <input id="team" placeholder="What will be your team name?" name="teamname" />

                    <button type="submit">Sign Up</button>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                </fieldset>
            </form>
        )
    }
    
}