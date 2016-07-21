import Backbone from 'backbone'
import _ from 'underscore'
import {PostCollection} from './models/models'

const STORE = _.extend(Backbone.Events, {

    data: {
        collection: new PostCollection()
    },

    retrieveData: function() {
        return _.clone(this.data)
    },
})

STORE.initialize() //justin, why do i have to do this?

export default STORE