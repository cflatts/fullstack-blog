import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import $ from 'jquery'
import init from './init'
import {User} from './models/models'
import {PostCollection} from './models/models'
import AllPostsView from './views/AllPostsView'
import LoginView from './views/LoginView'
import ComposeView from './views/ComposeView'
import MyPostsView from './views/MyPostsView'
import SingleView from './views/SingleView'

const app = function() {
    const PostRouter = Backbone.Router.extend ({
        routes: {
            'login': 'showLoginPage',
            'compose': 'showPostEditor',
            'myPosts': 'showMyPosts',
            'allPosts': 'showAllPosts',
            'singlePost': 'showDetailView',
            '*catchall': 'default'
        },

        showLoginPage: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        showPostEditor: function() {
            ReactDOM.render(<ComposeView />, document.querySelector('.container'))
        },

        showMyPosts: function() {
            ReactDOM.render(<MyPostsView />, document.querySelector('.container'))
        },

        showAllPosts: function() {
            ReactDOM.render(<AllPostsView />, document.querySelector('.container'))
        },

        showDetailView: function() {
            ReactDOM.render(<SingleView />, document.querySelector('.container'))
        },

        default: function() {
            location.hash = 'allPosts'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    new PostRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..