import React from 'react'

import AuthApiService from '../../services/auth-api-service'

import './SignUpForm.css'
import Logo from '../../imgs/ajax-loader.gif'

export default class RegistrationForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
      state = {
        error: null,
        loader: false
      }
    
      handleSubmit = ev => {
        ev.preventDefault()
        const { teamname, username, password } = ev.target
    
        this.setState({ error: null, loader: true })
        
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
              this.setState({ error: res.error, loader: false })
            })
      }

    render() {
        const { error } = this.state
        return (
            <form className="SignUpForm" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend className="create-legend">CREATE AN ACCOUNT</legend>

                    <input className="register username" placeholder="username" name="username" required/>
                    <input className="register paswword" type="password" placeholder="password" name="password" required/>
                    <label htmlFor="team">Name of your Organization</label>
                    <input className="register teamname" id="team" placeholder="Club's name?" name="teamname" required/>

                    <button className="submit-offline" type="submit">{!this.state.loader ? "Sign Up" : <img src={Logo} alt="loading" />}</button>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                </fieldset>
            </form>
        )
    }
    
}