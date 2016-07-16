import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {User} from './models/models'
import {postModel} from './models/models'
import {postCollection} from './models/models'

const app = function() {

    const PostRouter = Backbone.Router.extend ({
        routes: {
            'login': 'showLoginPage',
            'compose': 'showPostEditor',
            'myPosts': 'showMyPosts',
            'allPosts': 'showAllPosts',
            '*catchall': 'default'
        },
        showLoginPage: function() {
            location.hash = 'login'
        },
        default: function() {
            location.hash = 'allPosts'
        },
        initialize: function() {
            Backbone.history.start()
        }
    })
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..