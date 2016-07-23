import {User, PostModel} from './models/models'


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

    savePost: function() {
        var post = new PostModel()
    }
}

export default ACTIONS