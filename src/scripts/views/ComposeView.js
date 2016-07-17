import React from 'react'
import Header from './header'

const ComposeView = React.createClass ({
    render: function() {
        return (
            <div className = 'composeView'>
                <Header />
                <Compose />
            </div>
            )
    }
})

const Compose = React.createClass ({
    render: function() {
        return (
            <div className = 'composeForm'>
                <input type = 'text' placeholder = 'Title' />
                <input type = 'text' placeholder = 'What would you like to Bloggle?' />
                <button type = 'submit'>Submit</button>
            </div>)
    }
})

export default ComposeView