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
                <form>
                    <input name = 'registerName' />
                    <input name = 'registerPassword' />
                </form>
            </div>
            )
    }
})

export default LoginView