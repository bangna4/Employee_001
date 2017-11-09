const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = Schema({
      employee_id:{type: String},
      first_name:{type: String,required: true},
      last_name:{type: String,required: true},
      phone: {type: String},
      email: {type: String}
});

const leaveSchema = Schema({
employee_id:employee,
leave_from:{type: Date,required: true},
leave_to:{type: Date,required: true},
reason: {type: String},
status: {type:Boolean},
lead: employee
});

module.exports = mongoose.model('Leave',leaveSchema);
