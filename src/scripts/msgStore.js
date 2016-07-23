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
        return _.clone(this.data)
    },

    initialize: function() {
        this.data.collection.on('sync update', this.emitChange.bind(this))
    }
})

STORE.initialize()

export default STORE