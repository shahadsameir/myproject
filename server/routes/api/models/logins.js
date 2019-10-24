const mongoose = require('mongoose');

var logSchema = mongoose.Schema(
    {   _id:mongoose.Schema.Types.ObjectId,
       name: String,
       password:String,
      created: {type: Date, default: Date.now}
    });

    module.exports = mongoose.model('login', logSchema);