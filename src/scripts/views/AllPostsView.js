import React from 'react'
import Header from './header'
import {User} from '../models/models'


const AllPostsView = React.createClass ({

    // getInitialState: function() {
    //     return STORE.retrieveData()
    // },

    // componenetWillMount: function() {
    //     ACTIONS.fetchPosts()
    //     STORE.on('updateContent', () => {
    //         this.setState(STORE.retrieveData())
    //     })
    // },

    // componentWillUnmount: function() {
    //     STORE.off('updateContent')
    // },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'allPosts'>
                <Header />
                <PostsDisplay />
            </div>
            )
    }
})

// var Dashboard = React.createClass ({
//     render: function() {
//         return (
//             <div className = 'dashboard'>
//                 {this.props.postColl.map(
//                     (model) => <PostsDisplay postModel = {model} key ={model.id} />
//                 )}
//             </div>
//             )
//     }
// })

const PostsDisplay = React.createClass ({

    render: function() {
        console.log(this.props)
        return (
            <div className = 'postDisplay' id = 'left'>
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