import {User, PostModel} from './models/models'
import STORE from './msgStore'


const ACTIONS = {
    registerUser: function(email,password) {
        console.log(email,password)
        return User.register(email,password).then((resp) => {
            console.log(resp)
            return this.logUserIn(email,password)
        })
    },

    loginUser: function(email,password) {
        return User.login(email,password).then(function(resp){
            console.log(resp)
            location.hash = "showAllPosts"
        })
    },

    logoutUser: function() {
        return User.logout().then(() => {
            location.hash = "login"
        })
    },

    fetchPosts: function() {
        STORE.data.collection.fetch()
    },

    savePost: function(postObj) {
        var post = new PostModel(postObj)
        post.save().then(
            (response) => {
                location.hash = 'home'
            },
            (error) => {
                alert('sorry your post was unsuccessful')
            })
    }
}

export default ACTIONS