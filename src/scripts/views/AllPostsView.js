import React from 'react'
import Header from './header'
import {STORE} from '../msgStore'



const AllPostsView = React.createClass ({

    render: function() {
        // console.log(this.props)
        return (
            <div className = 'allPosts'>
                <Header />
                <Dashboard postColl = {this.props.postColl} />
            </div>
            )
    }
})

var Dashboard = React.createClass ({

    _createPost:function(record) {
        return <PostsDisplay key={record.id} record={record} />
    },

    render: function() {
        return (
            <div className = 'dashboard'>
                {this.props.postColl.map(this._createPost)}
            </div>
            )
    }
})

const PostsDisplay = React.createClass ({

    render: function() {
        // console.log(this.props)
        return (
            <div className = 'postDisplay'>
                <div className = 'postContainer'>
                    <div className = 'postTitle'>Title</div>
                    <div className = 'postPreview'>Post Preview</div>
                </div>
                <div className = 'postContainer' id = 'right'>
                    <div className = 'user'>Posted by: User</div>
                    <div className = 'datePosted'>Posted On: today</div>
                </div>
                <hr/>
            </div>)
    }
})

export default AllPostsView