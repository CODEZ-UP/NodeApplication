const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    age : { type : Number, required : true},
    salary : Number,
    designation : { type : String, required : true},
    user : { type : Schema.Types.ObjectId, ref : "User"}
});



module.exports = mongoose.model("Employee", employeeSchema );