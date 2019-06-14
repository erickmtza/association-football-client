import React from 'react'

export default function LoginPage() {
    return (
        <form>
            <fieldset>
            <legend>LOGIN</legend>

            <input placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Sign-In</button>
            </fieldset>
        </form>
    )
}