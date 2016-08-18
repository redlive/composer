/**
 * Created by Redlive on 2016-08-17.
 */

var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema)