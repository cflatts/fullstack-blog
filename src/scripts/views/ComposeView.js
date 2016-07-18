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

    _addPost: function(evt) {
        var newPost = new PostModel ({
            title: evt.target.title.value,
            content: evt.target.compose.value
        })
        newPost.save()
    },

    render: function() {
        return (
            <div className = 'composeForm'>
                <input name = 'title' id = 'title' type = 'text' placeholder = 'Title' />
                <textarea name = 'compose' id = 'compose' type = 'text' placeholder = 'What would you like to Bloggle?'></textarea>
                <button type = 'submit'>Submit</button>
            </div>
            )
    }
})

export default ComposeView