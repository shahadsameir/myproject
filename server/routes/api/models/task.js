const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
            member:Array,
           taskname:String,
             description:String,
             startat:String,
            endat: String,
            created: {type: Date, default: Date.now}
});

module.exports = mongoose.model( 'task' ,taskSchema);