import Backbone from 'backbone'
import _ from 'underscore'
import {PostCollection} from './models/models'

const STORE = _.extend(Backbone.Events, {

    data: {
        collection: new PostCollection()
    },

    emitChange: function() {
        this.trigger('updateContent')
    },

    retrieveData: function() {
        console.log(this.data)
        return _.clone(this.data)
    },

    initialize: function() {
        this.data.collection.on('sync update', this.emitChange.bind(this))
    }
})

STORE.initialize()
// console.log(this.data)

export default STORE