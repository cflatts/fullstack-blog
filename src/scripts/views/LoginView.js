import React from 'react'
import Header from './header'

const LoginView = React.createClass ({
    render: function() {
        return (
            <div className = 'loginView'>
                <Header />
                <Login />
            </div>
            )
    }
})

const Login = React.createClass ({

    _handleRegister: function() {

    },

    _handleLogin: function() {

    },

    render: function() {
        return (
            <div className = 'loginForm'>
                <form className = 'signIn' id = 'register' onSubmit = {this._handleRegister} >
                    <h3>Register</h3>
                    <input type = 'text' name = 'registerName' placeholder = 'username' />
                    <input type = 'text' name = 'registerPassword' placeholder = 'password' />
                    <button type = 'submit'>Submit</button>
                </form>
                <form className = 'signIn' id = 'login' onSubmit = {this._handleLogin} >
                    <h3>Login</h3>
                    <input type = 'text' name = 'loginName' placeholder = 'username' />
                    <input type = 'text' name = 'loginPassword' placeholder = 'password' />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
            )
    }
})

export default LoginView