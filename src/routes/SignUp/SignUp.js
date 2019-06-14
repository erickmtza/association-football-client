import React from 'react'

export default function SignUp() {
    return (
        <form>
            <fieldset>
                <legend>CREATE AN ACCOUNT</legend>

                <input placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <input type="password" placeholder="re-type password"></input>
                <label htmlFor="team">Name of your Organization</label>
                <input id="team" placeholder="What will be your team name?"></input>
                <button type="submit">Sign Up</button>
            </fieldset>
        </form>
    )
}