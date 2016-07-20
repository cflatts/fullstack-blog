import Backbone from 'backbone'
import _ from 'underscore'
import {PostCollection} from './models/models'

const STORE = _.extend(Backbone.Events, {

    data: {
        collection: new PostCollection
    }
})