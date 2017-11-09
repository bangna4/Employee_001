const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = Schema({
      employee_id:{type: String},
      first_name:{type: String,required: true},
	  last_name:{type: String,required: true},
      phone: {type: String},
      email: {type: String}
});


const projectSchema = Schema({
title:{type: String},
techhnology:{type: String},
start_date:{type: Date},
end_date:{type: Date},
client_name:{type: String},
billable_resource:{type: Number},
buffer_resource:{type: Number},
current_team:[employee],
previous_team:[employee],
current_project_manager:[employee],
previous_project_manager:[employee]
});


module.exports = mongoose.model('project',projectSchema);
