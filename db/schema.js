//time to start a redo because i know more about how to do this
const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

})

const postsSchema = new Schema ({
    title: {type: String, required: true},
    preview: {type: String, required: true},
    content: {type: String, required: true},
    username: {type: String},
    // {timestamps: true}
})

module.exports = {
  User: createModel('User', usersSchema),
  Post: createModel('Post', postsSchema)
}
