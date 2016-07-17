import React from 'react'

const Header = React.createClass ({
    render: function() {
        return (
            <div className = 'header'>
                <h1>Bloggle</h1>
                <Links />
            </div>
            )
    }
})

const Links = React.createClass ({
    render: function () {
        return (
            <div className = 'navLinks'>
                <button>Home</button>
                <button>Login</button>
                <button>Mine</button>
                <button>All</button>
            </div>
            )
    }
})

export default Header