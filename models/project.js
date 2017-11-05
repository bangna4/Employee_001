const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = Schema({
      employee_id:{type: String},
      name: {type: String},
      phone: {type: String},
      email: {type: String}
});


const projectSchema = Schema({
title:{type: String},
techhnology:{type: String},

current_team:[employee],
previous_team:[employee],
current_project_manager:[employee],
previous_project_manager:[employee],
current_lead:[employee],
previous_lead:[employee]
});


module.exports = mongoose.model('project',projectSchema);
