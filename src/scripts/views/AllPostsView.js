import React from 'react'
import Header from './header'

const AllPostsView = React.createClass ({
    render: function() {
        return (
            <div className = 'allPosts'>
                <Header />
                <PostsDisplay />
            </div>
            )
    }
})

const PostsDisplay = React.createClass ({
    render: function() {
        return (
            <div className = 'postDisplay'>
                <div className = 'postTitle'>Title</div>
                <div className = 'postPreview'>Post Preview</div>
                <hr/>
            </div>)
    }
})

export default AllPostsView