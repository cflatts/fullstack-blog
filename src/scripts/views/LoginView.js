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
    render: function() {
        return (
            <div className = 'loginForm'>
                <form className = 'register'>
                    <h3>Register</h3>
                    <input type = 'text' name = 'registerName' placeholder = 'username' />
                    <input type = 'text' name = 'registerPassword' placeholder = 'password' />
                </form>
            </div>
            )
    }
})

export default LoginView