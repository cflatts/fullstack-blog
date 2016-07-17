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
                <a href = ''>Home</a>
                <a href = ''>Login</a>
                <a href = ''>Mine</a>
                <a href = ''>All</a>
            </div>
            )
    }
})

export default Header