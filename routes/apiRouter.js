let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Post = require('../db/schema.js').Post

//USER ROUTES
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err)
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

//MODEL ROUTES

apiRouter.post('/posts', function(request, response){
    let post = new Post(request.body)
    post.save(function(error) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(post)
        }
    })
})

apiRouter.get('/user/posts', function(request, response) {
    Posts.find({username: request.user._id}, function(error, records) {
        if(error) {
            response.send(error)
        }
        else {
            response.json(records)
        }
    })
})

apiRouter.post('/posts', function(request, response) {

})

module.exports = apiRouter