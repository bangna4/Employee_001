const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = Schema({
      street:{type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: String}
      });

const project = Schema({
      title:{type: String},
      techhnology:{type: String},
      manager:{type:String},
      start_date:{type: Date},
      end_date:{type: Date},
      rating:{type: Number, max: 5}
});


const lead = Schema({
      employee_id:{type: String},
      name: {type: String},
      rating:{type: Number, max: 5}
});


const employeeSchema = Schema({
first_name:{type: String,required: true},
last_name:{type: String,required: true},
email:{type: String,required: true},
dob:{type: Date,required: true},
gender:{type: String,required: true},
employee_id:{type: String,required: true },
joining_date:{type: Date,required: true},
skill:{type: String,required: true },
designation:{type: String,required: true },
interview_comments:{type: String},
islead:{type:Boolean},
phone:{type:String},
current_address:addressSchema,
permanent_address:addressSchema,
current_project:[project],
previous_project:[project],
current_lead:lead,
previous_lead:[lead]
});


module.exports = mongoose.model('Employee',employeeSchema);
