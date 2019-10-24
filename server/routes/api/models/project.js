const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
            member:Array,
           projectname:String,
             description:String,
             startat:String,
            endat:String,
            created: {type: Date, default: Date.now}
});

module.exports = mongoose.model( 'project' ,projectSchema);